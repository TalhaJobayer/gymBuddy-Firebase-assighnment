import React from 'react';
import { Carousel } from 'react-bootstrap';
import ImageCarosoul from '../../images/1.png'
import ImageCarosoul2 from '../../images/backround1.png'
import Offer from '../MainPage/Offers/Offer'

const MainBody = () => {
    return (
        <div>
              <Carousel fade>
  <Carousel.Item>
    <img
       height={500}
      className="d-inline-block w-100"
      src={ImageCarosoul}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height={500}
      className="d-block w-100"
      src={ImageCarosoul2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height={500}
      className="d-block w-100 "
      src={ImageCarosoul}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
{/* ========================carosoul end============= */}
<div className="row mt-2">
    <div className="col-lg-12">
        <h1>
    Gym Memberships

        </h1>
    </div>
</div>
      <Offer></Offer>
     
        </div>
    );
};

export default MainBody;