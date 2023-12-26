import React, { FC, useMemo } from "react";
import styled from "styled-components";

const Container = styled.div<{ sHeight: number }>`
  display: flex;
  width: 8px;
  height: ${({ sHeight }) => sHeight}px;
  background: rgba(180, 157, 148, 0.2);
  border-radius: 20px;
`;

const ScrollBar = styled.div<{
  height?: string;
  sColor?: string;
  scrollPosition: "start" | "center" | "end";
  max: number;
  fullH: number;
}>`
  width: 8px;
  background: ${({ sColor }) => sColor || "var(--purple-dark)"};
  border-radius: 20px;
  height: ${({ height }) => height};
  margin-top: ${({ scrollPosition, fullH, max }) => {
    if (scrollPosition === "start") return 0;
    if (scrollPosition === "center") return `calc(${fullH / 16}rem - ${(fullH / max) * 2}px)`;
    return `calc(${fullH / 16}rem - ${fullH / max}px)`;
  }};
  transition: margin 0.1s linear;
`;

interface ScrollProps {
  max: 3 | 2;
  active: number;
  sHeight?: number;
  sColor?: string;
}

export const Scroll: FC<ScrollProps> = ({ max, active, sHeight, sColor }) => {
  const scrollPosition = useMemo(() => {
    if (active === 0) {
      return "start";
    } else if (active === 1 && max === 3) {
      return "center";
    }
    return "end";
  }, [max, active]);

  const height = useMemo(() => {
    if (max === 2) return "50%";
    return "33%";
  }, [max, active]);

  return (
    <Container sHeight={sHeight}>
      <ScrollBar scrollPosition={scrollPosition} max={max} fullH={sHeight} height={height} sColor={sColor} />
    </Container>
  );
};
