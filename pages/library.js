import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import img1 from "../public/im/newIcons1/newDocumentLibrary1/1.png";
import img2 from "../public/im/newIcons1/newDocumentLibrary1/2.png";
import img3 from "../public/im/newIcons1/newDocumentLibrary1/3.png";
import img4 from "../public/im/newIcons1/newDocumentLibrary1/4.png";
import img5 from "../public/im/newIcons1/newDocumentLibrary1/5.png";
import img7 from "../public/im/newIcons1/newDocumentLibrary1/7.png";
import img8 from "../public/im/newIcons1/newDocumentLibrary1/8.png";
import img9 from "../public/im/newIcons1/newDocumentLibrary1/9.png";
import img10 from "../public/im/newIcons1/newDocumentLibrary1/10.png";
import Image from "next/image";

export default function Library() {
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة - المكتبة الوثائقية </title>
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

      <main className="newDocumentLibrary1" dir="rtl">
        <FullHeader />

        <section>
          <section className="one">
            <div className="row justify-content-between">
              <div className="col-md-3 one-header-left">
                <div className="row justify-content-between align-items-center">
                  <h5 className="col-md-5 col-5 one-heading2">تصنيف الخدمات</h5>
                  <div className="col-md-7 col-7">
                    <select className="select_input" name="" id="">
                      <option value="">الكل</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2 one-header-right">
                <div className="row justify-content-between align-items-center">
                  <h5 className="col-md-2 col-3 one-heading1">بحث</h5>
                  <div className="col-md-10 col-9">
                    <input
                      type="text"
                      className="search_input"
                      placeholder="بحث عن خدمة"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container-textd">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img8}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اللائحة التنفيذية لنظام مقدمي خدمة حجاج الخارج
                      </h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 1--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img8}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اللائحة التنفيذية لنظام خدمة حجاج الداخل
                      </h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 2--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img4}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اللائحة التنفيذية للنظام الخاص بالمنازل المعدة لإسكان
                        الحجاج
                      </h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 3--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img9}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اللائحة التنفيذية لشركة استقبال وتوديع المعتمرين
                      </h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 4--> */}
              </div>
              {/* <!-- end row 1 --> */}
              <div className="row">
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img3}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اللائحة التنفيذية لتنظيم خدمات المعتمرين
                      </h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 5--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img5}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اللائحة التنظيمية لمنع غير السعوديين من التعامل في مجال
                        إسكان الحجاج
                      </h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 6--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img1}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اللائحة التنظيمية لمجلس تنسيق مؤسسات وشركات خدمة حجاج
                        الداخل
                      </h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 7--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img2}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اللائحة التنظيمية لتأشيرات الأفراد (مضيف)
                      </h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 8--> */}
              </div>
              {/* <!-- end row 2 --> */}
              <div className="row">
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img10}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">نظام خدمة حجاج الداخل</h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 9--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img10}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">نظام مقدمي خدمة حجاج الخارج</h1>
                    </div>
                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 10--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img7}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        تنظيم خدمات المعتمرين وزوار المسجد النبوي الشريف من خارج
                        المملكة
                      </h1>
                    </div>

                    <button className="btn ser-btn" href="#">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
                {/* <!-- end card 11--> */}
              </div>
              {/* <!-- end row 3 --> */}
            </div>
            {/* <!-- end big container --> */}
          </section>

          {/* <!-- Question --> */}
          <section className="container-textd">
            <div className="border_linebox">
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <h3 className="title_linebox about">
                    هل استفدت من المعلومات المقدمة في هذه الصفحة؟
                  </h3>
                </div>
                <div className="col-md-8 col-xs-12">
                  <div className="btNflex">
                    <button href="#" className="btn btn_color">
                      نعم، استفدت
                    </button>
                    <button href="#" className="btn btn solid">
                      لا، لم أستفد
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
