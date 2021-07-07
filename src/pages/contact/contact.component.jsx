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
        document.getElementById("output").value = "";
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
                document.querySelectorAll('.form-input').forEach(element => {
                    element.value = '';
                });
                document.getElementById('successMessage').innerHTML = 'Hvala, uspješno ste poslali poruku.';
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

                                    {/* <textarea
                                        id="output"
                                        className="form-input"
                                        type="text"
                                        name="message"
                                        placeholder='Poruka'
                                        handleChange={this.handleChange}
                                        required>
                                        {this.state.message}
                                    </textarea> */}
                                    <FormInput
                                        name="message"
                                        type="text"
                                        handleChange={this.handleChange}
                                        value={this.state.message}
                                        label='Poruka'
                                        required />
                                    <input type="submit" value="Pošalji" className='button' />
                                     <p id="successMessage"></p> 
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

// #28a745
// 1200 - @media screen only and (max-width: 1199) - ide css za 992
// 992 - @media screen only and (max-width: 991) - ide css za 768
// 768 - @media screen only and (max-width: 767) 
// 576 - @media screen only and (max-width: 575) 


export default ContactPage;