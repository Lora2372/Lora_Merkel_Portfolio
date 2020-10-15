import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import { withTheme } from "styled-components";

import {StyledSocialLink} from "../elements/SocialLinkElements";
import {StyledSocialLinks} from "../elements/SocialLinkElements";

const data = [
  {
    id: 1,
    icon: <FaLinkedin></FaLinkedin>,
    url: "https://www.linkedin.com/in/lora-merkel-261a76183",
  },
  {
    id: 2,
    icon: <FaTwitterSquare></FaTwitterSquare>,
    url: "https://twitter.com/Lora94150437",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <StyledSocialLink href={link.url}>
        {link.icon}
      </StyledSocialLink>
    </li>
  )
})

export default ({ styleClass }) => {
  return styleClass ? ( <StyledSocialLinks>{links}</StyledSocialLinks> ) : ( <ul>
    {links}
  </ul>)
}
