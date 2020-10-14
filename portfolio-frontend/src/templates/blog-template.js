import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import {StyledLinkCenterBtn} from "../elements/LinkButtonElements"
import {StyledSectionCenter} from "../elements/SectionElements";

import {StyledBlogTemplate} from "../elements/BlogTemplateElements";

const ComponentName = ({ data }) => {
  console.log(data)
  const { content, title, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <StyledBlogTemplate>
        <StyledSectionCenter>
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <StyledLinkCenterBtn to="/blog">
            Alla artiklar
          </StyledLinkCenterBtn>
        </StyledSectionCenter>
      </StyledBlogTemplate>
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
