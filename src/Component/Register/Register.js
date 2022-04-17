
import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const navigate=useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const handleSubmit=(event)=>{
     event.preventDefault()
     const name=event.target.name.value;
     const email=event.target.email.value;
     const password=event.target.password.value;
     createUserWithEmailAndPassword(email,password)
     updateProfile({displayName:name})
     console.log(email , password);
     navigate('/MainBody')
     
  }
  
    return (
        <div className='container'>
           <Form onSubmit={handleSubmit} className=' w-50 mx-auto text-start mb-5 '>
           <Form.Group className="mb-3" >
    <Form.Label className='fs-2'>Your Name</Form.Label>
    <Form.Control name='name' type="text" placeholder="Write Your Name" required />
   </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fs-2'>Email address</Form.Label>
    <Form.Control  name='email' type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='fs-2'>Password</Form.Label>
    <Form.Control  name='password' type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label=" I Agree with All requirments" />
  </Form.Group>
  <Button style={{margin:"0"}} className='w-50 mx-auto d-block' variant="primary" type="submit">
    Submit
  </Button> <br />
  <Form.Text className="text-dark w-50 mx-auto d-block" style={{margin:"0"}}>
      Already Have an Account? <Link to={"/Login"}>Login</Link>
    </Form.Text>
  <Form.Text className="text-dark w-50 mx-auto d-block" style={{margin:"0"}}>
      Forgot Password? 
    </Form.Text>
</Form>
        </div>
    );
};

export default Register;