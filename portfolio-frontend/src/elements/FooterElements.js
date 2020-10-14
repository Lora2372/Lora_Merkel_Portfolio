import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 9rem;
    background: #222;
    text-align: center;
    display: grid;
    place-items: center;

    h4{
        margin-top: 0.5rem;
        color: var(--clr-white);
        font-weight: normal;
        text-transform: uppercase;

        span{
            color: var(--clr-primary-5);
        }
    }

    ul{
        margin :1rem auto 0;
        width: 15rem;
        display: flex;
        li {
            list-style-type: none;
            margin: 0 auto 1rem auto;    
            a{
            color: var(--clr-white);
                :hover{
                    color: var(--clr-primary-5);
                }
            } 
        }
    }
`;

export const StyledFooterSocialLinks = styled.ul `
      margin: 0 auto 1rem auto;
`;