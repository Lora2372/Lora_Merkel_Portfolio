import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import {StyledLinkCenterBtn} from "../elements/LinkButtonElements";
import {StyledSection} from "../elements/SectionElements";
import {StyledJobCenter, StyledJobBtnContainer, StyledJobBtn, StyledJobInfo, StyledJobDate} from "../elements/JobElements";

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  // destructering
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  console.log(jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)

  return (
    <StyledSection>
      <Title title="erfarenhet" />
      <StyledJobCenter>
        {/* btn container */}
        <StyledJobBtnContainer>
          {jobs.map((item, index) => {
            return (
              <StyledJobBtn
                key={item.strapiId}
                onClick={() => setValue(index)}
                // {index === value && "active-btn" ? active : ""}
              >
                {item.company}
              </StyledJobBtn>
            )
          })}
        </StyledJobBtnContainer>
        {/* job info */}
        <StyledJobInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <StyledJobDate>{date}</StyledJobDate>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </StyledJobInfo>
      </StyledJobCenter>
      <StyledLinkCenterBtn to="/about">
        Mitt CV
      </StyledLinkCenterBtn>
    </StyledSection>
  )
}

export default Jobs
