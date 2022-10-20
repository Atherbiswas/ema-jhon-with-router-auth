import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './Login.css'

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    //use navigate to home route(1)
    const navigate = useNavigate();
    //use location for user
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' 

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then( result => {
                const user = result.user;
                console.log(user);
                form.reset();
                //use navigate to home route(2)
                navigate(from, {replace: true})
            })
            .catch( error => console.error(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}> 
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Enter your password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-jhon? <Link to='/signup'>SignUp Now</Link> </p>
        </div>
    );
};

export default Login;