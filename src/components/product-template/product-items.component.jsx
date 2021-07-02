import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './product-items.styles.scss';

const ProductItems = ({ item, addItem }) => {
    const { name, price, imageUrl, description } = item;

    return (
        <div className='product-page'>
            <table>
                <tbody>
                <tr>
                    <td>
                        <div className='image-container'

                            style={{
                                backgroundImage: `url(${imageUrl})`,
                                backgroundSize: `contain`,
                                backgroundRepeat: `no-repeat`,
                                height: `100%`,
                                width: `100%`
                            }}

                        />
                    </td>
                    <td>
                        <div className='description-container'>
                            <span className='title'> {name}</span><br />
                            <span className='price'> Cijena proizvoda: {price} KM</span><br /> <br />
                            <span className='description'> Opis: {description}</span>
                            <div className='custom-button'>
                                <CustomButton onClick={() => addItem(item)} > Dodaj u košaricu</CustomButton>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>



        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductItems);