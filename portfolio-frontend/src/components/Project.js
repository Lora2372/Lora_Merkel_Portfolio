import React from "react"
import PropTypes from "prop-types"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import {
        StyledProject, 
        StyledProjectImg, 
        StyledProjectInfo, 
        StyledProjectNumber, 
        StyledProjectDesc,
        StyledProjectStack,
        StyledProjectIcon
} from "../elements/ProjectElements";

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <StyledProject>
      {/* if image is not supplied, instead of breaking, dont show any image */}
      {image && (
        <StyledProjectImg fluid={image.childImageSharp.fluid} />
      )}
      <StyledProjectInfo>
        <StyledProjectNumber>0{index + 1}.</StyledProjectNumber>
        {/* if title is not supplied, set a defualt title */}
        <h3>{title || "Projekt"}</h3>
        <StyledProjectDesc>{description}</StyledProjectDesc>
        <StyledProjectStack>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </StyledProjectStack>
        <div>
          <StyledProjectIcon href={github}>
            <FaGithubSquare/>
          </StyledProjectIcon>
          <StyledProjectIcon href={url}>
            <FaShareSquare />
          </StyledProjectIcon>
        </div>
      </StyledProjectInfo>
    </StyledProject>
  )
}

/*if you for example forget to set these fields in strapi,
so if you forget to give them values, you will get a error in your console
*/
Project.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
