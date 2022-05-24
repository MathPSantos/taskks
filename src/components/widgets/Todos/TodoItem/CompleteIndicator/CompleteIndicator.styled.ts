import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { styled } from "@stitches/react";

export const Root = styled(RadixCheckbox.Root, {
  width: 28,
  height: 28,

  borderRadius: 8,
  borderStyle: "solid",
  borderWidth: 2,
  borderColor: "$gray200",

  backgroundColor: "$white",

  cursor: "pointer",

  outline: "2px solid transparent",

  overflow: "none",

  "&:active, &:focus": {
    boxShadow: "0 0 0 4px #FBCBBE",
  },

  transition: "all 0.2s ease-in-out",

  variants: {
    checked: {
      true: {
        backgroundColor: "$orange700",
        borderColor: "$orange700",
      },
      false: {},
      indeterminate: {},
    },
  },
});

export const Indicator = styled(RadixCheckbox.Indicator, {
  width: "100%",
  height: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "$orange700",

  borderRadius: 4,

  color: "$white",

  transition: "all 0.2s ease-in-out",
});
