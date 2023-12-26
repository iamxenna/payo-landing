import { ReactNode } from "react";

interface ButtonWrapperProps {
  variant: "border" | "primary" | "secondary";
  padding?: string;
  fSize?: number;
  lHeight?: number;
  width?: string;
  height?: string;
  isMini?: boolean;
}
interface ButtonProps extends ButtonWrapperProps {
  onClick(): void;
  children: ReactNode;
}

export type { ButtonProps, ButtonWrapperProps };
