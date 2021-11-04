import React from 'react';
import './Testimonial.css';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="container testimonial_title">
                <h3>TESTIMONIAL</h3>
                <h1>What's Our Patients Says</h1>
            </div>
            <div className="container testimonial_inner">
                <div className="testimonial_user">
                    <div className="testimonial_text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dicta eum ullam reprehenderit inventore dolorem! Quo et dignissimos corrupti provident?</p>
                    </div>
                    <div className="testinial_user_info">
                        <div className="testinial_user_pic">
                            <img src={people1} alt="" />
                        </div>
                        <div className="testinial_user_details">
                            <h4>Windson Herry</h4>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial_user">
                    <div className="testimonial_text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dicta eum ullam reprehenderit inventore dolorem! Quo et dignissimos corrupti provident?</p>
                    </div>
                    <div className="testinial_user_info">
                        <div className="testinial_user_pic">
                            <img src={people2} alt="" />
                        </div>
                        <div className="testinial_user_details">
                            <h4>Windson Herry</h4>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial_user">
                    <div className="testimonial_text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dicta eum ullam reprehenderit inventore dolorem! Quo et dignissimos corrupti provident?</p>
                    </div>
                    <div className="testinial_user_info">
                        <div className="testinial_user_pic">
                            <img src={people3} alt="" />
                        </div>
                        <div className="testinial_user_details">
                            <h4>Windson Herry</h4>
                            <p>California</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;