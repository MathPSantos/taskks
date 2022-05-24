import { styled } from "@/core/config/stitches.config";

export const Container = styled("header", {
  px: "$5",
});

export const Content = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  maxWidth: "$container",

  py: "$5",
  mx: "$auto",
});

export const Actions = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: "8px",
});
