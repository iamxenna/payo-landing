import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  type: "text" | "email";
  variant: "usual" | "textarea";
  value: string;
  placeholder: string;
  onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

export type { InputProps };
