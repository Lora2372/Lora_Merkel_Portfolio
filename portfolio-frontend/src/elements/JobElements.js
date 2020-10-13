import React from "react";
import styled from "styled-components";
import {StyledSection} from "./SectionElements";


export const StyledJobCenter = styled(StyledSection)`
  grid-template-columns: repeat(12, 1fr);
  height: 100%;
  display: grid;
  align-items: center;
  
  @media screen and (min-width: 992px) {
    width: 90vw;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`;

export const StyledJobBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }

`;

export const StyledJobBtn = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;

  &:hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;

    &:hover {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
  }
`;

export const StyledJobInfo = styled.article`
    min-height: 420px;

    h3{
      font-weight: 400;
    }

    h4{
      text-transform: uppercase;
      color: var(--clr-grey-5);
      background: var(--clr-grey-9);
      display: inline-block;
      padding: 0.375rem 0.75rem;
      border-radius: var(--radius);
    }
`;

export const StyledJobDate = styled.p`
  letter-spacing: var(--spacing);
`;