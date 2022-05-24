import { styled } from "@stitches/react";

import * as RadixCheckbox from "@radix-ui/react-checkbox";

export const Root = styled(RadixCheckbox.Root, {
  width: 18,
  height: 18,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderStyle: "solid",
  borderWidth: 2,
  borderColor: "$gray200",
  borderRadius: 6,

  backgroundColor: "$white",

  outline: "2px solid transparent",

  cursor: "pointer",

  transition: "all 0.2s ease-in-out",

  "&:active, &:focus": {
    boxShadow: "0 0 0 4px #FBCBBE",
  },

  variants: {
    checked: {
      true: {
        borderColor: "$orange700",
      },
      false: {},
      indeterminate: {},
    },
  },
});

export const Indicator = styled(RadixCheckbox.Indicator, {
  width: 8,
  height: 8,

  backgroundColor: "$orange700",

  borderRadius: 2,

  transition: "all 0.2s ease-in-out",
});
