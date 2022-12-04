import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mehdi Hassan Akash</title>
        <meta name="description" content="Mehdi Hassan Akash" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
