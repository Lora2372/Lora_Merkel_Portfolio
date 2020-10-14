import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import {StyledLinkBtn, StyledLinkCVBtn} from "../elements/LinkButtonElements";
import downloadFile from "../../static/LoraMerkelCV.pdf"
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
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            {/* <Title title={title} />
                <p>{info}</p> */}
            <ReactMarkdown source={info} />
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>

              
              <StyledLinkCVBtn href={downloadFile} download>
                Ladda ner fullständig CV
              {` `}
              </StyledLinkCVBtn>
            
            <StyledLinkBtn to="/contact">
              kontakta mig
            </StyledLinkBtn>
          </article>
        </div>
        <></>
      </section>
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
