import { styled } from "@/core/config/stitches.config";
import { motion } from "framer-motion";

export const Footer = styled("footer", {
  width: "100%",
  height: 0,
  paddingLeft: 40,

  display: "flex",
  justifyContent: "space-between",

  opacity: 0,

  transition: "all 0.2s ease-in-out",
});

export const ListItem = styled(motion.div, {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "$5",

  backgroundColor: "$white",

  borderRadius: "20px",
  borderStyle: "solid",
  borderWidth: 2,
  borderColor: "transparent",

  transition: "all 0.2s ease-in-out",

  "&:hover, &:focus-within": {
    borderColor: "$gray200",
    boxShadow: "0px 0px 0px 4px rgba(232, 232, 234, 0.25)",
  },

  [`&:hover ${Footer}, &:focus-within ${Footer}`]: {
    height: 32,
    opacity: 1,

    marginTop: 16,
  },

  variants: {
    isSelected: {
      true: {
        "&, &:focus-within": {
          borderColor: "$orange700",
          boxShadow: "0 0 0 4px #FBCBBE",
        },
      },
    },

    isCompleted: {
      true: {
        textDecoration: "#3F3F44 line-through",
      },
    },
  },
});

export const Main = styled("main", {
  width: "100%",

  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
});

export const ContentEditable = styled("span", {
  flex: "1",
  height: "fit-content",

  fontSize: "$xl",
  color: "$gray900",
  fontWeight: "$semiBold",
  lineHeight: "26px",

  border: "none",

  outline: "2px solid transparent",

  cursor: "text",

  "&:empty::before": {
    content: "type something...",
    color: "$gray400",
  },
});

export const Actions = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 12,
});
