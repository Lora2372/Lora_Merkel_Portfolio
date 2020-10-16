import styled from "styled-components";
import {StyledSectionCenter} from "./SectionElements";
import Image from "gatsby-image";
import React from "react";

import {StyledUnderline} from "../elements/UnderlineElements";

export const StyledHero = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;

  ${StyledUnderline} {
  margin-bottom: 0.5rem;
  margin-left: 0;
  }


  @media screen and (min-width: 992px) {
   
    &:before{
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: var(--clr-white);
    }

    h4{
      font-size: 0.85rem;
    }
  }

  @media screen and (min-width: 1170px) {
    h4{
      font-size: 1rem;
      line-height: 1;
    }
  }

`;

export const StyledHeroCenter = styled(StyledSectionCenter)`
grid-template-columns: repeat(12, 1fr);
  height: 100%;
  display: grid;
  align-items: center;
`;

export const StyledHeroImage = styled(props => <Image{...props} />)`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;

  display: none;

  @media screen and (min-width: 992px) {
    display: block;
    grid-row: 1;
    max-height: 200px;
    max-width: 200px;
    grid-column: 8 / span 3;
  }
`;

export const StyledHeroInfo = styled.article`
    background: var(--clr-primary-10);

    h4{
      color: var(--clr-grey-5);
    }

    grid-row: 1/1;
    grid-column: 1 / span 8;

    @media screen and (min-width: 992px) {
      grid-row: 1/1;
      grid-column: 1 / span 7;
    }

    @media screen and (min-width: 1170px) {
      grid-column: 1 / span 8;
    }
`;
