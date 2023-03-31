import Head from "next/head";
import type { AppProps } from "next/app";

import LayoutComponent from "@/components/layout/layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <LayoutComponent>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </LayoutComponent>
  );
}
