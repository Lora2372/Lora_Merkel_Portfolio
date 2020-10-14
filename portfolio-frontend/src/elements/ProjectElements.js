import styled from "styled-components";

export const StyledProject = styled.article`
  display: grid;
  margin-bottom: 4rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
`;

export const StyledProjectImg = styled.image`
   border-top-left-radius: var(--radius);
   border-top-right-radius: var(--radius);
   height: 19rem;
   z-index: 1;
   
   @media screen and (min-width: 576px) {
       height: 19rem;
    }
    @media screen and (min-width: 768px) {
        height: 22rem;
    }
    
    @media screen and (min-width: 992px) {
        grid-column: 1 / span 8;
        grid-row: 1 / 1;
        height: 30rem;
        border-radius: var(--radius);
        box-shadow: var(--dark-shadow);
    }
 `;

export const StyledProjectInfo = styled.div`
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);

  h3{
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);

    z-index: 1;
    grid-column: 5 /12;
    grid-row: 1 / 1;
  }
`;

export const StyledProjectNumber = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: var(--clr-primary-5);
  margin-bottom: 0.75rem;
`;

export const StyledProjectDesc = styled.p`
  word-spacing: 15px;
  color: var(--clr-grey-3);
`;

export const StyledProjectStack = styled.div`
  margin-bottom: 1rem;
`;

export const StyledProjectIcon = styled.a`
  color: var(--clr-primary-5);
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: var(--transition);

  &:hover {
    color: var(--clr-primary-1);
  }
`;