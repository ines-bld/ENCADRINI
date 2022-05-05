import React from 'react';
import logo from '../../images/Logo.svg'
import {
  Nav,
  NavbarContainer,
  NavLogo, 
  NavMenu, 
  NavItems, 
  NavLink,
  NavBtnContainer,
  NavBtn  
} from './HomeNavbarElements'

const HomeNavbar = () => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
              <img src={logo} alt="logo"/>
            </NavLogo>
            <NavMenu>
              <NavItems>
                <NavLink to="about">A propos</NavLink>                
                <NavLink to="discover">Decouvrir</NavLink>
                <NavLink to="login">s'inscrire</NavLink>
              </NavItems>
            </NavMenu>
            <NavBtnContainer>
              <NavBtn to="/login">Commencer</NavBtn>
            </NavBtnContainer>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default HomeNavbar