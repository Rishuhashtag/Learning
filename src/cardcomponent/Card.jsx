import React from 'react';
import './card.css';
import fort from '../Asset/fort.jpg';


const Cardsty = (props) => {
    return (
        <>
            <div class="container">
            <div className="cardheader">
                <h1>Our Mission </h1>
            </div>
            <div className="pdescription">
                <p>
                    bringing people together who cares about climate change <br/>
                    &nbsp;&nbsp;&nbsp;and saving life in Arctics 
                </p>
                
            </div>
            <br/>
                <br/>
            <div className="container2">
            {props.details.map((value,index) => (
           
            <div className="homecard" key={index}>
            {/* <div className="homecard" key={index}> */}
                <div className="homecard-image" >
                    {value.img}
                    
                    {/* <i class="homecard-image" src={value.icon}></i> */}
                   
                </div>
            <div>
                <p className="aheader">{value.title}</p>
                <p className="adescription">{value.description}</p>
            </div>
            </div>
            
            ))}
            ;
            </div>
             
            <div className ="htier3">
                    <h1>About expedition</h1>
            </div>
            <div class="container3">   
            
                <div className ="ptier3"> 
                    <p >
                    The expedition is a program of international <br/> organization involved in the environment.<br/>
                    <br/>
                    We will explore the parts of the north pole <br/>that are being threatened by sevirty
                    of global<br/> warming and one of the people who help <br/> to the serving of the earth. 
                    </p>
                </div>
                <div> 
                <img className="img" src={fort} alt="fortimage" /> 
                </div>
                <div><button type = "submit" className="join" href="https://accounts.google.com/">JOIN US</button>
                </div>
            </div>
            
            </div>
        </>
    );
};

export default Cardsty;