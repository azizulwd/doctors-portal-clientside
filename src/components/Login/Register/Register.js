import React, { useState } from 'react';
import loginImg from '../../../images/login.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegisterForm = e =>{
        e.preventDefault();
    }

    return (
        <div className="login">
            <div className="container login_inner">
                <div className="login_form">
                    <div className="login_header">
                        <h3>Register</h3>
                    </div>
                    <form onSubmit={handleRegisterForm}>
                        <input onChange={handleOnChange} type="text" placeholder="Name" name="name" />
                        <input onChange={handleOnChange} type="email" placeholder="Email" name="email" />
                        <input onChange={handleOnChange} type="password" placeholder="Password" name="password" />
                        <input onChange={handleOnChange} type="password" placeholder="Re-type Password" name="password2" />
                        <button type="submit">Register</button>
                    </form>
                    <div className="toggle_form">
                        <Link to="/login">Already have an account? Please login.</Link>
                    </div>
                </div>
                <div className="login_img">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;