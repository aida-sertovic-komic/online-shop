import React from 'react';

import { firestore } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import './popular-product.styles.scss';

class PopularProduct extends React.Component {

    state = {
        collections: null
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


    render() {
        return (
            <div className='popular-page'>

                {
                    this.state.collections &&
                    this.state.collections.length > 0 &&
                    this.state.collections.map(collection => {
                        return (
                            <>
                                {collection.items.map(item => {
                                    if (item.price > 140) {
                                        return (
                                            <div><Link to={`/product/${item.id}`}><img src={item.imageUrl} alt='item' /></Link>
                                            <h6>{item.name}</h6>
                                            </div>

                                        )
                                    }
                                })}
                            </>
                        )
                    })
                }

            </div>

        )
    }
}
export default PopularProduct;