import React from 'react';
import doctorPic from '../../../images/doctor-small.png';
import phoneLogo from '../../../images/doctors-phone.png';
import './Doctors.css';

const Doctors = () => {
    return (
        <div className="doctors">
            <div className="doctors_title">
                <h3>Our Doctors</h3>
            </div>
            <div className="container doctors_inner">
                <div className="doctor">
                    <img src={doctorPic} alt="" />
                    <h3>Dr. Caudi</h3>
                    <p>
                        <img src={phoneLogo} alt="" />
                        <span>+880 1788888888</span>
                    </p>
                </div>
                <div className="doctor">
                    <img src={doctorPic} alt="" />
                    <h3>Dr. Caudi</h3>
                    <p>
                        <img src={phoneLogo} alt="" />
                        <span>+880 1788888888</span>
                    </p>
                </div>
                <div className="doctor">
                    <img src={doctorPic} alt="" />
                    <h3>Dr. Caudi</h3>
                    <p>
                        <img src={phoneLogo} alt="" />
                        <span>+880 1788888888</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Doctors;