import React from "react"
import Title from "./Title"
import services from "../constants/services"
import {StyledSection} from "../elements/SectionElements";
import {StyledServiceCenter} from "../elements/ServiceElements";

const Services = () => {
  return (
    <StyledSection bggrey>
      <Title title="Tjänster" />
      <StyledServiceCenter>
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </StyledServiceCenter>
    </StyledSection>
  )
}

export default Services
