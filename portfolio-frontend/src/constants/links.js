import React from "react"
import { Link } from "gatsby"

import {StyledNavbarLinks} from "../elements/NavbarElements";
import {StyledSidebarLinks} from "../elements/SidebarElements";

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return styleClass ? ( <StyledSidebarLinks>{tempLinks}</StyledSidebarLinks> ) : ( <StyledNavbarLinks>
    {tempLinks}
  </StyledNavbarLinks>)
}
