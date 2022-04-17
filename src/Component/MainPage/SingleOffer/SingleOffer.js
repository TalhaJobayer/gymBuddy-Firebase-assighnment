import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleOffer = ({singleOffer}) => {
    const {img,Focus,program,About}=singleOffer;
    return (
        <div className='col-lg-4  '>
            <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <h2>{program}</h2>
     </Card.Body>
    <Card.Body>
     <h4>{Focus}</h4>
     </Card.Body>
     
      <Card.Text>
     <p>{About}</p>
      </Card.Text>

    <Card.Footer>
    <Button className=' w-100' variant="primary">Enroll Now</Button>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default SingleOffer;