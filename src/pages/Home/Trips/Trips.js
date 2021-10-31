import React, { useEffect, useState } from 'react';
import Trip from '../Trip/Trip';
import './Trips.css'

const Trips = () => {
    const [trips, setTrips] = useState([])
    useEffect(()=>{
        fetch('https://evening-reaches-09625.herokuapp.com/trips')
        .then(res=>res.json())
        .then(data=> setTrips(data))
    },[])
    if(trips.length === 0 ){
        return <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    return (
        <div>

            <div className="trips">
            <div className="container">
                <div className="text-center">
                     <h1 className="title">Our Service</h1>

                </div>
                <div className="row gap-4 d-flex justify-content-center">
                {
                    trips.map(trip => <Trip key={trip._id} trip={trip}></Trip>)
                }
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Trips;