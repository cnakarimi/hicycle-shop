import { AppProps } from "next/app";
import "../styles/globals.css";

// https://www.bike24.com/
// images are here

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
