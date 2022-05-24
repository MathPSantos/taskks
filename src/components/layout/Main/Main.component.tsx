import { ReactNode } from "react";

import * as M from "./Main.styled";

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <M.Container>
      <M.Content>{children}</M.Content>
    </M.Container>
  );
}
