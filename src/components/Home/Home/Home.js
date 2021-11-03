import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Facility from '../Facility/Facility';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Address></Address>
            <Services></Services>
            <Facility></Facility>
        </div>
    );
};

export default Home;