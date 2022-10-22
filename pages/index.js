import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة - الرئيسية</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="الحج والعمرة : الموقع الرسمي لوزارة الحج والعمرة بالمملكة العربية السعودية  "
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="slsal.co" />
        <meta name="keywords" content="" />
        <link rel="shortcut icon" id="favicon" href="favicon.png" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
      </Head>

      <main dir="rtl">
        <FullHeader />
        <section className="">HOME</section>
        <Footer />
      </main>
    </Fragment>
  );
}
