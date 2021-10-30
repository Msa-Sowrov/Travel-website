import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './LoginPage.css'
const LoginPage = () => {
    const {googleSignIn} = useFirebase();
    return (
        <div className="container">
            <div className="row gap-5 d-flex align-items-center">
                
                <div className="login col-md-6 col-12">
                    <h2>Use your Google Account to sign in to our <b>Travel application</b></h2>

                    <p>You can use your Google Account to sign in to third-party apps and services. You won't have to remember individual usernames and passwords for each account.</p>
                    <div className="text-center">
                        <button onClick={googleSignIn} className='bg-own'><img src="https://i.ibb.co/YBP0yd2/pngegg-17.png" alt="" /> Signin with google</button>

                    </div>
                </div>
                <div className="col-md-4 col-8">
                    <img className="img-fluid" src="https://i.ibb.co/rFbhP15/pngegg-11.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;