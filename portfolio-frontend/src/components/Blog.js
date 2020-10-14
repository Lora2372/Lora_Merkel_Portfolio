import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"



import {
          StyledBlog,
          StyledBlogCard,
          StyledBlogFooter,
          StyledBlogImg
        } from "../elements/BlogElements";

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <StyledBlog>
        {/* if image is not supplied, instead of breaking, dont show any image */}
        {image && (
          <StyledBlogImg fluid={image.childImageSharp.fluid}  />
        )}
        <StyledBlogCard>
          {/* if title is not supplied, set a defualt title */}
          <h4>{title || "Ariklar"}</h4>
          <p>{desc}</p>
          <StyledBlogFooter>
            <p>{category}</p>
            <p>{date}</p>
          </StyledBlogFooter>
        </StyledBlogCard>
      </StyledBlog>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Blog
