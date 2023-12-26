import styled from "styled-components";

export interface TypographyProps {
  color?: string;
  family?: "Inter" | "Poppins";
  weight?: number;
  size?: number;
  lHeight?: number | string;
  cursor?: string;
  wrap?: boolean;
  opacity?: number;
  tAlign?: string;
}

export const Typography = styled.p<TypographyProps>`
  color: ${({ color }) => color ?? "var(--white)"};
  font-family: ${({ family }) => family || "Poppins"}, sans-serif;
  font-weight: ${({ weight }) => weight || 400};
  font-size: ${({ size }) => size || 16}px;
  line-height: ${({ lHeight }) => lHeight || 19}px;
  cursor: ${({ cursor = "default" }) => cursor};
  white-space: ${({ wrap = true }) => (wrap ? "normal" : "nowrap")};
  opacity: ${({ opacity = 1 }) => opacity};
  text-align: ${({ tAlign }) => tAlign};
`;
