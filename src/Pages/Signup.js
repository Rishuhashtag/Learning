import React from 'react';
  
import './Form.css';
//import React from 'react';
//class Sign extends React.Component {
  //render() {
   // return <h2>Hi, I am a Car!</h2>;
function Signup(){
    return(
      <div class="container2">
        <form>
        <img src="https://as2.ftcdn.net/v2/jpg/01/06/47/61/1000_F_106476142_zMZkkTkhMeq0DIjV20oJI00e3QXLYIGN.jpg" className="logosignup" alt="logo" />
        &nbsp;<strong class="headertext">Spotify</strong>
        <br/>
        <h1>Sign up for free to start listening.</h1>
        <button type = "submit" className="Google" href="https://accounts.google.com/">Login with Google</button>
        <br/>
        <br/>
        <label for="email" className="textlabel">
        <span className="labeltext">What's your email:</span>
        </label><br/>
        <input type="text" className="Signuptextfield" placeholder="Enter Your Email id" align="right"/><br/><br/>
        Create your password:<br/>
        <input type="password" className="Signuptextfield" placeholder="Password" maxlength="10" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters"/>
        <br/>
        <br/>
        What should we call you?<br/>
        <input type="text" className="Signuptextfield" placeholder="Enter a profile name"/>
        <br/>
        <br/>
        <h3>This appears on your profile.</h3>
        <br/>
        What's your date of birth?
        <input type="text" className="Birthtextfield" placeholder="Month"/>&nbsp;
        <input type="text" className="Birthtextfield" placeholder="Day"/>&nbsp;
        <input type="text" className="Birthtextfield" placeholder="Year"/>
        <br/>
        <br/>
        What's your gender?
        <input type="radio" className="Radiocheck" />
        <label>Male</label> &nbsp;&nbsp;
        <input type="radio" className="Radiocheck" />
        <label>Female</label> &nbsp;&nbsp;
        <input type="radio" className="Radiocheck" />
        <label>Other</label> &nbsp;&nbsp;
        <br/>
        <input type="checkbox"className="check"/>
	    <label>Share my registration data with Spotify's content providers for marketing purposes. </label><br/>
      <br/>
      By clicking on sign-up, you agree to Spotify's <a href="#">Terms and Conditions of Use.</a><br/>
      To learn more about how Spotify collects, uses, shares and protects your personal data, please see Spotify's <a href="#"> Privacy Policy.</a>
      <br/>
      <br/>
        <button type = "submit" className="Signup">SIGN UP </button>
        <br/>
        <br/>
        <br/>
        Have an account? <a className="header" href="http://localhost:3000/signin" target="_self" rel="noopener noreferrer">
          SIGN IN </a>
        <br/>
        </form>
        </div>

    );
}
  
export default Signup;