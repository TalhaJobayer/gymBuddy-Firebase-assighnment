
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
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
           

            {/* ======================= */}
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img style={{width:'100px'}} src={Logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        <Link  className="nav-link active menuText" aria-current="page" to={"/home"}>Home</Link>
       
        
       
        <Nav.Link className="nav-link active menuText" href="/#Offer">
        Offer
        </Nav.Link>


        
        <Link  className="nav-link active menuText" aria-current="page" to={"/Blogs"}>Blogs</Link>
       
        
        
       
        <Link  className="nav-link active menuText" aria-current="page" to={"/AboutMe"}>About</Link>
        
        {user?'':<Link  className="nav-link active menuText" aria-current="page" to={'/Register'}>Register</Link>}
      
      {
       user?<Link  onClick={logout} className="nav-link active menuText" aria-current="page" to="/Login"> Log Out</Link>
         :
         <Link className="nav-link active menuText" aria-current="page" to="/login"> Login</Link>
      }
      </Nav>
     
     
       
        
     
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;