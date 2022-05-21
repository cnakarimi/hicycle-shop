import { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

// https://www.bike24.com/
// images are here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
