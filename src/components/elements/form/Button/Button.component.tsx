import { HTMLAttributes, ReactNode } from "react";
import * as B from "./Button.styled";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  isGhost?: boolean;
  isOutlined?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "medium",
  isGhost,
  isOutlined,
  isFullWidth,
  isDisabled,
  ...rest
}: ButtonProps) {
  const styledProps = {
    variant,
    size,
    isGhost,
    isOutlined,
    isFullWidth,
  };

  return (
    <B.Button disabled={isDisabled} {...styledProps} {...rest}>
      {children}
    </B.Button>
  );
}
