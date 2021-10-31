import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit=(data)=>{   
            console.log(data)
    }
         return (
        <div>
            <div className="py-5">

                <div><img className="w-100" src="https://i.ibb.co/DtcJYfd/contact.png" alt="" /></div>
                <div className="container">
                    
                    <div className="row">
                            <div className="col-md-6 col-12">
                                <h1>CONTACT US TO GET MORE INFO</h1>
                                <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="your full name" />
                            <input {...register("email") } placeholder="Email" />
                            <textarea {...register("description")} placeholder="Your messege"/>
                            <input type="submit" />
                        </form>
 
                            </div>
                            <div className="col-md-6 col-12">
                                <img className="img-fluid" src="https://i.ibb.co/nPQ7R5F/myTrip.gif" alt="" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;