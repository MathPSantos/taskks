import { ReactNode } from "react";

import { Main, Header } from "../";

interface MainProps {
  children: ReactNode;
}

export function Layout({ children }: MainProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
