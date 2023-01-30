import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dummy from './Test3';
import reportWebVitals from './reportWebVitals';
import NewColor from './Variable';
// import FormUstate from './Formusestate';
import ConPhone from './Flagcomp/Phone';
// import './Flagcomp/Phonestyle.css';
import SimpleInterest from './Simple/Interest';
import './Simple/Interest.css';
import {SliderComp} from './Simple/Sliderr';
import SliderMaterial from './Simple/Sliderm';
import MonthCalendar from './Calendar/Monthcal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div >
   
   {/* <App /> */}
   {/* <NewColor /> */}
   {/* <App /> */}
   {/* <FormUstate /> */}
   {/* <ConPhone /> */}

 {/* <SimpleInterest /> */}

 {/* <SliderMaterial /> */}
 {/* <SliderComp /> */}
  
  <MonthCalendar />
  
    </div>
    {/* <div> 
      <SliderComp />
    </div>  */}
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
