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
            {
                trips.length ? 
                
                <div className=" ">
                <div className="container">
                    <div className="text-center my-5">
                <h1>Your Next Tour with us..</h1>
    
                    </div>
                    <div className="row gap-4 d-flex justify-content-center">
                    {
                        trips.map(trip=> <MyPlan key={trip._id} trip={trip}></MyPlan> )
                    }
                    </div>
                </div>
            </div>
                     
                :
                <div className="text-center my-5">
                <h1>Sorry..No Tour plane Availble.</h1>
                
    
                    </div>         
            }
          
        </div>
    );
};

export default MyTrip;