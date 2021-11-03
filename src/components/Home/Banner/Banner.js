import React from 'react';
import bannerImg from '../../../images/chair.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container banner_inner">
                <div className="banner_left">
                    <h1>Your New Smile <br /> Starts Here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit aliquid praesentium culpa voluptatibus aperiam numquam dolorum dolorem quidem sequi.</p>
                    <button>GET APPOINTMENT</button>
                </div>
                <div className="banner_right">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;