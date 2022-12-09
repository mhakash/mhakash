import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mehdi Hassan Akash</title>
        <meta name="description" content="Mehdi Hassan Akash" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
