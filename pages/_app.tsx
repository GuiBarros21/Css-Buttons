import "../styles/globals.css";
import LayoutGA from "../components/LayoutGA";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutGA>
      <Head>
        <title>Buttons With Code</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Sidebar />
      <Component {...pageProps} />
    </LayoutGA>
  );
}

export default MyApp;
