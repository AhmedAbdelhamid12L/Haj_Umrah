import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import img1 from "../public/im/newIcons1/newServices1/1.png";
import img2 from "../public/im/newIcons1/newServices1/2.png";
import img3 from "../public/im/newIcons1/newServices1/3.png";
import img4 from "../public/im/newIcons1/newServices1/4.png";
import img5 from "../public/im/newIcons1/newServices1/5.png";
import img6 from "../public/im/newIcons1/newServices1/6.png";
import img7 from "../public/im/newIcons1/newServices1/7.png";
import img9 from "../public/im/newIcons1/newServices1/9.png";
import img10 from "../public/im/newIcons1/newServices1/10.png";
import img11 from "../public/im/newIcons1/newServices1/11.png";
import Image from "next/image";

export default function Services() {
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة - الخدمات الإلكترونية </title>
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

      <main className="newServices1" dir="rtl">
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
                        src={img4}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        الاستعلام عن شركات حجاج الداخل المرخصة
                      </h1>
                      <p className="sertext text-center">
                        تتيح هذه الخدمة للمستفيد إمكانية البحث عن شركات ومؤسسات
                        حج محدده واستعراض معلوماتها وتفاصيل الخدمات المقدمه من
                        قبلها
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
                    </button>
                  </div>
                </div>
                {/* <!-- end card 1--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img2}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        حجز واستخراج تصريح حج للمواطنين والمقيمين
                      </h1>
                      <p className="sertext text-center">
                        تتيح هذه الخدمة للمستفيد إستعراض برامج الخدمات لحجاج
                        الداخل واختيار البرنامج المناسب ومنشاة الحج التي يرغب
                        التعاقد معها
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
                    </button>
                  </div>
                </div>
                {/* <!-- end card 2--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img7}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        الاستعلام عن حالة الحجز لتصريح الحج
                      </h1>
                      <p className="sertext text-center">
                        تتيح هذه الخدمة للمستفيد الإستعلام عن تفاصيل حجز برنامج
                        حج داخلي
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
                    </button>
                  </div>
                </div>
                {/* <!-- end card 3--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img2}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">إلغاء حجز تصريح الحج</h1>
                      <p className="sertext text-center">
                        تتيح هذه الخدمة للمستفيد إلغاء حجز برنامج حج داخلي
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
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
                        src={img1}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">استرجاع مبلغ حجز موسم مسبق</h1>
                      <p className="sertext text-center">
                        تتيح هذه الخدمة للمستفيد إسترجاع مبالغ الحجوزات لمواسم
                        الحج الماضية
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
                    </button>
                  </div>
                </div>
                {/* <!-- end card 5--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img4}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        استعلام عن شركات العمرة المرخصة
                      </h1>
                      <p className="sertext text-center">
                        خدمة إلكترونية تقدمها وزارة الحج والعمرة عبر بوابة
                        (مقام) تمكن المستفيد من الاستعلام عن شركات العمرة
                        المرخصة من وزارة الحج والعمرة
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
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
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">استعلام عن تأشيرة عمرة</h1>
                      <p className="sertext text-center">
                        خدمة إلكترونية تقدمها وزارة الحج والعمرة تمكن المستفيد
                        من الاستعلام عن حالة طلبه لتأشيرة العمرة
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
                    </button>
                  </div>
                </div>
                {/* <!-- end card 7--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img3}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اعتماد عقود النقل لحجاج الخارج
                      </h1>
                      <p className="sertext text-center">
                        تمكن هذه الخدمة المستفيد من التقديم على إعتماد عقد نقل
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
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
                        src={img6}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اعتماد عقود السكن لحجاج الخارج
                      </h1>
                      <p className="sertext text-center">
                        تمكن هذه الخدمة المستفيد من التقديم على اعتماد عقد سكن
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
                    </button>
                  </div>
                </div>
                {/* <!-- end card 9--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img5}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">
                        اعتماد عقود الإعاشة لحجاج الاخارج
                      </h1>
                      <p className="sertext text-center">
                        تمكن هذه الخدمة المستفيد من التقديم على اعتماد عقد إعاشة
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
                    </button>
                  </div>
                </div>
                {/* <!-- end card 10--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img10}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">تقديم معاملة جديدة</h1>
                      <p className="sertext text-center">
                        إتاحة تقديم طلب تسجيل خطاب إلى مكتب معالي وزير الحج
                        والعمرة أو إحدى الإدارات أو اللجان التابعة للوزارة
                        بنموذج إلكتروني دون الحاجة للحضور لمقرات الوزارة
                      </p>
                    </div>

                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
                    </button>
                  </div>
                </div>
                {/* <!-- end card 11--> */}
                <div className="col-xl-3 col-md-3 col-sm-12 col-12">
                  <div className="card">
                    <div className="imgCover">
                      <Image
                        src={img9}
                        className="ser_image"
                        alt="imge media center"
                        layout="fixed"
                        width=" 60px"
                        height="60px"
                      />
                    </div>
                    <div className="card-body">
                      <h1 className="ser_title">الاستعلام عن معاملة</h1>
                      <p className="sertext text-center">
                        إتاحة الاستعلام عن حالة المعاملات المقيدة في سجلات وزارة
                        الحج والعمرة (نظام راسل) من خلال رقم المعاملة ورقم جوال
                        مقدم المعاملة
                      </p>
                    </div>
                    <button className="btn ser-btn" href="#">
                      الدخول للخدمة
                    </button>
                  </div>
                </div>
                {/* <!-- end card 12--> */}
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
