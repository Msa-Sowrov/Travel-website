import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import MyPlan from '../MyPlan/MyPlan';

const MyTrip = () => {
    const [trips, setTrips] = useState([])
    const {user} = useAuth();
    useEffect(()=>{
        fetch('http://localhost:5000/bookedTrip')
        .then(res=>res.json())
        .then(data=> setTrips(data.filter(t=>t.email === user.email)))
    },[trips])

    return (
        <div>
          <div className="trips">
            <div className="container">
            <h1>Our Service</h1>
                <div className="row gap-4 d-flex justify-content-center">
                {
                    trips.map(trip=> <MyPlan key={trip._id} trip={trip}></MyPlan> )
                }
                </div>
            </div>
        </div>
   
        </div>
    );
};

export default MyTrip;