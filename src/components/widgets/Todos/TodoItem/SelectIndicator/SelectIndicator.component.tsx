import { CheckboxProps } from "@radix-ui/react-checkbox";

import * as SI from "./SelectIndicator.styled";

interface SelectIndicatorProps extends CheckboxProps {
  onCheckedChange: (checked: boolean) => void;
}

export function SelectIndicator({ ...props }: SelectIndicatorProps) {
  return (
    <SI.Root {...props}>
      <SI.Indicator />
    </SI.Root>
  );
}
