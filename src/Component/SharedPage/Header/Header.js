import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <Navbar.Brand href="#Banner"><img style={{width:'100px'}} src={Logo} alt="" /></Navbar.Brand>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item ">
        <Link className="nav-link active" aria-current="page"  to='/MainBody'>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Offer">Offer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Offer">Community</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Offer">Contact</a>
        </li>
        
        
      </ul>
      <div className="d-flex nav-item">
      <Link className="nav-link active" aria-current="page" to={'/Register'}>Register</Link>
      <Link className="nav-link active" aria-current="page" to={'/Login'}>Login</Link>
      </div>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Header;