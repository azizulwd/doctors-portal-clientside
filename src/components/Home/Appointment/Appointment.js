import React from 'react';
import doctorPic from '../../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    
    return (
        <div className="appointment">
            <div className="container appointment_inner">
                <div className="appointment_doctor_pic">
                    <img src={doctorPic} alt="" />
                </div>
                <div className="appointment_info">
                    <h3>APPOINTMENT</h3>
                    <h1>Make an appointment Today</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nihil dolorem, officia explicabo voluptate suscipit.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;