import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import img1 from "../public/im/newIcons1/newDocumentDetails1/download.png";
import Image from "next/image";

export default function LibraryDetails() {
  return (
    <Fragment>
      <Head>
        <title>
          الحج والعمرة - اللائحة التنفيذية لنظام مقدمي خدمة حجاج الخارج{" "}
        </title>
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

      <main className="newDocumentDetails1" dir="rtl">
        <FullHeader />

        <section>
          <div className="main-head-section">
            <div className="inside-head">
              <div className="row">
                <div className="col-md-4 cardDoc">
                  <h2 className="heading-main-sec">اسم الوثيقة</h2>
                  <hr />
                  <p className="heading2-main-sec">
                    اللائحة التنفيذية لنظام مقدمي خدمة حجاج الخارج
                  </p>
                </div>
                <div className="col-md-4 cardDoc">
                  <h2 className="heading-main-sec">رقم الوثيقة</h2>
                  <hr />
                  <p className="heading2-main-sec">028</p>
                </div>
                <div className="col-md-4 cardDoc">
                  <h2 className="heading-main-sec">حالة نشر الوثيقة</h2>
                  <hr />
                  <p className="heading2-main-sec">ساري</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 cardDoc">
                  <h2 className="heading-main-sec">نوع الوثيقة</h2>
                  <hr />
                  <p className="heading2-main-sec">لوائح وأنظمة</p>
                </div>
                <div className="col-md-4 cardDoc">
                  <h2 className="heading-main-sec">تاريخ إنشاء الوثيقة</h2>
                  <hr />
                  <p className="heading2-main-sec">07/02/1443</p>
                </div>
                <div className="col-md-4 cardDoc">
                  <h2 className="heading-main-sec">نبذة عن الوثيقة</h2>
                  <hr />
                  <p className="heading2-main-sec">
                    اللائحة التنفيذية لنظام مقدمي خدمة حجاج الخارج
                  </p>
                </div>
              </div>
              <div>
                <button className="btn ser-btn" href="#">
                  <Image src={img1} alt="download" />
                  ملف الوثيقة اللائحة التنفيذية لنظام مقدمي خدمة حجاج الخارج.pdf
                </button>
              </div>
            </div>
          </div>
          <section className="out-big-sec">
            <div className="big-sec">
              <h2 className="heading1-big">نص الوثيقة</h2>
              <h2 className="heading1-big">
                اللائحة التنفيذية لنظام مقدمي خدمة حجاج الخارج
              </h2>
              <div className="inside-big">
                <p class="pre-big">
                  عدد الأبواب(4) / عدد المواد (25). <br />
                  <br />
                  الباب الأول: أحكام تمهيدية <br />
                  <br />
                  المادة الأولى: التعريفات: <br />
                  <br />
                  تكون للألفاظ والمصطلحات الواردة في اللائحة ذات المعنى المبين
                  لها في النظام، والألفاظ التي لم ترد في النظام يكون لها المعاني
                  المبينة أمام كل منها في اللائحة: <br />
                  <br />
                  1.النظام: نظام مقدمي خدمة حجاج الخارج الصادر بالمرسوم الملكي
                  رقم (م/ 111) وتاريخ 17/09/1440 هـ. <br />
                  <br />
                  2.نظام الشركات: نظام الشركات الصادر بالمرسوم الملكي رقم (م/3)
                  وتاريخ 38/01/1437هـ ولوائحه التنفيذية وأي تعديلات لاحقة عليه.{" "}
                  <br />
                  <br />
                  3.دليل التصنيف الكمي والنوعي: الدليل الذي تصدره الوزارة وفقًا
                  للنظام لتحديد الخدمات التي تقدمها شركات أرباب الطوائف وشركات
                  تقديم الخدمة. <br />
                  <br />
                  4.شروط الترخيص لشركات تقديم الخدمة: الشروط التي تصدرها الوزارة
                  لتنظيم عملية ترخيص شركات تقديم الخدمة بموجب النظام، ووضع آليات
                  الرقابة والتقييم لغرض تجديد الترخيص. <br />
                  <br />
                  5.أسهم الخزينة: الأسهم التي تحتفظ بها شركات أرباب الطوائف
                  وفقًا لنظامها الأساس، بما فيها الأسهم المخصصة للموظفين
                  والمستفيدين إن وجدت. <br />
                  <br />
                  6.القيمة السوقية: تحدد القيمة السوقية للأسهم وفقًا لآخر تقييم
                  مالي للشركة المعنية بناءً على آخر ميزانية معتمدة لها. <br />
                  <br />
                  7.المستفيد: غير المواطن الذي خصصت له أسهم في أي من مؤسسات
                  أرباب الطوائف قبل التحول أو آلت إليه منفعة الأسهم بعد التحول
                  لشركات أرباب الطوائف بحكم الميراث وفقًا للآلية المحددة في هذه
                  اللائحة. <br />
                  <br />
                  8.السنة المالية: السنة المالية للشركات وفقًا للنظام الأساس
                  للشركات المساهمة وعقد التأسيس وتعديلاته لشركات المسؤولية
                  المحدودة. <br />
                  <br />
                  9.شركة الإسناد: شركة تقديم الخدمة المملوكة لشركة أرباب الطوائف
                  بنسبة 100 % والتي تقوم بتقديم خدمات الإسناد المشتركة لجميع
                  الشركات العاملة في نطاق اختصاص شركة أرباب الطوائف. <br />
                </p>
              </div>
            </div>
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
