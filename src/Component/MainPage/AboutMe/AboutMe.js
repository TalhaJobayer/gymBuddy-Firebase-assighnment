import React from 'react';
import image from '../../../images/IMG_20200702_024444_108.jpg'
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div>
            <div className=' container '>
                <img  className='image' src={image} alt="" />
                <div>
                <h1> I'm Talha Jobayer.My final Ambission is to be a Web Developer and to put the word "web developer" next to my name this year.And now my next goal is to complete 10 websites using react-route.All i need to is practice what i have learned these days.</h1>
                </div>
            </div>
            
        </div>
    );
};

export default AboutMe;