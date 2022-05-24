import { IconButton } from "@/components/elements/form";
import { ActivityIcon, GithubIcon } from "@/core/shared/icons";
import Image from "next/image";

import * as H from "./Header.styled";

export function Header() {
  return (
    <H.Container>
      <H.Content>
        <Image src="/assets/logo.svg" alt="Taskks" width={58} height={26} />

        <H.Actions>
          <IconButton aria-label="Your Activity" Icon={<ActivityIcon />} />
          <IconButton
            aria-label="See our project on Github"
            Icon={<GithubIcon />}
          />
        </H.Actions>
      </H.Content>
    </H.Container>
  );
}
