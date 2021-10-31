import React from 'react';
import { Link } from 'react-router-dom';
import './Fotter.css'
const Fotter = () => {
    return (
            <footer className='body'>
                    <img className="footerImg w-100" src="https://i.ibb.co/vH32ZHw/pngegg-18.png" alt="" />
                <div className="footer">
            <div className="container">
                <div className="row">
                     <div className="col-md-5 col-12">
                         <div className="brand d-flex align-items-center"> 
                         <img className="img-fluid" src="https://i.ibb.co/51m13YX/pngegg-13.png" alt="" />
                         <h2>TripIt</h2>
                         </div>
                         <div className="brand-title">
                         <p><i className="fas fa-phone-alt"></i> 01010101010101</p>
                          <p><i className="fas fa-envelope"></i> mdsowrov315@gmail.com</p>
                          <p><i className="fas fa-envelope"></i> mdsowrov315@gmail.com</p>
                         </div>
                     </div>
                     <div className="fot col-md-5 col-12">
                         <h2>Useful Link</h2>
                         <Link to="/">Home</Link><br/>
                         <Link to="/alltrip">All Trip</Link><br/>
                         <Link to="/">About</Link><br/>
                         <Link to="/login">LogIN</Link><br/>
                         

                     </div>
                     <div className="text-center mb-3">
                         <small >© Copyright 2022 msa sowrov all rights reserved.</small>
                    </div>

                </div>
            </div>
        </div>
 
            </footer>
           );
};

export default Fotter;