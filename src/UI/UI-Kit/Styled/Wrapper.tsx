import styled from "styled-components";

interface WrapperProps {
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
  backgroundImage?: string;
  bgPosition?: string;
  zIndex?: string;
}

export const Wrapper = styled.div<WrapperProps>`
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
  padding: 0 var(--paddings);
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: ${({ bgPosition }) => bgPosition || "center"};
  background-repeat: no-repeat;
  background-size: contain;
  z-index: ${({ zIndex }) => zIndex};
`;
