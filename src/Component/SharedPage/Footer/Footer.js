import React from 'react';
import Logo from '../../../images/logo.jpg'

const Footer = () => {
    return (
        <div  >
            {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-dark text-light ">
 
  <section className=" footer">
    <div className="container text-center text-md-start pt-5 ">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4  ">
          <img style={{width:'100px',borderRadius:"50px"}} src={Logo} alt="" />GYM BUDDY
          </h6>
         
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            OFFERS
          </h6>
          <p>
            <a href="/#Offer" className="text-reset">SILVER</a>
          </p>
          <p>
            <a href="/#Offer" className="text-reset">GOLD</a>
          </p>
          <p>
            <a href="/#Offer" className="text-reset">PLATINUM</a>
          </p>
         
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> Joypurhat sadar,bangladesh</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            www.GymBuddy.com
          </p>
          <p><i className="fas fa-phone me-3"></i> 0174544484984</p>
          <p><i className="fas fa-print me-3"></i> 01546846848484</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4">
    © 2022 Copyright:TALHA JOBAYER
   
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
        </div>
    );
};

export default Footer;