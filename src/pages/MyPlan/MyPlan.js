import React from 'react';

const MyPlan = ({trip}) => {
    const {img,status, name, desf, email, _id, departure}=trip;
    const deleteTrip = (id)=>{
       const confirm = window.confirm('Are you sure to cancle your trip?')
       if(confirm){
        const url = `http://localhost:5000/bookedTri/${id}`
        fetch(url,{
            method:'delete'
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.deletedCount){
                alert('successfuly deleted')
            }
        })
     }

       }
       
    return (
        <div className="my-card card col-md-3 col-12">
        <div className="">
        <img className="img-fluid" src={img} alt="" />

        </div>
        <div className='card-body'>
        <h4>{name}</h4>
        <p>{desf}</p>
        <p>Email: {email}</p>
        <p className='text-danger'>Status: {status}</p>
        <p>Departure: {departure}</p>
        </div>
        <div className="card-footer">
            <button onClick={()=>{deleteTrip(_id)}}>Cancel the trip</button>
        </div>

    </div>
    );
};

export default MyPlan;