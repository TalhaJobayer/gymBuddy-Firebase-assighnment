import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SharedPage/SocialLogin/SocialLogin';

const Login = () => {
  const [Error ,setError]=useState('')
  const navigate=useNavigate()
  //  ========================logIn with Email and password start====================
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
 

  const handleSubmitSignIn=(event)=>{
    event.preventDefault();
   
    const email=event.target.email.value;
    const password=event.target.password.value;
    signInWithEmailAndPassword(email,password)
    
    console.log(email , password);
     if(user){
          navigate('/')
        }
  
   if (error ) {
    setError(error?.message)
       console.log(Error);
   }
 }
//  ========================logIn with Email and password end====================


    return (
        <div className='container'>
           <Form  onSubmit={handleSubmitSignIn} className=' w-50 mx-auto text-start  '>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fs-2'>Email address</Form.Label>
    <Form.Control name='email' type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='fs-2'>Password</Form.Label>
    <Form.Control name='password' type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button style={{margin:"0"}} className='w-50 mx-auto d-block' variant="primary" type="submit">
    Submit
  </Button> <br />
  
<p style={{color:"red"}}> { Error }</p>
   

  <Form.Text className="text-dark w-50 mx-auto d-block" style={{margin:"0"}}>
      Didn't Have an Account? <Link to={"/Register"}>Register</Link>
    </Form.Text>
  <Form.Text className="text-dark w-50 mx-auto d-block" style={{margin:"0"}}>
      Forgot Password? 
    </Form.Text>
  
</Form>

    <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;