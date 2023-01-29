import React from 'react';
import {useState} from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'


const ConPhone = ()=> {

    const [value, setValue] = useState();
    // return (
    //   <PhoneInput
    //     placeholder="Enter phone number"
    //     value={country}
    //     onChange={setCountry}/>
    // )

    return(
        <>
        <div class="container">
        <div >
                
       <PhoneInput label="Phone Number" className ="phonefield" 
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}/>
            </div>
        {/* <div>
            <div className="selectbutton">
                <div >
                <select className="selectstyle">
                    <option>--search countries</option>
                </select>
            </div>
            </div>
        </div> */}
       <p>Number is: {value}</p>
        </div>
        </>
    )
}
export default ConPhone;