import React from 'react';
import { useForm } from "react-hook-form";

const AddTrip = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit=(data)=>{
            fetch('http://localhost:5000/trips',{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(result=>{
                reset()
            })
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">

                    <div className="col-md-6 col-12">
                        <h1>Add More Tours</h1>
                        <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                            <input {...register("img") } placeholder="img url 420x300" />
                            <textarea {...register("description")} placeholder="description"/>
                            <input type="submit" />
                        </form>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src="https://i.ibb.co/zXLx8dM/Woman-With-Suitcase.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTrip;