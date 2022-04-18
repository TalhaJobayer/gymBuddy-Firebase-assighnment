import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
       
            <div className='container'>
           <Form   className=' w-50 mx-auto text-start  '>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fs-2'>Your Name</Form.Label>
    <Form.Control name='name' type="text" placeholder="Write Your Name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='fs-2'>Address</Form.Label>
    <Form.Control name='Address' type="text" placeholder="Write Your Address" required />
  </Form.Group>
  <Button style={{margin:"0"}} className='w-50 mx-auto d-block' variant="primary" type="submit">
    Pay 
  </Button> <br />
 
</Form>
        </div>
    );
};

export default CheckOut;