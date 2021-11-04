import React from 'react';
import Address from '../Address/Address';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Facility from '../Facility/Facility';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Address></Address>
            <Services></Services>
            <Facility></Facility>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;