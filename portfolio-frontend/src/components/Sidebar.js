import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import styled from "styled-components";
import {
          StyledSidebar,
          StyledSidebarLinks,
          StyledShowSidebar,
          StyledSidebarCloseBtn
        } from "../elements/SidebarElements";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  console.log(toggleSidebar);
  console.log("Cookies");
  let AuthButton;
  if (isOpen) {
    AuthButton = <StyledSidebar showsidebar>
     <StyledSidebarCloseBtn onClick={toggleSidebar}>
        <FaTimes />
      </StyledSidebarCloseBtn>

      <div>
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </StyledSidebar>;
  } else {
    AuthButton = <StyledSidebar>
     <StyledSidebarCloseBtn onClick={toggleSidebar}>
        <FaTimes />
      </StyledSidebarCloseBtn>

      <div>
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </StyledSidebar>;
  }

  return (


    {...AuthButton}
  )
}



export default Sidebar
