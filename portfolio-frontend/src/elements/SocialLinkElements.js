import React from "react";
import styled from "styled-components";

export const StyledSocialLink = styled.a`
  font-size: 1.75rem;
  color: var(--clr-grey-1);
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-5);
  }
`;

export const StyledSocialLinks = styled.ul`
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
`;