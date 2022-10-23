import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import homeImage from "../public/im/newIcons1/newServicesDetails1/homeicon.svg";
import goldenStar from "../public/im/newIcons1/newServicesDetails1/goldstar.svg";
import goldenEmptyStar from "../public/im/newIcons1/newServicesDetails1/goldemptystar.svg";
import greenEmptyStar from "../public/im/newIcons1/newServicesDetails1/greenemptystar.svg";
import ServicesDetailsComp from "../components/ServicesDetailsComp1";
import Image from "next/image";

export default function ServicesDetails() {
  const secLeftOne = [
    {
      id: 1,
      image: "/../public/im/newIcons1/newServicesDetails1/icon1.svg",
      mainTitle: "رسوم الخدمة",
      secondTitle: "<p>لا يوجد رسوم</p>",
    },
    {
      id: 2,
      image: "/../public/im/newIcons1/newServicesDetails1/icon2.svg",
      mainTitle: " المستفيد من الخدمة",
      secondTitle: "<p>المواطنين والمقيمين  </p>",
    },
    {
      id: 3,
      image: "/../public/im/newIcons1/newServicesDetails1/icon3.svg",
      mainTitle: " متطلبات الخدمة",
      secondTitle: "<p>لا يوجد متطلبات</p>",
    },
  ];

  const secLeftTwo = [
    {
      id: 4,
      image: "/../public/im/newIcons1/newServicesDetails1/icon4.svg",
      mainTitle: " مقدم الخدمة",
      secondTitle: "<p>الإدارة العامة لحجاج الداخل  </p>",
    },
    {
      id: 5,
      image: "/../public/im/newIcons1/newServicesDetails1/icon5.svg",
      mainTitle: "   عدد المشاهدات",
      secondTitle: "<p>100.   </p>",
    },
    {
      id: 6,
      image: "/../public/im/newIcons1/newServicesDetails1/icon6.svg",
      mainTitle: "  للشكاوى والمقترحات",
      secondTitle: "<button>اتصل بنا  </button>",
    },
  ];
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة - تفاصيل الخدمة </title>
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
      </Head>

      <main className="newServicesDetails1" dir="rtl">
        <FullHeader />

        <section>
          <div className="main-sec-one container">
            <div className="row">
              <div className="right col-xs-12 col-md-6">
                <div className="one">
                  <div className="upper">
                    <div className="right">
                      {/* Image */}
                      <Image src={homeImage} layout="fixed" />
                      <p>وصف الخدمة</p>
                    </div>
                    <div className="mini-left">
                      <div className="Stars">
                        <Image src={goldenStar} layout="fixed" />
                        <Image src={goldenStar} layout="fixed" />
                        <Image src={goldenStar} layout="fixed" />
                        <Image src={goldenStar} layout="fixed" />
                        <Image src={goldenEmptyStar} layout="fixed" />
                      </div>
                      <p>15 تقييمات</p>
                    </div>
                  </div>
                  <div className="lower">
                    <p>
                      تتيح هذه الخدمة للمستفيد إمكانية البحث عن شركات ومؤسسات حج
                      محدده واستعراض معلوماتها وتفاصيل الخدمات المقدمه من قبلها
                    </p>
                  </div>
                </div>
                <div className="two">
                  <button className="active-btn">تنفيذ الخدمة</button>
                  <button>خطوات الخدمة</button>
                </div>
                <div className="three">
                  <Image src={greenEmptyStar} layout="fixed" />
                  <h6>لتقييم الخدمة</h6>
                  <p>يمكنك تقيم خدمة الاستعلام عن شركات حجاج الداخل المرخصة</p>
                  <div className="stars-icon">
                    <Image src={goldenEmptyStar} layout="fixed" />
                    <Image src={goldenEmptyStar} layout="fixed" />
                    <Image src={goldenEmptyStar} layout="fixed" />
                    <Image src={goldenEmptyStar} layout="fixed" />
                    <Image src={goldenEmptyStar} layout="fixed" />
                  </div>
                </div>
              </div>
              <div className="left col-xs-12 col-md-6">
                <div className="container">
                  <div className="one row">
                    {secLeftOne.map((ele, index) => {
                      return <ServicesDetailsComp ele={ele} key={index} />;
                    })}
                  </div>
                  <div className="line">
                    <hr />
                  </div>
                  <div className="two row">
                    {secLeftTwo.map((ele, index) => {
                      return <ServicesDetailsComp ele={ele} key={index} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
