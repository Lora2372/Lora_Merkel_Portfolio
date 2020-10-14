import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

import {
        StyledNavbar,
        StyledNavbarCenter,
        StyledNavbarHeader,
        StyledNavbarLinks,
        StyledNavbarToggleButton
      
      } from "../elements/NavbarElements";

const Navbar = ({ toggleSidebar }) => {
  return (
    <StyledNavbar>
      <StyledNavbarCenter id="top">
        <StyledNavbarHeader>
          <img src={logo} alt="logo" />
          <StyledNavbarToggleButton type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </StyledNavbarToggleButton>
        </StyledNavbarHeader>
        
        <StyledNavbarLinks>
          <PageLinks />
        </StyledNavbarLinks>
      </StyledNavbarCenter>
    </StyledNavbar>
  )
}

export default Navbar
