import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mehid Hassan Akash</title>
        <meta name="description" content="Mehid Hassan Akash" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
