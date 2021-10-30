import React, { useEffect, useState } from 'react';
import Trip from '../Trip/Trip';
import './Trips.css'

const Trips = () => {
    const [trips, setTrips] = useState([])
    useEffect(()=>{
        fetch('./trip.json')
        .then(res=>res.json())
        .then(data=> setTrips(data))
    },[])

    console.log(trips)
    return (
        <div>

            <div className="trips">
            <div className="container">
            <h1>Our Service</h1>
                <div className="row gap-4 d-flex justify-content-center">
                {
                    trips.map(trip => <Trip trip={trip}></Trip>)
                }
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Trips;