import React from "react";
import styled from "styled-components";

export const StyledSocialLink = styled.a`
  font-size: 1.75rem;
  text-decoration:none;
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

  li {
  opacity: 0;
  animation: slideUp 0.5s ease-in-out 0.3s forwards;
}
li:nth-of-type(1) {
  animation-delay: 0.25s;
}
li:nth-of-type(2) {
  animation-delay: 0.5s;
}
li:nth-of-type(3) {
  animation-delay: 0.75s;
}
li:nth-of-type(4) {
  animation-delay: 1s;
}
li:nth-of-type(5) {
  animation-delay: 1.25s;
}
@keyframes slideUp {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

`;