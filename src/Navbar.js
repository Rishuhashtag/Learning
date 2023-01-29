import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
  } from './Navstyle';
  
  const Navigationbar = () =>{
    return(
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/home' activeStyle>Home</NavLink>
		<NavLink to='/about' activeStyle>About</NavLink>
		<NavLink to='/signup' activeStyle>SignUp</NavLink>
		</NavMenu>
	<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
	</NavBtn>
	</Nav>
	</>
    );
};
export default Navigationbar;