import { mobileLayoutForTablet, smallMobile } from "Constants/Devices";
import styled from "styled-components";

interface GridProps {
  column?: string;
  rows?: string;
  template?: string;
  justify?: string;
  gap?: number;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ column }) => column};
  grid-template-rows: ${({ rows }) => rows};
  grid-template: ${({ template }) => template};
  gap: ${({ gap }) => gap}px;

  @media screen and (max-width: ${mobileLayoutForTablet}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${smallMobile}px) {
    grid-template-columns: 1fr;
  }
`;
