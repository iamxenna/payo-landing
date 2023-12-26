import styled from "styled-components";

interface ContainerProps {
  position?: "absolute" | "relative" | "fixed";
  width?: string;
  height?: string;
  maxW?: string;
  maxH?: string;
  right?: number;
  bottom?: number;
  top?: number;
  left?: number;
  margin?: string;
  padding?: string;
  cursor?: string;
  backgroundImage?: string;
  zIndex?: number;
}

export const Container = styled.div<ContainerProps>`
  position: ${({ position = "unset" }) => position};
  left: ${({ left }) => left};
  right: ${({ right }) => right}rem;
  bottom: ${({ bottom }) => `${bottom}rem`};
  top: ${({ top }) => top}rem;
  max-width: ${({ maxW }) => maxW}px;
  max-height: ${({ maxH }) => maxH}px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  z-index: ${({ zIndex }) => zIndex};
  cursor: ${({ cursor }) => cursor};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
