import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

import {StyledSectionCenter} from "./SectionElements";

export const StyledAboutPage = styled.section`
      padding: 7rem 0;
      background: var(--clr-grey-10);
      min-height: calc(100vh - 5rem - 9rem);

`;

export const StyledAboutText = styled.article`
        grid-column: 6 / -1;
`;

export const StyledAboutCenter = styled(StyledSectionCenter)`
    @media screen and (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        column-gap: 4rem;
    }
`;

export const StyledAboutImg = styled(props => <Image {...props}/>)`
    margin-bottom: 2rem;
    height: 25rem;

    @media screen and (min-width: 992px) {
        grid-column: 1 / span 5;
        margin-bottom: 0;
    }
`;

export const StyledAboutStackSpan = styled.span`
  display: inline-block;
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;