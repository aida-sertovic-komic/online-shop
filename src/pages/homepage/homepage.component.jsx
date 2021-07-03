import React from 'react';
import Directory from '../../components/directory/directory.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import PopularProduct from '../../components/popular-product/popular-product.component';
// import CollectionPreview from '../../components/preview-collection/collection-preview.component';
// import CollectionItem from '../../components/collection-item/collection-item.component';
import coverPhoto from './coverPhoto.jpg';
import clock from './clock.png';
import creditCard from './creditCard.png';
import freeShipping from './freeShipping.png';
import './homepage.styles.scss';

const HomePage = ({ collections }) => (

    <div className='homepage'>
        <img src={coverPhoto} alt='cover' />
        <div className='overlay'>
            <table>
                <tbody>
                    <tr>
                        <td className='firstColumn'></td>
                        <td className='secondColumn'>
                            <div className='gift-shop'>
                                <h1>Gift Shop</h1>
                                <Link to='/shop'><CustomButton>POGLEDAJ PONUDU</CustomButton></Link>
                            </div>
                        </td>
                        <td className='third'></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='benefits'>
            <div>
                <img src={freeShipping} alt='freeShipping' />
                <h3>BESPLATNA DOSTAVA</h3>
            </div>
            <div>
                <img src={clock} alt='clock' />
                <h3>ISPORUKA ZA 2 DANA</h3>
            </div>
            <div>
                <img src={creditCard} alt='creditCard' />
                <h3>KARTIČNO PLAĆANJE</h3>
            </div>
        </div>
        <div className='category'>
            <h2>Kategorije</h2>
        </div>
        <Directory />
        
        <div className='popular-products'>
            <h2>Izdvajamo iz ponude</h2>
            <PopularProduct />
        </div>
    </div>
);
export default HomePage;
