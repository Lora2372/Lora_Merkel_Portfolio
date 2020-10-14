import styled from "styled-components";

export const ErrorPage = styled.main`
    display: grid;
    place-items: center;
    background: var(--clr-primary-10);
    text-align: center;
    min-height: calc(100vh - 5rem - 9rem);

    h1{
        text-transform: uppercase;
        color: var(--clr-primary-1);
        margin-bottom: 2rem;
    }
`;