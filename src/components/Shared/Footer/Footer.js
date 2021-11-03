import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer_inner">
                <div className="footer_item">
                    <h3>Quick Links</h3>
                    <div className="footer_links">
                        <Link to="/home">Emergency Dental Care</Link>
                        <Link to="/home">Check Up</Link>
                        <Link to="/home">Treatment of Personal Diseases</Link>
                        <Link to="/home">Tooth Extraction</Link>
                    </div>
                </div>
                <div className="footer_item">
                    <h3>Services</h3>
                    <div className="footer_links">
                        <Link to="/home">Emergency Dental Care</Link>
                        <Link to="/home">Check Up</Link>
                        <Link to="/home">Treatment of Personal Diseases</Link>
                        <Link to="/home">Tooth Extraction</Link>
                    </div>
                </div>
                <div className="footer_item">
                    <h3>Oral Health</h3>
                    <div className="footer_links">
                        <Link to="/home">Emergency Dental Care</Link>
                        <Link to="/home">Check Up</Link>
                        <Link to="/home">Treatment of Personal Diseases</Link>
                        <Link to="/home">Tooth Extraction</Link>
                    </div>
                </div>
                <div className="footer_item">
                    <h3>Our Address</h3>
                    <div className="footer_address">
                        <p>New York-101010 Hudson Yards</p>
                    </div>
                    <div className="footer_social_links">
                        <Link to="/home">Facebook</Link>
                        <Link to="/home">Google</Link>
                        <Link to="/home">Twitter</Link>
                    </div>
                    <div className="footer_contact">
                        <p>Call Now</p>
                        <button>+2025550295</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;