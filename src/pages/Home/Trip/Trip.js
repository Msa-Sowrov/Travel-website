import React from 'react';
import { Link } from 'react-router-dom';
import './Trip.css'

const Trip = ({trip}) => {
    const {_id, img, name, desf} = trip
    return (
        <div className="my-card card col-md-3 col-12">
            <div className="">
            <img className="img-fluid" src={img} alt="" />

            </div>
            <div className='card-body'>
            <h4>{name}</h4>
            <p>{desf}</p>
            </div>
            <Link className="card-footer" to={`/book${_id}`}>
                <button className="my-btn">Book it</button>
            </Link>

        </div>
    );
};

export default Trip;