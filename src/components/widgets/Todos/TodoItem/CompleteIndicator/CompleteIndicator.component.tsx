import { CheckIcon } from "@/core/shared/icons";
import { CheckboxProps } from "@radix-ui/react-checkbox";

import * as CI from "./CompleteIndicator.styled";

interface CompleteIndicatorProps extends CheckboxProps {
  onCheckedChange: (checked: boolean) => void;
}

export function CompleteIndicator({
  checked,
  ...props
}: CompleteIndicatorProps) {
  return (
    <CI.Root checked={checked} {...props}>
      <CI.Indicator>{checked && <CheckIcon />}</CI.Indicator>
    </CI.Root>
  );
}
