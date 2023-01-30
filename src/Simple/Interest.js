import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

import SliderComp from './Sliderr';
import SliderRate from './Sliderrr';
import { Grid, Typography } from '@mui/material';

import { Input, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root :{
      width:200
  }
})



function SimpleInterest (){

const [principal,setPrincipal] = React.useState(1);
const [rate,setRate] = useState(2);
const [time,setTime] = useState(1);
const [si,setSi] = useState("");

const classes = useStyles()
const handleChange=(event,newValue) => {
    // let value= {principal}
    setPrincipal(newValue)
    // setRate(rateValue)
    
    
}
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20000,
      label: "100",
    },
  ];
  const mark2=[
  {
    value: 0,
    label: "0%",
  },
  {
    value: 100,
    label: "20%",
  },
  ];
  const mark3=[
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100",
    },
    ];

// const handleChange = (event) => {
//     const value = {principal};
//     setPrincipal(event.traget.value)
//     const defaultValue={value};
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
    
// const handleClick =(e) =>{

// }

// const mark =[
//   {
//   value:0,
//   label:"start"
// }
// ]

// function Slider({value,handleChange, min,max,step}){
//   return (
//   // <div>
//   //     <input  type="range" defaultValue={value} onChange={handleChange}
//   //     min={min}
//   //     max={max}
//   //     step={step} />
//   // </div>
 

//   );
// }


return (
        <div className="app">
        <div className='container'>
            <div className='Heading'>
                {/* <h1 className='Heading_one'>Simple Interest</h1> */}
                {/* <p className='Heading_two'>Simple Interest Calculator</p> */}
            

            <div className='total_amount_card'>
          <div className='card_text '>
            <u className='Interest_heading'>Total simple interest</u>
          <h3 className='total_amount_heading'> ₹ {si}</h3>
          {/* <p className='total_amount_para'>Total simple interest</p> */}
          </div>
        </div>


        <form>
         <div className='container2'>
          <div className='input_area'>
          
          <div className="prange">
          <div className="slidervalue" >
          <label className="slidername">Principal Amount </label>
          {/* <div className="field"> */}
          {/* <div className="value left">0</div>
          
          <SliderComp  value={principal || ""} handleChange={(e) => setPrincipal(e.target.value)} min={1} max={20000} step={5} 
           
           className="slider" /><br/>
          
          <div className="value right">20000</div> */}
          {/* </div> */}
         {/* <div style ={{width:300, margin:30}}>
           <Slider 
            defaultValue={0}
            min={0}
            max={20000}
            // {/* marks={mark} */}
          {/* valuelabeldispaly="auto" /> */}
          {/* </div> */ }

          <div className={classes.root}  style ={{width:310, margin:10}} >
            <Slider value={principal}
            onChange={handleChange} 
            valueLabelDisplay="on" 
            min={0}
            max={20000}
            marks={marks}
            
            />
            {/* <Grid item className="value left">
                <Typography >0</Typography>
            </Grid>

            <Grid item className="value right">
                <Typography >20000</Typography>
                </Grid>
                 */}
        </div>
        
           
          
          
          {/* <div className='input_field'> */}
          
          <label className="slidername">Interest Rate in % </label>
          {/* <div className="field">
          {/* <div className="value left">0%</div>
          <div className="value right">100%</div>
          <SliderRate  value1={rate || ""} onChange={(e) => setRate(e.target.value)}  min={1} max={100} step={5} 
         
          className="slider"   /><br/> */}

          {/* </div> */}


          <div className={classes.root}  style ={{width:310, margin:10}} >
            <Slider value={rate}
            onChange={(e) => setRate(e.target.value)}
            valueLabelDisplay="on" 
            min={0}
            max={100}
            marks={mark2} />


            {/* <Grid item>
                <Typography>{rate}</Typography>
            </Grid> */}
        </div>




          {/* <div style ={{width:300, margin:30}}>
           <Slider 
            defaultValue={0}
            min={0}
            max={20000}/>
          
           
          </div> */}
          
          {/* <div className='input_field'> */}
          
          <label className="slidername">Time in year </label>
          {/* <div className="field">
          
          
          <div className="value left">1</div>
          <div className="value right">120</div>
          
          <SliderComp  value={time || ""} onChange={(e) => setTime(e.target.value)}   min={1} max={120} step={5} className="slider"  />

          </div> */}


          <div className={classes.root}  style ={{width:310, margin:10}} >
            <Slider value={time}
            onChange={(e) => setTime(e.target.value)}
            valueLabelDisplay="on" 
            min={0}
            max={100}
            marks={mark3} />


            {/* <Grid item>
                <Typography>{time}</Typography>
            </Grid> */}
        </div>

          {/* <div style ={{width:300, margin:30}}>
           <Slider 
            defaultValue={0}
            min={0}
            max={20000}/>
          </div> */}

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