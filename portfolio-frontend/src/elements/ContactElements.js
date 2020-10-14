import React from "react";
import styled from "styled-components";

export const StyledContactPage = styled.section`
  display: grid;
  place-items: center;
  padding: 5rem 0;

  background: var(--clr-grey-10);
  min-height: calc(100vh - 5rem - 9rem);
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

  h3{
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }
`;

export const StyledContactFormGroup = styled.div`
    padding: 1rem 1.5rem;
`;

export const StyledContactFormControl = styled.input`
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);

  &:placeholder{
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
`;

export const StyledContactFormTextArea = styled.textarea`
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);

  &:placeholder{
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
`;