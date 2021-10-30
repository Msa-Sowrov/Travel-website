import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Trips from '../Trips/Trips';

const HomeAll = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Trips></Trips>
        </div>
    );
};

export default HomeAll;