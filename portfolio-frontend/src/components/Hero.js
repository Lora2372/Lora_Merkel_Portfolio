import React from "react"
import Image from "gatsby-image"
import {StyledLinkBtn} from "../elements/LinkButtonElements"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
import {StyledHeroCenter} from "../elements/HeroElements";
import {StyledUnderline} from "../elements/UnderlineElements";
import {StyledHero} from "../elements/HeroElements";

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <StyledHero>
      <StyledHeroCenter>
        <article className="hero-info">
          <div>
            <h1>Lora</h1>
            <StyledUnderline></StyledUnderline>
            {/* <div className="underline"></div> */}
            <h4>Studerande på TUC Yrkeshögskola som Systemutvecklare</h4>
            - 🔭 I’m currently working on my own Portfolio site
            <br />
            - 🌱 I’m currently learning React, Gatsby, GraphQL and Strapi
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://strapi.io/documentation/v3.x/getting-started/introduction.html"
            >
              Strapi
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/getting-started.html"
            >
              React
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org/docs/"
            >
              Gatsby
            </a>{" "}
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://styled-components.com/docs"
            >
              Styled Components
            </a>
            <br />
            - 📫 How to reach me: use the link below :)
            <br />
            <StyledLinkBtn to="/contact">
              kontakta mig
            </StyledLinkBtn>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </StyledHeroCenter>
    </StyledHero>
  )
}
export default Hero
