import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import {StyledLinkCenterBtn} from "../elements/LinkButtonElements";
import {StyledSection, StyledBlogCenter} from "../elements/SectionElements";


export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <StyledSection>
      <Title title={title} />
      Beep
      <StyledBlogCenter>
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </StyledBlogCenter>
      {/* If the showLink is undefined, dont show any link, otherwise show link */}
      {showLink && (
        <StyledLinkCenterBtn to="/blog">
          Alla artiklar
        </StyledLinkCenterBtn>
      )}
    </StyledSection>
  )
}
export default Blogs
