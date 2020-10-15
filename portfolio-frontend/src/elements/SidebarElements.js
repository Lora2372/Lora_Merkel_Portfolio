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
    /* ${props => props.showsidebar === "showsidebar"} {
    opacity: 1;
    transform: translateX(0);
} */
opacity: ${props => props.showsidebar ? 1 : 0};
transform: ${props => props.showsidebar ? "translateX(0)" : "translateX(-100%)"};
    background: ${props => props.showsidebar ? "palevioletred" : "white"};

    @media screen and (min-width: 992px) {
        
        transform: translateX(-100%);

    }
`;

// export const StyledShowSidebar = styled(StyledSidebar)`

// `;


export const StyledSidebarLinks = styled.ul`
@keyframes slideRight {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

li{
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
    
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
