import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: pink;
  display: flex;
  height: 85px;
  justify-content: space-between;
`;
  
export const NavLink = styled(Link)`
  color: dark blue;
  align-items: center;
  text-decoration: none;
  padding: 20px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: Black;
  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: green;
  padding: 10px 30px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 20px;
  margin-top: 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: lightgreen;
    color: #808080;
  }
`;