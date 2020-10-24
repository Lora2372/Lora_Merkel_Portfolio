import styled from "styled-components";
import Image from "gatsby-image"
import React from "react";



export const StyledBlog = styled.article`
    display: block;
    margin-bottom: 2rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);

    &:hover {
        box-shadow: var(--dark-shadow);
        transform: scale(1.02);
    }

    article{
        height: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
    }
`;

export const StyledBlogPage = styled.section`
      background: var(--clr-grey-10);
      min-height: calc(100vh - 5rem - 9rem);

      ${StyledBlog}{
        background: var(--clr-white);
      }
`;


export const StyledBlogCard = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem 1rem;

    h4{
        color: var(--clr-grey-1);
    }
`;

export const StyledBlogImg = styled(props => <Image{...props}/>)`
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
      height: 15rem;


    @media screen and (min-width: 576px) {
        height: 17.5rem;
    }

    @media screen and (min-width: 850px) {
        height: 13.75rem;
    }
`;

export const StyledBlogFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        margin-bottom: 0;
        font-weight: bold;
        color: var(--clr-grey-5);
    }
`;