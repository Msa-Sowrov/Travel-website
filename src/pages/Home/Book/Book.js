import React from 'react';
import './Book.css'
import { ObjectID } from 'bson';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Placeholder } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';



const Book = () => {
    const {user} = useAuth()
    const {id} = useParams();
    const [trips, setTrips] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/trips')
        .then(res=>res.json())
        .then(data=>setTrips(data))
    },[])

   let bookedTrip = trips.find(trip=>id === trip._id)
    

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        
        bookedTrip._id = new ObjectID().toString();
        bookedTrip.email = data.email;
        bookedTrip.departure = data.departure;
        bookedTrip.return = data.return;
        fetch('http://localhost:5000/booked', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookedTrip)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('Your trip Confirmed. Thank you')
            }
        })
    } 
    return (
        <div>

            <h1>this is booking page </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src="https://i.ibb.co/RQcYswC/pngegg-10.png" alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                    <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
                            <h2>Lets Explore: </h2>
                            <h5>Name:{user.displayName}</h5>
                            <span>Email:</span>
                            <input {...register("email")} defaultValue={user.email}  />
                            <span>Departure Date:</span>
                            <input type="date" {...register("departure", { require: true})}   placeholder="Departure Date" />
                            <span>Return Date:</span>
                            <input type="date" {...register("return", { require: true })} placeholder="Return Date"/>
                            <span className="text-danger">To Book this Tour Please do Submit this form. Thank you.</span>
                            <input className="bg-own" type="submit" />
                    </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;