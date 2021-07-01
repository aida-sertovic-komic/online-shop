import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title === 'Sesiri' ? 'Šeširi' : title === 'Naocale' ? 'Naočale' : title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <Link to={`/product/${item.id}`}>
                            <CollectionItem key={item.id} item={item} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
}
)
export default connect(mapStateToProps)(CollectionPage);