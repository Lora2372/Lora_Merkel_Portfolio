import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"

import {
          StyledSidebar,
          StyledSidebarLinks,
          StyledShowSidebar,
          StyledSidebarCloseBtn
        } from "../elements/SidebarElements";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <StyledSidebar className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <StyledSidebarCloseBtn onClick={toggleSidebar}>
        <FaTimes />
      </StyledSidebarCloseBtn>
      <div>
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
