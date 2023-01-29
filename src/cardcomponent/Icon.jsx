import React from 'react';
import {FaDove,} from 'react-icons/fa';
import { FaDiceD20,} from 'react-icons/fa';
import { FaDharmachakra,} from 'react-icons/fa';
// import imagese from '../Asset/imagese.png';
// import imageso from '../Asset/imageso.png';
// import images3 from '../Asset/images3.png';

const IconData = [
    {
        img:<FaDove />,
        // img: imagese,
        title:'Explore the area',
        description:'Explore the place that are extraordinary to examine the life of species there',
    },
    {
        // img: imageso,
        img:<FaDiceD20 />,
        title:'Stay Overnight',
        description:'you will stay there for a weeks with experts and researches who will join the mission',
    },
    {
        // img: images3,
        img:<FaDharmachakra />,
        title:'Save the species',
        description:'Join voluteering in the mission to save the endangered species there.',
    },
];

export default IconData;