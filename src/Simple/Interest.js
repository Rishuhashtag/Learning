import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
// import Typography from '@mui/material/Typography';
import SliderComp from './Sliderr';
import SliderRate from './Sliderrr';

import { Input } from '@mui/material';


function SimpleInterest (){

const [principal,setPrincipal] = useState(50);
const [rate,setRate] = useState(2);
const [time,setTime] = useState(1);
const [si,setSi] = useState("");

// const handleChange = (event) => {
//     value = {principal};
//     setPrincipal(event.traget.value)
// }

// const calcSum =(e) =>{

//     e.preventDefault();

//     if(principal===0 || rate===0 || time===0)
// {
//     alert("Please enter field value");
// }
// else{

useEffect(() => {
    let si= parseInt(principal)*parseInt(rate)*parseInt(time)/100;
    console.log(typeof(si));
    setSi(parseInt(si)); 
})
    
const handleClick =(e) =>{

}


return (
        <div className="app">
        <div className='container'>
            <div className='Heading'>
                {/* <h1 className='Heading_one'>Simple Interest</h1> */}
                {/* <p className='Heading_two'>Simple Interest Calculator</p> */}
            

            <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'>Total simple interest :: ₹ {si}</h3>
          {/* <p className='total_amount_para'>Total simple interest</p> */}
          </div>
        </div>


        <form>
         <div className='container2'>
          <div className='input_area'>
          
          <div className="prange">
          <div className="slidervalue" >
          <label className="slidername">Principal Amount </label>
          <div className="field">
          <div className="value left">0</div>
          
          <SliderComp  value={principal || ""} handleChange={(e) => setPrincipal(e.target.value)} min={1} max={20000} step={5} className="slider" /><br/>
          
          <div className="value right">20000</div>
          </div>
          
          
          {/* <div className='input_field'> */}
          
          <label className="slidername">Rate in % </label>
          <div className="field">
          <div className="value left">0%</div>
          <div className="value right">100%</div>
          <SliderRate  value1={rate || ""} onChange={(e) => setRate(e.target.value)}  min={1} max={100} step={5} className="slider"   /><br/>
          </div>
          
          {/* <div className='input_field'> */}
          
          <label className="slidername">Time in year </label>
          <div className="field">
          <div className="value left">1</div>
          <div className="value right">120</div>
          <SliderComp  value={time || ""} onChange={(e) => setTime(e.target.value)}   min={1} max={120} step={5} className="slider"  />
          </div>
          </div>
        </div>
        </div>
        </div>
        

        {/* <div className='button_collection'>
          <Stack spacing={1} direction="row">       
          <Button type='submit' className='btn_one' style={{backgroundColor: 'black'}} variant="contained">Calculate</Button>
          <Button className='btn_one'  onClick={handleClick}  style={{backgroundColor: 'black'}} variant="outlined">Reset</Button>
          </Stack>
        </div> */}
        </form>
        </div>
        </div>
        </div>
        
        
    );
}
export default SimpleInterest;