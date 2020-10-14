import styled from "styled-components";

import {StyledSectionCenter} from "../elements/SectionElements";



export const StyledBlogTemplate = styled.section`
      padding: 5rem 0;
      background: var(--clr-grey-10);
      min-height: calc(100vh - 5rem - 9rem);

      h1,h2{
            text-align: center;
      }

      ul{
            margin-top: 2rem;
            display: inline-block;

            li{
                  background: var(--clr-grey-9);
                  color: var(--clr-grey-5);
                  padding: 0.5rem 1rem;
                  margin: 1rem 0;
                  text-transform: uppercase;
            }
      }
`;

export const StyledBlogCenter = styled(StyledSectionCenter)`

      blockquote{
            background: var(--clr-primary-9);
            border-radius: var(--radius);
            padding: 1rem;
            line-height: 2;
            color: var(--clr-primary-5);
            margin: 2rem 0;
      }

      pre{
            background: #222;
            color: yellow;
            overflow-x: scroll;
            padding: 1rem 1.5rem;
            border-radius: var(--radius);
      }

      img{
            width: 15rem;
            height: 15rem;
            margin: 3rem 0;
      }
`;

export const StyledBlogArticle = styled.article`

`;

