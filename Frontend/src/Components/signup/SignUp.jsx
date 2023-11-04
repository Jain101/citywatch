import React, { useState } from 'react';
import "./SignUp.css";
import DropDown from './DropDown';

const SignUp = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    const handleChange = (e) => {
        // Update the state for the corresponding input field
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className='body3'>
            <div className="background3">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form className='form3' onSubmit={submitHandler}>
                <h3>Login Here</h3>
                <input type="text" placeholder="Email or Phone" id="username" className='input3' value={data.email} name='email' onChange={handleChange} />
                <input type="password" placeholder="Password" id="password" className='input3' name='password' value={data.password} onChange={handleChange} />
                <div className='dd'><DropDown /></div>
                <button className='button3' type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default SignUp;
