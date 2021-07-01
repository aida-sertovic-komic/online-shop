import React from 'react';
import ProductItems from '../../components/product-template/product-items.component';

import { firestore } from '../../firebase/firebase.utils';

import './product.styles.scss';


class ProductPage extends React.Component {
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

         <div className='product-page'>

            {
               this.state.collections &&
               this.state.collections.length > 0 &&
               this.state.collections.map(collection => {
                  return (
                     <>

                        {collection.items.map(item => {
                           let link =(window.location.href).split('/')[4];
                           console.log(link);
                           if (link == item.id) {
                              return (
                                 <ProductItems key={item.image} item={item} />
                              )
                           }
                           return false;
                        })
                        }
                     </>
                  )

               })
            }
         </div>
      )
   }
}
export default ProductPage;