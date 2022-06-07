import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const OfferInfo = () => {
    
   const {singelOfferid}=useParams()
   
    return (
        <div>
            <h1>wellcome to this course:  {singelOfferid}</h1>
            <Link to={'/CheckOut'}>
            <Button   className='socialButton mx-auto d-block' variant="white" type="submit">
    Check Out Now
  </Button></Link>
        </div>
    );
};

export default OfferInfo;