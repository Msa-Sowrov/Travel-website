import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
          <div className="container">
          <div className="row d-flex align-items-center">
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src="https://i.ibb.co/fD21CBp/pngegg-14.png" alt="" />
                </div>
                <div className="banner-title col-md-6 col-12">
                    <h1 className="">Travel<br/>
                     Best Holidays Trips <br/>
                     In The World</h1>
                     <p>
                     Traveling fosters a medium to build human connections with one another by learning about culture, food, new sites, music, and the way people live their day to day lives in different parts of the world
                     </p>
                </div>

            </div>
          </div>
        </div>
    );
};

export default Banner;