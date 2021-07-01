import React from 'react';
import Directory from '../../components/directory/directory.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {Link} from 'react-router-dom';
import coverPhoto from './coverPhoto.jpg';
import './homepage.styles.scss';

const HomePage = () => (

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
    </div>
);
export default HomePage;
