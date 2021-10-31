import React from 'react';
import Contact from '../../../Contact/Contact';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Fotter from '../Fotter/Fotter';
import Header from '../Header/Header';
import Trips from '../Trips/Trips';

const HomeAll = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Trips></Trips>
            <Contact></Contact>
            <About></About>

            <Fotter></Fotter>
        </div>
    );
};

export default HomeAll;