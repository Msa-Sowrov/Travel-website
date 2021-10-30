import React from 'react';
import './Trip.css'

const Trip = ({trip}) => {
    const {img, name, desf} = trip
    return (
        <div className="my-card col-md-3 col-12">
            <img className="img-fluid" src={img} alt="" />
            <h4>{name}</h4>
            <p>{desf}</p>

        </div>
    );
};

export default Trip;