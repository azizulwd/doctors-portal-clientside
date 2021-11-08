import React, { useState } from 'react';
import loginImg from '../../../images/login.png';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginForm = e =>{
        e.preventDefault();
    }

    return (
        <div className="login">
            <div className="container login_inner">
                <div className="login_form">
                    <div className="login_header">
                        <h3>Login</h3>
                    </div>
                    <form onSubmit={handleLoginForm}>
                        <input onChange={handleOnChange} type="email" placeholder="Email" name="email" />
                        <input onChange={handleOnChange} type="password" placeholder="Password" name="password" />
                        <button type="submit">Login</button>
                    </form>
                    <div className="toggle_form">
                        <Link to="/register">New user? Create an Account.</Link>
                    </div>
                </div>
                <div className="login_img">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;