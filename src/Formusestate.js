import React, {useState} from "react";

function FormUstate () {
    const [info,setInfo]= useState(
        {
            Fname: "",
            Lname: "",
            Age: "",
        });
    
    // const [records,setRecords]= useState([]);

      const handleInput=(e) =>
      {
        const name=e.target.name;
        const value=e.target.value;
        console.log(name, value);
      
        setInfo({...info, [name]:value});
      }

    //   setInfo({Fname: "", Lname: "", Age: "",});
    // setRecords({...records, [name]:value});
    
    
return(
    <>
    <h1><u>Form using useState </u></h1>
    <br/>
    <form>
    <div>
    <input type="text"  placeholder="Fname" onChange={handleInput} value={info.Fname} name="Fname" /> <br/>
    <input type="text"  placeholder="Lname" onChange={handleInput} value={info.Lname} name="Lname"/> <br/>
    <input type="text"  placeholder="Age" onChange={handleInput} value={info.Age} name="Age" /> <br/>
    </div>
    </form> 

    <div>
        <p> Hello, &nbsp; {info.Fname} &nbsp; {info.Lname}</p>
        <p>Your age is &nbsp;{info.Age}</p>
    </div>
    </>
)
}

export default FormUstate