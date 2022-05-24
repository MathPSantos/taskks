import { ReactNode } from "react";
import NextHead from "next/head";

interface HeadProps {
  children?: ReactNode;
  title?: string;
}

const DEFAULT_TITLE = "Taskks";

export function Head({ children, title = DEFAULT_TITLE }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>

      {children}
    </NextHead>
  );
}
