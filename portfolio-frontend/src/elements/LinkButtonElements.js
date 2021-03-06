import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';


export const StyledLinkBtn = styled(props => <Link {...props} />)`
text-transform: uppercase;
background: var(--clr-primary-5);
color: var(--clr-primary-9);
padding: 0.375rem 0.75rem;
letter-spacing: var(--spacing);
display: inline-block;
font-weight: 700;
-webkit-transition: var(--transition);
transition: var(--transition);
font-size: 0.875rem;
border: 2px solid transparent;
cursor: pointer;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
border-radius: var(--radius);

&:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-8);
}
`;

export const StyledLinkCVBtn = styled.a`
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);

  &:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
  }
`;

export const StyledLinkCenterBtn = styled(StyledLinkBtn)`
  display: block;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
`;