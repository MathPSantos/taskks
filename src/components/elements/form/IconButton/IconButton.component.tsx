import { HTMLAttributes, ReactElement } from "react";
import * as IC from "./IconButton.styled";

interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  Icon: ReactElement;
  "aria-label": string;
  variant?: "secondary" | "danger";
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
  isOutlined?: boolean;
}

export function IconButton({
  Icon,
  variant = "secondary",
  size = "medium",
  isOutlined = false,
  isDisabled = false,
  ...rest
}: IconButtonProps) {
  return (
    <IC.IconButton
      disabled={isDisabled}
      variant={variant}
      size={size}
      isOutlined={isOutlined}
      {...rest}
    >
      {Icon}
    </IC.IconButton>
  );
}
