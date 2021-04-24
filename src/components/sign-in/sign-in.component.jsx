import React from 'react';
import './sign-in.styles.scss';
class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
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
                    <input name='email' type='email' value={this.state.email} onChange={this.handleChange} required />
                    <label htmlFor="email">Email</label>
                    <input
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />
                    <label htmlFor="password">Password</label>
                    <input type="submit" value='submit form'/>
                </form>
            </div>
        )
    }
}
export default SignIn;