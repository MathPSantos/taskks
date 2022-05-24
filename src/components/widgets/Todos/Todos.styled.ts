import { styled } from "@/core/config/stitches.config";

export const List = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  gap: "$4",

  mt: "$6",

  transition: "all 0.2s ease-in-out",
});
