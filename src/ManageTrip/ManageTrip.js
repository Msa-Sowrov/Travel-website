import React, { useEffect, useState } from 'react';
import './ManageTrip.css'
const ManageTrip = () => {
    const [allTrip, setAllTrip] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bookedTrip')
        .then(res=>res.json())
        .then(data=>setAllTrip(data))
    },[allTrip])

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
   

    const approve =(id, upStatus)=>{
        let current = allTrip.find(trip=>trip._id===id)
        current.status = upStatus;
        console.log(current)
        const url = `http://localhost:5000/bookedTrip${id}`
        fetch(url, {
            method:'put',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(current)

        })
    }
    return (
        <div className="manageTrip">
            <div className="container table-responsive">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#Places</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
      <th scope="col">Accept/cancle/remove</th>
    </tr>
  </thead>
  <tbody>
{
    allTrip.map(trip => 
        <tr>
        <th scope="row">{trip.name}</th>
        <td>{trip.email}</td>
        <td className=" text-danger fw-bold">{trip.status}</td>
        <td className="control">
        <button onClick={()=>approve(trip._id, "Approved")}><i class="far fa-check-circle"></i></button>
        <button onClick={()=>approve(trip._id, "Cancled")}> <i class="far fa-window-close"></i></button>
        <button onClick={()=>deleteTrip(trip._id)}><i class="fas fa-trash"></i></button>
        </td>
      </tr> 
    )
}
  </tbody>
</table>
            </div>
        </div>
    );
};

export default ManageTrip;