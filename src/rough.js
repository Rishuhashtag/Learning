className ="ptier3"
className ="ptier3"
import React from 'react';
import './card.css';
import fort from '../Asset/fort image.jpg';


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
            {props.details.map((value,index) => (
                <div className ="ptier3" key={index}> 
                <p className ="ptier3">
                    The expedition is a program of international <br/> organization involved in the environment.<br/>
                    <br/>
                    We will explore the parts of the north pole <br/>that are being threatened by sevirty
                    of global<br/> warming and one of the people who help <br/> to the serving of the earth. 
                </p>
                </div>
                
            <div>
            <img className="img" src={fort} alt="fortimage" />
            </div>
            </div>
            <button type = "submit" className="join" href="https://accounts.google.com/">JOIN US</button>
            </div>
            </>
    );
};

export default Cardsty;


<!-- HTML !-->
<button class="button-3" role="button">Button 3</button>

/* CSS */
.button-3 {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}


 {/* {props.details.map((value) => (  */}

 const [info,setInfo]= useState(
  {
      Fname: "",
      LName: "",
      Age: "",
  });
const handleInput=(e) =>
{
  const name=e.target.name;
  const value=e.target.value;
  console.log(name, value);

  setInfo({...info, [name]:value});
}

onChange={handleInput} value="info.Fname" name="Fname"
onChange={handleInput} value="info.Lname" name="Lname"
onChange={handleInput} value="info.Age" name="age"








*{
  padding: 5px;
  box-sizing: border-box;
  margin: 0;
  padding-left: 30px;

} 

.total_amount_card{
background-color: rgb(235, 144, 105);
border-radius: 1em;
width: 300px;
height:70px;
}
.total_amount_heading{
  text-align: left;
  padding:0;
  padding-left:0%;
}
.card_text{
  padding-left: 8px;
  text-align: center;
  padding-top: 10px;
}

.input_area{
  float: left;
}
.input_field{
  height: 75px;
  padding-bottom: 5px;
  padding-left: 0%;
}


.container{
  background-color: rgb(2, 112, 76);
  width :400px;
  padding-left: 40px;
  border-radius: 2em;
  /* height: 500px; */
}
.Heading_one{
  padding-left:0;
}
.btn_one{
  margin-left: 0%;
  
}





const PrettoSlider = withStyles({
  root: { color : 'MediumVioletRed', height : 10},
  thumb: {height: 25, width: 25, backgroundColor: 'white', border:'3px'},
  track : {height: 10,borderRadius : 4},
  rail : {height: 10,borderRadius : 4},
})(Slider);


function Sinterest (){

const [num1,setNum1] = useState(0);
const [num2,setNum2] = useState(0);
const [num3,setNum3] = useState(0);
const [add,setAdd] = useState(0);




const calcSum =(e) =>{

  e.preventDefault();

  if(num1===0 || num2===0 || num3===0)
{
  alert("Please enter field value");
}
else{
  let add= parseInt(num1)*parseInt(num2)*parseInt(num3)/100;
  console.log(typeof(add));
  setAdd(parseInt(add));
}
} 


const handleClick =(e) =>{

}

const Slider =(props) => {
  const{
      step,
      min,
      max,
      value,
      defaultLength,
      onChangeValue
  } = props;
}



  return (
      <div className="app">
      <div className='container'>
          <div className='Heading'>
              <h1 className='Heading_one'>Simple Interest</h1>
              {/* <p className='Heading_two'>Simple Interest Calculator</p> */}
          

          <div className='total_amount_card'>
        <div className='card_text '>
        <h3 className='total_amount_heading'>Total simple interest :: ₹ {add}</h3>
        {/* <p className='total_amount_para'>Total simple interest</p> */}
        </div>
      </div>


      <form onSubmit={calcSum}>

      <div className='input_area'>
          <div className='input_field'>
          <TextField type="number"  value={num1 || ""} onChange={(e) => setNum1(e.target.value)}   id="outlined-basic" label="₹ Principal amount" variant="outlined" /><br/>
          </div>
          {/* <div className='input_field'> */}
          <div>
          <Typography gutterBottom><strong>Rate of interest (p.a) %</strong></Typography>
          <PrettoSlider  value={num2}  onChange={(e) => setNum2(e.target.value)} defaultValue={num2} max={maxValue}  />
          </div>
          <div className='input_field'>
          <TextField  type="number"  value={num3 || ""} onChange={(e) => setNum3(e.target.value)}  id="outlined-basic" label="Time period ( Yr )" variant="outlined" />
          </div>
      </div>
      <div className='button_collection'>
        <Stack spacing={1} direction="row">       
        <Button type='submit' className='btn_one' style={{backgroundColor: 'black'}} variant="contained">Calculate</Button>
        <Button className='btn_one'  onClick={handleClick}  style={{backgroundColor: 'black'}} variant="outlined">Reset</Button>
        </Stack>
      </div>
      </form>

      </div>
      </div>
      </div>
  );
}
export default Sinterest;












// import './Simple Interest/Interest.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Slider from '@mui/material/Slider';
// import Typography from '@mui/material/Typography';
import Sliders from './Simple/Sliderr';


function Sinterest (){

const [principal,setPrinciple] = useState(0);
const [rate,setRate] = useState(0);
const [time,setTime] = useState(0);
const [add,setAdd] = useState(0);



const calcSum =(e) =>{

    e.preventDefault();

    if(principal===0 || rate===0 || time===0)
{
    alert("Please enter field value");
}
else{
    let add= parseInt(principal)*parseInt(rate)*parseInt(time)/100;
    console.log(typeof(add));
    setAdd(parseInt(add));
}
} 


const handleClick =(e) =>{

}





    return (
        <div className="app">
        <div className='container'>
            <div className='Heading'>
                <h1 className='Heading_one'>Simple Interest</h1>
                {/* <p className='Heading_two'>Simple Interest Calculator</p> */}
            

            <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'>Total simple interest :: ₹ {add}</h3>
          {/* <p className='total_amount_para'>Total simple interest</p> */}
          </div>
        </div>


        <form onSubmit={calcSum}>
        <Sliders 
            min={0}
            max={100}
            step={1}
            defaultLength={principal}
            value={principal}
            onChangeValue={calcSum}
            />
        <div className='button_collection'>
          <Stack spacing={1} direction="row">       
          <Button type='submit' className='btn_one' style={{backgroundColor: 'black'}} variant="contained">Calculate</Button>
          <Button className='btn_one'  onClick={handleClick}  style={{backgroundColor: 'black'}} variant="outlined">Reset</Button>
          </Stack>
        </div>
        </form>

        </div>
        </div>
        </div>
    );
}
export default Sinterest;






import React from 'react';

const Sliders =(props) => {
    const{
        step,
        min,
        max,
        value,
        defaultLength,
        onChangeValue
    } = props;


const handleClick = max =>e => {
    onChangeValue(e)
}

return (
<>
    <div>
    <input type= "range" step={step}
    min={min}
    max={max}
    value={value}
    onChange={handleClick(max)}
    />
    </div>
</>
)
}

export default Sliders;