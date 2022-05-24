import { AppProps } from "next/app";

import { globalStyles } from "@/core/config/stitches.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
