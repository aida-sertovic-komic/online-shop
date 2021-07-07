import React from 'react';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import ProductPage from '../../pages/product/product.component';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <Link className='title' to={`/shop/${title.toLowerCase()}`}>{title === 'Sesiri' ? 'Šeširi' : title === 'Naocale' ? 'Naočale' : title}</Link>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <Link
                        className='link'
                        to={`/product/${item.id}`}>
                        <CollectionItem key={item.id} item={item} />
                    </Link>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;