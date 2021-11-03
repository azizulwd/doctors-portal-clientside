import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container header_inner">
                <Link to="/home">Home</Link>
                <Link to="/home">About</Link>
                <Link to="/home">Dental Services</Link>
                <Link to="/home">Reviews</Link>
                <Link to="/home">Blog</Link>
                <Link to="/home">Contact Us</Link>
            </div>
        </div>
    );
};

export default Header;