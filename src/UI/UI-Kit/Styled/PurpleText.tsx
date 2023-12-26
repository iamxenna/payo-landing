import styled from "styled-components";

export const PurpleText = styled.span<{ type: "light" | "dark" }>`
  color: ${({ type }) => (type === "dark" ? "var(--purple-dark)" : "var(--purple-light)")};
`;
