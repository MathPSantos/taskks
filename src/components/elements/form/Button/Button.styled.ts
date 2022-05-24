import { styled } from "@stitches/react";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "6px",

  border: "1px solid transparent",
  outline: "2px solid transparent",

  transition: "all 0.2s ease-in-out",
  cursor: "pointer",

  "&:disabled": {
    opacity: "0.6",

    pointerEvents: "none",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$orange700",
        color: "$white",

        "&:hover": {
          backgroundColor: "$orange900",
        },

        "&:active, &:focus": {
          boxShadow: "0px 0px 0px 4px #FBCBBE",
        },
      },
      secondary: {
        backgroundColor: "transparent",
        color: "$gray600",

        "&:hover": {
          backgroundColor: "$gray200",
        },

        "&:active, &:focus": {
          boxShadow: "0px 0px 0px 4px #F1F1F2",
        },
      },
    },

    size: {
      small: {
        height: "32px",
        paddingLeft: "12px",
        paddingRight: "12px",
        fontSize: "$sm",
        borderRadius: "8px",
      },
      medium: {
        height: "40px",
        paddingLeft: "16px",
        paddingRight: "16px",
        fontSize: "$md",
        borderRadius: "12px",
      },
      large: {
        height: "44px",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "$lg",
        borderRadius: "12px",
      },
    },

    isGhost: {
      true: {
        backgroundColor: "transparent",
      },
    },

    isOutlined: {
      true: {
        border: "1px solid",
      },
    },

    isFullWidth: {
      true: {
        width: "100%",
      },
    },
  },

  compoundVariants: [
    {
      variant: "primary",
      isGhost: true,
      css: {
        color: "$orange700",

        "&:hover": {
          backgroundColor: "$orange100",
        },
      },
    },

    {
      variant: "secondary",
      isOutlined: true,
      css: {
        borderColor: "$gray200",
      },
    },
  ],
});
