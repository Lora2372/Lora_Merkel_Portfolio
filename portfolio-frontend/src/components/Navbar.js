import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight, FaTimes } from "react-icons/fa"
import PageLinks from "../constants/links"
import styled from "styled-components";

import {
        StyledNavbar,
        StyledNavbarCenter,
        StyledNavbarHeader,
        StyledNavbarLinks,
        StyledNavbarToggleButton
      
      } from "../elements/NavbarElements";

      import {StyledSidebarCloseBtn} from "../elements/SidebarElements";

const Navbar = ({ toggleSidebar }) => {

  return (
    <StyledNavbar>
      <StyledNavbarCenter id="top">
        <StyledNavbarHeader>

          <StyledNavbarToggleButton className="Hej"  onClick={toggleSidebar}>
            
            <FaAlignRight />
          </StyledNavbarToggleButton>

        </StyledNavbarHeader>
        
        

          <PageLinks />
      </StyledNavbarCenter>
    </StyledNavbar>
  )
}

export default Navbar


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;