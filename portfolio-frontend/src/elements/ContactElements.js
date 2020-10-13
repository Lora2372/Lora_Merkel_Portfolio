import React from "react";
import styled from "styled-components";

export const StyledContactPage = styled.section`
  display: grid;
  place-items: center;
  padding: 5rem 0;
`;

export const StyledContactForm = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  max-width: 35rem;

  &:hover {
    box-shadow: var(--dark-shadow);
  }
`;