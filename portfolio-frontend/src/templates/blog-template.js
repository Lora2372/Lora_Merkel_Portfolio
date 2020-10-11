import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import {StyledLinkCenterBtn} from "../elements/LinkButtonElements"
import {StyledSectionCenter} from "../elements/SectionElements";

const ComponentName = ({ data }) => {
  console.log(data)
  const { content, title, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <StyledSectionCenter>
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <StyledLinkCenterBtn to="/blog">
            Alla artiklar
          </StyledLinkCenterBtn>
        </StyledSectionCenter>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
