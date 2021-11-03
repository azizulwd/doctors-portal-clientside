import React from 'react';
import serviceLogo1 from '../../../images/fluoride.png';
import serviceLogo2 from '../../../images/cavity.png';
import serviceLogo3 from '../../../images/whitening.png';
import './Services.css';

const Services = () => {
    return (
        <div className="services">
            <div className="services_title">
                <h3>OUR SERVICES</h3>
                <h1>Services We Provide</h1>
            </div>
            <div className="container services_inner">
                <div className="service_item">
                    <img src={serviceLogo1} alt="" />
                    <h3>Fluoride Treatment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ea.</p>
                </div>
                <div className="service_item">
                    <img src={serviceLogo2} alt="" />
                    <h3>Cavity Filling</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ea.</p>
                </div>
                <div className="service_item">
                    <img src={serviceLogo3} alt="" />
                    <h3>Teath Whitening</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, ea.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;