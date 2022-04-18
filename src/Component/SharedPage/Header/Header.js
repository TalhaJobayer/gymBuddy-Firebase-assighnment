
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Logo from '../../../images/logo.jpg'
import './Header.css'

const Header = () => {
  const [
   
    user,
    
  ] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
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
        <Link className="nav-link active" aria-current="page"  to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Nav.Link  className="nav-link active" href="/#Offer">Offer</Nav.Link>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Blogs</a>
        </li>
        
        
      </ul>
      <div className="d-flex nav-item">
     {user?'':<Link className="nav-link active" aria-current="page" to={'/Register'}>Register</Link>}
      
    {
     user?
       
        <Link onClick={logout} className="nav-link active" aria-current="page" to="/login"> Log Out</Link>
       :
    
        <Link className="nav-link active" aria-current="page" to="/login"> Login</Link>
    }
   
       
     
     
                            
                   
     
      </div>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Header;