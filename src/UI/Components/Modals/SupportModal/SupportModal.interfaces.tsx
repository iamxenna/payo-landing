import { ReactNode } from "react";

interface BaseModalProps {
  isOpen: boolean;
  setIsOpen(value?: boolean): void;
  children: ReactNode;
}

interface ModalProps extends BaseModalProps {
  variant?: "purple" | "light";
  position?: "left" | "center" | "right" | "rightCard";
}

interface SupportState {
  name: string;
  email: string;
  question: string;
  description: string;
}

export type { BaseModalProps, ModalProps, SupportState };
