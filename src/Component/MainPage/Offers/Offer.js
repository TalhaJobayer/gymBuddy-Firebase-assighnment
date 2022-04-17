import React from 'react';
import Image1 from '../../../images/so-Hero-Deal.jpg'
import Image2 from '../../../images/so-Hero-Pass.png'
import Image3 from '../../../images/3.png'
import SingleOffer from '../SingleOffer/SingleOffer';

const Offer = () => {
    const Offers = [
        {id: 1, Focus: 'Weights & Cardio at One Club', program: 'SILVER MEMBERSHIP', About:" Get in and get fit with access to all the cardio and strength training equipment you could dream of at your club of enrollment. Lift your day (and plenty more) in the functional training area and turf zone and let your endorphins loose with miles of cardio.", img: Image1},
        {id: 2, Focus: 'Classes, Pools & More – at More Locations', program: 'GOLD MEMBERSHIP', About:"Level up your game and your motivation with access to premium amenities and exciting GX24®studio classes – at any location throughout your region. Drop in for a game of hoops or a cycle class, swim laps or recover in our whirlpools and saunas. New experiences await your mind, body and soul with tons of freedom built in. ", img: Image2},
        {id: 3,Focus: 'Live Your Best Life, Anytime, Anywhere',program: 'PLATINUM MEMBERSHIP',About:"Our top-of-the-line fitness membership leaves nothing to chance – with 24/7 access to 24GO® Premium digital workouts, as well as GX24® studio, cycle and virtual classes, our full suite of amenities AND two Buddy Passes so you can share your gym time with friends. It also includes access to our hundreds of clubs nationwide. Because nobody likes limits, especially you. ", img:Image3},
        
    ]
    return (
        <div className="container mt-5">
        <div className='row w-100'>
           {
               Offers.map(singleOffer=><SingleOffer
               key={singleOffer.id}
               singleOffer={singleOffer}

               ></SingleOffer>)
           }
        </div>
        </div>
    );
};

export default Offer;