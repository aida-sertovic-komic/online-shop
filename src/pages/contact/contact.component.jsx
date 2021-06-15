import React from 'react';
import emailjs from 'emailjs-com';
import FormInput from '../../components/form-input/form-input.component';
import './contact.styles.scss';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            LastName: '',
            email: '',
            subject: '',
            message: ''

        };
    }

    resetForm = () => {


        this.setState({
            ...this.state,
            name: '',
            LastName: '',   
            email: '',
            subject: '',
        })
        document.getElementById("output").value="";
        console.log('radi');

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    };

    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_p7ru5ev', 'template_gqm6vec', e.target, 'user_eSZqDBr2tvNQsFPZ6DN7P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        }

    render() {
        return (
            <div className='contact-page'>
                <table>
                    <tbody>
                        <tr>
                            <td className='firstColumn'></td>
                            <td className='secondColumn'>
                                <h2>Pošalji nam poruku</h2>
                                <form className='contact-form'
                                
                                onSubmit={this.sendEmail} >
                                    <FormInput
                                        name="name"
                                        type="text"
                                        handleChange={this.handleChange}
                                        value={this.state.name}
                                        label='Ime'
                                        required />
                                    <FormInput
                                        name="LastName"
                                        type="text"
                                        handleChange={this.handleChange}
                                        value={this.state.LastName}
                                        label='Prezime'
                                        required />
                                    <FormInput
                                        name="email"
                                        type="email"
                                        handleChange={this.handleChange}
                                        value={this.state.email}
                                        label='E-mail'
                                        required />
                                    <FormInput
                                        name="subject"
                                        type="text"
                                        handleChange={this.handleChange}
                                        value={this.state.subject}
                                        label='Predmet'
                                        required />

                                    <textarea 
                                        id="output"
                                        type="text"
                                        name="message"
                                        placeholder='Poruka'
                                        handleChange={this.handleChange}
                                        required>
                                        {this.state.message}
                                    </textarea>
                                    <input type="submit" value="Pošalji" className='button' onClick={this.resetForm}/>
                                </form>
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