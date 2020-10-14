import React from "react"
import SocialLinks from "../constants/socialLinks"

import {StyledFooter, StyledFooterSocialLinks} from "../elements/FooterElements";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterSocialLinks>
      <div>
        <SocialLinks ></SocialLinks>
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>Muffin</span> | all rights reserved
        </h4>
      </div>
      </StyledFooterSocialLinks>
    </StyledFooter>
  )
}

export default Footer
