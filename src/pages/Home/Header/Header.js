import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {

  const {user, logOut} = useFirebase()
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-own">
  <div class="container">
    <Link class="navbar-brand" to="/homeAll">
        <img src="https://i.ibb.co/51m13YX/pngegg-13.png" alt="" />
        <span>TripIt</span>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/homeAll">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">All Trip</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">My Trip</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" href="#">Manege Trip</Link></li>
            <li><Link class="dropdown-item" href="#">Add Trip</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        {
          user ?
          <button onClick={logOut} class="btn btn-outline-success" type="submit">Logout</button>
          :
      <Link to="/login">
          <button class="btn btn-outline-success" type="submit">Signin</button>
      </Link>
        }

        <span>Sign in as:</span>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;