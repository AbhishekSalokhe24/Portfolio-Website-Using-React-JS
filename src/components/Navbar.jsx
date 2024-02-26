import React from 'react'
import {NavLink} from 'react-router-dom'
import Nav2 from './Nav2'
import styled from 'styled-components'


function Navbar() {
  return (
   <MainHeader>
     <NavLink to="/">
      <img src="./Images/Logo main.png" alt="appLogo" className='logo' />
    </NavLink>
    
    <Nav2/>
   </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: #292524;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo{
      height: 9rem;
      cursor: url("./Images/loading.png"),auto;
    }
`;

export default Navbar
