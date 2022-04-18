import React from 'react';
import { useParams } from 'react-router-dom';


const OfferInfo = () => {
   const {singelOfferid}=useParams()
    return (
        <div>
            <h1>ih8foidhfoi jtfruyfgiughiu yi7tu:  {singelOfferid}</h1>
        </div>
    );
};

export default OfferInfo;