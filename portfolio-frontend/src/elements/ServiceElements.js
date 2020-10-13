import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';
import {StyledSectionCenter} from "../elements/SectionElements";


export const StyledService = styled.article`
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);

  p{
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
    color: var(--clr-primary-9);


  }

`;

export const StyledServiceCenter = styled(StyledSectionCenter)`
@media screen and (min-width: 676px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
}

@media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
}
`;
