import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {

  const {user, logOut} = useAuth()
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-own">
  <div className="container">
    <Link className="navbar-brand" to="/homeAll">
        <img src="https://i.ibb.co/51m13YX/pngegg-13.png" alt="" />
        <span className="fw-bold">TripIt</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/alltrip">Tours</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        {

          user.email&&
          <>
          <li className="nav-item">
          <Link className="nav-link" to='/mytrip'>My Tour</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to='/manage'>Manege Trip</Link></li>
            <li><Link className="dropdown-item" to='/add'>Add Trip</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
          </>

        }
        
        
      </ul>
      <form className="d-flex align-items-center">
        {
          user.email ?
          <button onClick={logOut} className="btn btn-outline-success" type="submit">Logout</button>
          :
      <Link to="/login">
          <button className="btn btn-outline-success" type="submit">Signin</button>
      </Link>
        }

        <span className='mx-2'>Sign in as:{user?.displayName}</span>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;