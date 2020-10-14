import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import {StyledLinkBtn, StyledLinkCVBtn} from "../elements/LinkButtonElements";
import downloadFile from "../../static/LoraMerkelCV.pdf";

import {
          StyledAboutPage,
          StyledAboutImg,
          StyledAboutStackSpan,
          StyledAboutCenter,
          StyledAboutText
        } from "../elements/AboutElements";

// ...GatsbyImageSharpFluid
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  //console.log(nodes)
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      <SEO title="CV" description="Lora's CV" />
      <StyledAboutPage>
        <StyledAboutCenter>
          <StyledAboutImg fluid={image.childImageSharp.fluid} />
          <StyledAboutText>
            {/* <Title title={title} />
                <p>{info}</p> */}
            <ReactMarkdown source={info} />
            <div>
              {stack.map(item => {
                return <StyledAboutStackSpan key={item.id}>{item.title}</StyledAboutStackSpan>
              })}
            </div>

              
              <StyledLinkCVBtn href={downloadFile} download>
                Ladda ner fullständig CV
              {` `}
              </StyledLinkCVBtn>
            
            <StyledLinkBtn to="/contact">
              kontakta mig
            </StyledLinkBtn>
          </StyledAboutText>
        </StyledAboutCenter>
        <></>
      </StyledAboutPage>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
