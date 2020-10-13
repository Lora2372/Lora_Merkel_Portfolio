import styled from "styled-components";
import {StyledSectionCenter} from "./SectionElements";

export const StyledHero = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;
`;

export const StyledHeroCenter = styled(StyledSectionCenter)`
grid-template-columns: repeat(12, 1fr);
  height: 100%;
  display: grid;
  align-items: center;
`;

export const StyledHeroImage = styled.article`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: var(--clr-primary-10);
  position: relative;
`;
