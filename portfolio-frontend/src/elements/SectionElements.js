import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';


export const StyledSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.bggrey ? "var(--clr-grey-10)" : "inherit"};
`;

export const StyledSectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 95vw;
}
`;

export const StyledSectionTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  background-color: pink;
`;

export const StyledBlogCenter = styled(StyledSectionCenter)`
@media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
}
`;

