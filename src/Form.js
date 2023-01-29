import './Form.css';
//import React from 'react';
//class Sign extends React.Component {
  //render() {
   // return <h2>Hi, I am a Car!</h2>;
function Sign(){
    return(
      <div class="container">
        <form>
        <img src="https://as2.ftcdn.net/v2/jpg/01/06/47/61/1000_F_106476142_zMZkkTkhMeq0DIjV20oJI00e3QXLYIGN.jpg" className="logo" alt="logo" />
        &nbsp;<strong class="headertext">Spotify</strong>
        <br/>
        <br/>
        <a className="header" href="http://localhost:3000/?" target="_self" rel="noopener noreferrer">
          SIGN IN </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="header" href="https://www.spotify.com/us/signup" target="_blank" rel="noopener noreferrer">
          SIGN UP </a><br/>
          <br/>
        <input type="text" className="Textfield" placeholder="Username"/><br/><br/>
        <input type="password" className="Textfield" placeholder="Password" maxlength="10" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters"/>
        <br/><br/>
        <input type="checkbox"className="check"/>
	    <label>Stay Signed in </label><br/>
      <br/>
        <button type = "submit" className="Signin" value ="SIGN IN" >SIGN IN </button>
        <br/>
        <br/>
        <br/>
        <a href="#"> Forgot password </a>
        <br/>
        </form>
        </div>

    );
}

export default Sign;