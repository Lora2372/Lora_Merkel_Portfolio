import React from "react"
import Title from "./Title"
import services from "../constants/services"
import {StyledSection} from "../elements/SectionElements";
import {StyledServiceCenter} from "../elements/ServiceElements";
import {StyledUnderline} from "../elements/UnderlineElements";
import {StyledService} from "../elements/ServiceElements";

const Services = () => {
  return (
    <StyledSection bggrey>
      <Title title="Tjänster" />
      <StyledServiceCenter>
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <StyledService key={id}>
              {icon}
              <h4>{title}</h4>
              {/* <div className="underline"></div> */}
              <StyledUnderline></StyledUnderline>
              <p>{text}</p>
            </StyledService>
          )
        })}
      </StyledServiceCenter>
    </StyledSection>
  )
}

export default Services
