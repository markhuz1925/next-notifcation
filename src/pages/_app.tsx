import type { AppProps } from "next/app";

import SWRProvider from "@/providers/swr-provider";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRProvider>
      <Component {...pageProps} />
    </SWRProvider>
  );
}
