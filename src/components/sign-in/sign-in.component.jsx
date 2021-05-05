import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit =  async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (error) {
            console.log('Error Message',error.message);
        }
        
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h1>I Already have an Account!</h1>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} onChange={this.handleChange} label="email" required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='password'
                        required />
                    <div className='buttons'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {''}
                        Sign in with Google
                    </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default SignIn;