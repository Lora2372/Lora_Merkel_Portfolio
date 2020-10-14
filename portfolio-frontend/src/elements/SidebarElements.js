import styled from "styled-components";

export const StyledSidebar = styled.aside`
    background: var(--clr-grey-10);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: var(--transition);
    transform: translateX(-100%);

    @media screen and (min-width: 992px) {
        transform: translateX(-100%);

    }
`;

export const StyledShowSidebar = styled.aside`
    opacity: 1;
    transform: translateX(0);
`;

export const StyledSidebarLinks = styled.a`
    li{
        opacity: 0;
        a{
            display: block;
            text-align: center;
            text-transform: capitalize;
            color: var(--clr-grey-5);
            letter-spacing: var(--spacing);
            margin-bottom: 0.5rem;
            font-size: 2rem;
            transition: var(--transition);
            border-radius: var(--radius);

            &:hover {
                background: var(--clr-primary-9);
                color: var(--clr-primary-5);
            }
        }
    }
`;

export const StyledSidebarCloseBtn = styled.button`
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
`;