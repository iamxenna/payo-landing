import React, { FC } from "react";
import styled from "styled-components";
import { ButtonProps, ButtonWrapperProps } from "./Button.interfaces";

const COLORS = {
  usual: {
    border: "rgba(255, 255, 255, 0.1)",
    primary: "var(--purple)",
    secondary: "var(--purple-darkest)",
  },
  hover: {
    border: "rgba(199, 173, 255, 0.3)",
    primary: "#CD70E1",
    secondary: "#854695",
  },
  active: {
    border: "#E1D5FA",
    primary: "#DA95EA",
    secondary: "#9E52AF",
  },
};

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  border: ${({ variant }) => (variant === "border" ? "2px solid #FFFFFF" : "none")};
  background: ${({ variant }) => COLORS.usual[variant]};
  color: ${({ variant }) => (variant === "primary" ? "var(--white)" : "var(--soft-white)")};
  height: ${({ variant, height }) => (height ? height : variant === "primary" ? "69px" : "56px")};
  padding: ${({ padding }) => padding ?? "16px 24px"};
  font-weight: 500;
  font-size: ${({ fSize }) => fSize ?? 16}px;
  line-height: ${({ lHeight }) => lHeight ?? 24}px;
  border-radius: 16px;
  cursor: pointer;
  width: ${({ variant, width }) => width || (variant === "primary" && "274px")};
  transition: all 0.5s;

  &:hover {
    background: ${({ variant }) => COLORS.hover[variant]};
  }
  &:active {
    background: ${({ variant }) => COLORS.active[variant]};
    color: ${({ variant }) => variant === "border" && "#413068"};
  }
`;

export const Button: FC<ButtonProps> = ({ variant, onClick, children, height, width }) => {
  return (
    <ButtonWrapper variant={variant} onClick={onClick} height={height} width={width}>
      {children}
    </ButtonWrapper>
  );
};
