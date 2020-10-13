import React from "react";
import styled from "styled-components";
import {StyledSection} from "./SectionElements";


export const StyledJobCenter = styled(StyledSection)`
grid-template-columns: repeat(12, 1fr);
  height: 100%;
  display: grid;
  align-items: center;
`;