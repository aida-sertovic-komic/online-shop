import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import CollectionPreview from '../../components/preview-collection/collection-preview';
import { selectCollections } from '../../redux/shop/shop.selectors'; 

const ShopPage = ({ collections})  => (
  
    
            <div className='shop-page'>
                {
                    collections.map (({id, ...otherCollectonProps})=> (
                        <CollectionPreview key={id} {...otherCollectonProps}/>
                    ))
                }
            </div>
        );
    
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);