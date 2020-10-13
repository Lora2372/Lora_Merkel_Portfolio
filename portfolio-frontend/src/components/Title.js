import React from "react"
import {StyledSectionTitle} from "../elements/SectionElements";
import {StyledUnderline} from "../elements/UnderlineElements";

const Title = ({ title }) => {
  return (
    <StyledSectionTitle>
      <h2>{title || "default title"}</h2>
      <StyledUnderline></StyledUnderline>
    </StyledSectionTitle>
  )
}

export default Title
