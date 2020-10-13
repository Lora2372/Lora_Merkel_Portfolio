import React from "react"
import {StyledSectionTitle} from "../elements/SectionElements";


const Title = ({ title }) => {
  return (
    <StyledSectionTitle>
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </StyledSectionTitle>
  )
}

export default Title
