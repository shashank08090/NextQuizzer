import "../styles/globals.css";
import Head from "next/head";
import "./Header/Header.scss";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer/Footer.css";
import "./Register/Register.scss";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
