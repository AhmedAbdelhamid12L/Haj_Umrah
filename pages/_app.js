import "../styles/globals.css";
// import '../styles/Font/all.min.css'
// import "../styles/inner/bootstrapRTL.css";
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.css";
import "../styles/inner/responsive.css";
import "../styles/inner/newStyle1.css";
import "../styles/inner/newDocumentDetails1.css";
import "../styles/inner/newDocumentLibrary1.css";
import "../styles/inner/newServices1.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("../node_modules/bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
