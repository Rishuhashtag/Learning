import React from 'react';
import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';
import './calendar.css';
import {FaUsers} from 'react-icons/fa';

function MonthCalendar () {
return(
        <div className="app">
        <div className="container">
        <div className="icon"><FaUsers /></div>
        <div className="sectiontwo">
        <h1 className="heading">Event Name </h1>
        <p className="desc">Meeting Hashtag's Members</p>
        </div>
        <div className="calendar_style">
        <DatePicker ></DatePicker> 
        </div>
        </div>
        </div>
       

)
}

export default MonthCalendar;