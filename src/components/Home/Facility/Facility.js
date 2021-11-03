import React from 'react';
import facilityImg from '../../../images/treatment.png';
import './Facility.css';

const Facility = () => {
    return (
        <div className="facility">
            <div className="container facility_inner">
                <div className="facility_img">
                    <img src={facilityImg} alt="" />
                </div>
                <div className="facility_description">
                    <h1>Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta minima quisquam nostrum dolores itaque voluptas odit temporibus, debitis, possimus laborum in voluptate architecto sunt aut aperiam facilis vero qui, quasi atque quam sequi! Debitis dignissimos et dolore optio id, numquam nostrum natus perferendis inventore atque dolor nesciunt illo fugiat tempora.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Facility;