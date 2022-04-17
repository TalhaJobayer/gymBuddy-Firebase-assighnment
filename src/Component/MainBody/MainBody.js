import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import ImageCarosoul from '../../images/1.png'
import ImageCarosoul2 from '../../images/backround1.png'
import Offer from '../MainPage/Offers/Offer'
import './MainBody.css'

const MainBody = () => {
    return (
      <>
        <div id='Banner' >
              <Carousel fade>
  <Carousel.Item>
    <img
       height={500}
      className="d-inline-block w-100"
      src={ImageCarosoul}
      alt="First slide"
    />
     <Carousel.Caption>
        <h3>CHALLENGE YOURSELF</h3>
    </Carousel.Caption>
    <Button className='ChallengButton' variant='danger'> View Challeng</Button>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height={500}
      className="d-block w-100"
      src={ImageCarosoul2}
      alt="Second slide"
    />

    <Carousel.Caption>
        <h3>CHALLENGE YOURSELF</h3>
    </Carousel.Caption>
    <Button className='ChallengButton' variant='danger'> View Challeng</Button>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height={500}
      className="d-block w-100 "
      src={ImageCarosoul}
      alt="Third slide"
    />

<Carousel.Caption>
        <h3>CHALLENGE YOURSELF</h3>
    </Carousel.Caption>
    <Button className='ChallengButton' variant='danger'> View Challeng</Button>
  </Carousel.Item>
</Carousel>
{/* ========================carosoul end============= */}
<div className="row mt-2 container">
    <div className="col-lg-12">
        <h1>
    Gym Memberships

        </h1>
    </div>
</div>
      <Offer></Offer>
     
        </div>
        <div>
          
        </div>
        </>
    );
};

export default MainBody;