import styled from "styled-components";

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

export const StyledBlogCard = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem 1rem;

    h4{
        color: var(--clr-grey-1);
    }
`;

export const StyledBlogImg = styled.div`
    //


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