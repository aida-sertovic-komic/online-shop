import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import googleLogo from './googleLogo.svg';

class SignIn extends React.Component {
    constructor(props){
        super(props);
    
    this.state = {
        email: '',
        password: ''
    }
}

    handleSubmit = async event =>  {
        event.preventDefault();
        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email:'', password: '' });
        }
    catch(error){
        console.log(error);
    }
    }

    handleChange = event =>  {
        const  { value, name } = event.target;

        this.setState({
            [name]: value
        });
    };


    render() {
        return(
            <div className='sign-in'>
                <h2>Prijava</h2>
                <span> Unesite e-mail i lozinku za prijavu.</span>

                <form onSubmit={this.handleSubmit} > 
                    <FormInput
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange} 
                        value={ this.state.email } 
                        label='E-mail'
                        required />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value = {this.state.password} 
                        handleChange={this.handleChange} 
                        label='Lozinka'
                        required />

                    <div className="buttons">
                    <CustomButton type="submit" >PRIJAVA</CustomButton> 
                    <CustomButton className='googleSignIn' type="button" onClick = {signInWithGoogle} isGoogleSignIn> <img src={googleLogo} alt='goo' /> </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;