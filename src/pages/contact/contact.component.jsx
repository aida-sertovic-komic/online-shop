import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import './contact.styles.scss';

class ContactPage extends React.Component {
    constructor(){
        super();

        this.state= {
            userName: '',
            email: '',
            message: ''

        };
    }

    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      }; 

    render(){
        // const { userName, email, message} = this.state;
        return(
            <div className='contact-page'>
                <table>
                    <tbody>
                        <tr>
                            <td className='firstColumn'></td>
                            <td className='secondColumn'>
                                <h2>Pošalji nam poruku</h2>
                                <div className='contact-form'>
                                <FormInput
                                    name="Name" 
                                    type='text' 
                                    handleChange=""
                                    value=""
                                    label='Ime'
                                    required />
                                <FormInput
                                    name="LastName" 
                                    type="text" 
                                    handleChange=""
                                    value=""
                                    label='Prezime'
                                    required />
                                <FormInput
                                    name="subject" 
                                    type="text" 
                                    handleChange=""
                                    value=""
                                    label='Predmet'
                                    required />
                                <FormInput
                                    name='E-mail' 
                                    type="email" 
                                    handleChange=""
                                    value=""
                                    label='E-mail'
                                    required />
                                <textarea
                                    name="message" 
                                    placeholder='Poruka' 
                                    type='text'
                                    handleChange=""
                                    value=""
                                    required />
                                <button>POŠALJI</button>
                                </div>
                            </td>
                            <td className='thirdColumn'></td>
                        </tr>
                    </tbody>
                </table>
          
          </div>
        )
    }
}

export default ContactPage;