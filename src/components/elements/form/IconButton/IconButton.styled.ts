import { styled } from "@/core/config/stitches.config";

export const IconButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "transparent",

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
      secondary: {
        color: "$gray600",

        "&:hover": {
          backgroundColor: "$gray200",
        },

        "&:active, &:focus": {
          boxShadow: "0px 0px 0px 4px #F1F1F2",
        },
      },
      danger: {
        color: "$red700",

        "&:hover": {
          backgroundColor: "$red100",
        },

        "&:active, &:focus": {
          boxShadow: "0px 0px 0px 4px #E8687F",
        },
      },
    },

    size: {
      small: {
        width: 32,
        height: 32,
        borderRadius: 8,

        fontSize: 16,
      },
      medium: {
        width: 40,
        height: 40,
        borderRadius: 12,

        fontSize: 16,
      },
      large: {
        width: 44,
        height: 44,
        borderRadius: 12,

        fontSize: 20,
      },
    },

    isOutlined: {
      true: {
        backgroundColor: "transparent",
      },
    },
  },

  compoundVariants: [
    {
      variant: "secondary",
      isOutlined: true,
      css: {
        borderColor: "$gray200",
      },
    },
  ],
});
