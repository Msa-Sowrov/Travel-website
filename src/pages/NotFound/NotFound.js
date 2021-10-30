import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found text-center">
            <img className="" src="https://i.ibb.co/nBtvJnn/404.jpg" alt="" />
            <br/>
            <Link to="/">
               <button className="bg-own">Go Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;