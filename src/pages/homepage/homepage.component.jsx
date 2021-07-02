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
        <div className='category'>
            <h1>Kategorije</h1>
        </div>
        <Directory />
        <div className='benefits'>
            <div>
                <img src={freeShipping} alt='freeShipping' />
                <h2>BESPLATNA DOSTAVA</h2>
            </div>
            <div>
                <img src={clock} alt='clock' />
                <h2>ISPORUKA ZA 2 DANA</h2>
            </div>
            <div>
                <img src={creditCard} alt='creditCard' />
                <h2>KARTIČNO PLAĆANJE</h2>
            </div>
        </div>
        <div className='popular-products'>
            <h1>Izdvajamo iz ponude</h1>
            <PopularProduct />
        </div>
    </div>
);
export default HomePage;
