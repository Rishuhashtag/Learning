import React from 'react';
import IconData from './Icon';
import Cardsty from './Card';
const Homecard = () => {
    return( 
    <>
    <div className="aligncard">
        <Cardsty details={IconData} />
        </div>
   
    </>

    );
};

export default Homecard;