import React from 'react';
import loginImg from '../../../images/login.png';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const handleForm = e =>{
        e.preventDefault();
    }

    return (
        <div className="login">
            <div className="container login_inner">
                <div className="login_form">
                    <div className="login_header">
                        <h3>Login</h3>
                    </div>
                    <form onSubmit={handleForm}>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
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