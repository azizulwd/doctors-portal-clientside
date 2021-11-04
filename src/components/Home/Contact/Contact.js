import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contactus">
            <div className="contactus_title">
                <h3>CONTACT US</h3>
                <h1>Always Connect with us</h1>
            </div>
            <div className="contactus_inner">
                <div className="contact_form">
                    <input type="email" placeholder="Email Address*" />
                    <input type="text" placeholder="Subject*" />
                    <textarea placeholder="Your Message*"></textarea>
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;