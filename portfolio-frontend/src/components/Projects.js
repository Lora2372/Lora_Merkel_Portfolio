import React from "react"
import Title from "./Title"
import Project from "./Project"
import {StyledLinkCenterBtn} from "../elements/LinkButtonElements"
import { StyledSectionCenter, StyledSection } from "../elements/SectionElements"
const Projects = ({ projects, title, showLink }) => {
  return (
    <StyledSection bggrey>
      <Title title={title} />
      <StyledSectionCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </StyledSectionCenter>
      {showLink && (
        <StyledLinkCenterBtn to="/projects">
          Alla projekt
        </StyledLinkCenterBtn>
      )}
    </StyledSection>
  )
}

export default Projects
