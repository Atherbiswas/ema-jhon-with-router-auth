import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState(null);
    //import context for sign up
    const {createUser} = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;
        //password length check...
       if(password.length < 6){
            setError('Password should be at least 6 character or more.');
            return;
       }
       // password validation check...
       if(password !== confirmPass){
            setError('Your password did not match.');
            return;
       }
       createUser(email, password)
            .then( result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
            })
            .catch( error => console.error(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Enter your password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" name="confirmPass" placeholder='Enter your confirm password' required/>
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link> </p>
        </div>
    );
};

export default SignUp;