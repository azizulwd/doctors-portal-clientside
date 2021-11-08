import React from 'react';
import loginImg from '../../../images/login.png';
import { Link } from 'react-router-dom';

const Register = () => {

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
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Re-type Password" />
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