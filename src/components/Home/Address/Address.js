import React from 'react';
import clockLogo from '../../../images/clock.png';
import addressLogo from '../../../images/address.png';
import phoneLogo from '../../../images/phone.png';
import './Address.css';

const Address = () => {
    return (
        <div className="address">
            <div className="container address_inner">
                <div className="opening_time">
                    <div className="opening_logo">
                        <img src={clockLogo} alt="" />
                    </div>
                    <div className="opening_info">
                        <h4>Opening Hours</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="opening_time">
                    <div className="opening_logo">
                        <img src={addressLogo} alt="" />
                    </div>
                    <div className="location">
                        <h4>Visit our Location</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="contact_by_phone">
                    <div className="opening_logo">
                        <img src={phoneLogo} alt="" />
                    </div>
                    <div className="opening_info">
                        <h4>Contact us now</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;