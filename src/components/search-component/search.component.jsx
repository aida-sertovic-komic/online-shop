import React from 'react';

import { firestore } from '../../firebase/firebase.utils';
import SearchBox from '../searchBox/searchBox.component';
import { Link } from 'react-router-dom';
import './search.styles.scss';

class SearchPage extends React.Component {

    state = {
        collections: null,
        searchfield: ""
    }

    componentDidMount() {
        firestore.collection('collections')
            .get()
            .then(snapshot => {
                const collections = []
                snapshot.forEach(doc => {
                    collections.push(doc.data());
                })
                this.setState({ collections: collections })
            })
            .catch(error => console.log(error))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    onDisplayChange = (event) => {
        document.querySelector('.collectionDropdown').style.display = 'flex';
    }

    onDisplayNone = (event) => {
        document.querySelector('.collectionDropdown').style.display = 'none';
    }

    render() {
        const { searchfield } = this.state;
        return (
            <div className='search-page'>
                <SearchBox searchChange={this.onSearchChange} displayChange={this.onDisplayChange} displayNone={this.onDisplayNone} />
                <table className='collectionDropdown'>
                    <tbody>
                        {
                            this.state.collections &&
                            this.state.collections.length > 0 &&
                            this.state.collections.map(collection => {
                                return (
                                    <>
                                        {collection.items.map(item => {
                                            if (item.name.toLowerCase().includes(searchfield.toLowerCase()) && searchfield !== '') {
                                                return (
                                                    <tr key={item.id} className='filterCollections'>
                                                        <td key={item.id + '_' + item.imageUrl} className='image'><img src={item.imageUrl} alt='item' /></td>
                                                        <td key={item.id + '_' + item.name} className='name'>{item.name}</td>
                                                        <td key={item.id + '_' + item.price} className='price'>{item.price} KM</td>
                                                    </tr>
                                                )
                                            }
                                            return null;
                                        })}
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default SearchPage;