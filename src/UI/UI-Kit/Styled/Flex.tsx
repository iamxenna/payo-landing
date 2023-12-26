import styled from "styled-components";

export interface FlexProps {
  direction?: "row" | "column" | "column-reverse";
  justify?: "center" | "space-between" | "space-around" | "flex-end";
  align?: "center" | "flex-end" | "flex-start";
  position?: "relative";
  wrap?: boolean;
  gap?: number;
  width?: number;
  height?: number;
  margin?: string;
  padding?: string;
  cursor?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  width: ${({ width }) => (width ? `${width}%` : "auto")};
  height: ${({ height }) => (height ? `${height}%` : "auto")};
  flex-direction: ${({ direction }) => direction ?? "flex-start"};
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  align-items: ${({ align }) => align ?? "flex-start"};
  flex-wrap: ${({ wrap = false }) => (wrap ? "wrap" : "no-wrap")};
  position: ${({ position }) => position};
  gap: ${({ gap = 0 }) => gap}px;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
`;
