import React, {useState} from "react";

function NewColor () {
const [car,setCar]= useState(
    {
        name:"Ford",
        color:"blue"
    }
);
const  UpdateColor =(e)=> {
    setCar({...car, })

}

return(
    <>
    <h1>color is {car}</h1>
    <button type="button" onClick={() => setColor(name="Mar")} />
    </>

    )
}
export default NewColor