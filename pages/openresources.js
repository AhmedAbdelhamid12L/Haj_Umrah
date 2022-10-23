import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import img1 from "../public/im/newIcons1/newOpenResources1/arrow.png";
import img2 from "../public/im/newIcons1/newOpenResources1/arrow2.png";
import img3 from "../public/im/newIcons1/newOpenResources1/1.svg";
import img4 from "../public/im/newIcons1/newOpenResources1/2.svg";
import img5 from "../public/im/newIcons1/newOpenResources1/3.svg";
import img6 from "../public/im/newIcons1/newOpenResources1/Download.svg";
import img7 from "../public/im/newIcons1/newOpenResources1/Print.svg";
import img8 from "../public/im/newIcons1/newOpenResources1/6.svg";
import Image from "next/image";

export default function OpenResources() {
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة - البيانات المفتوحة</title>
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

      <main className="newOpenResources1" dir="rtl">
        <FullHeader />

        <section>
          <div className="main-head-section">
            <div className="inside-head">
              <h2 className="heading1-main-sec">ما الذي تبحث عنه؟</h2>
              <div className="row">
                <div className="col-md-11">
                  <div className="row">
                    <div className="col-md-4 cardDoc">
                      <input
                        type="text"
                        className="inp-card"
                        placeholder="ادخل اسم الملف"
                      />
                    </div>
                    <div className="col-md-4 cardDoc">
                      <input
                        type="text"
                        className="inp-card"
                        placeholder="ادخل الوصف"
                      />
                    </div>
                    <div className="col-md-4 cardDoc">
                      <input
                        type="text"
                        className="inp-card"
                        placeholder="ادخل السنة"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-1 cardDoc">
                  <button className="btn ser-btn" href="#">
                    بحث
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="out-big-sec">
            <div>
              <div className="row">
                <div className="col-md-3">
                  <h2 className="heading3-main-sec">
                    {" "}
                    <Image src={img1} alt="arrow" />
                    &nbsp; سياسة البيانات المفتوحة{" "}
                  </h2>
                  <hr />
                  <h2 className="heading2-main-sec">
                    {" "}
                    <Image src={img2} alt="arrow" />
                    &nbsp; مكتبة البيانات المفتوحة{" "}
                  </h2>
                  <hr />
                  <h2 className="heading2-main-sec">
                    {" "}
                    <Image src={img2} alt="arrow" />
                    &nbsp; طلب البيانات المفتوحة{" "}
                  </h2>
                </div>
                <div className="col-md-9">
                  <div className="inside-head">
                    <h2 className="heading4-main-sec">
                      {" "}
                      ما هي البيانات المفتوحة
                    </h2>
                    <p className="p-inside-big">
                      هي مجموعة من البيانات العامة – المقروءة آليا – والمتاحة
                      لجميع زوار موقع وزارة الحج والعمرة دون قيود تقنية أو مادية
                      وبصيغ متعددة لتسهيل معالجتها وإعادة استخدامها والتي تهدف
                      إلى تعزيز المشاركة ورفع مستوى المعرفة، ويجب على مستخدمي
                      تلك البيانات الاطلاع على سياسة الاستخدام لمعرفة اي تحديثات
                      يتم عليها
                    </p>
                  </div>
                  <div>
                    <h2 className="heading5-main-sec">
                      المبادئ الرئيسية للبيانات المفتوحة
                    </h2>
                    <div className="row">
                      <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                          <div className="imgCover">
                            <Image
                              src={img3}
                              alt="imge media center"
                              layout="fixed"
                              width=" 60px"
                              height="60px"
                            />
                          </div>
                          <div className="card-body">
                            <h1 className="ser_title">
                              الأصل في البيانات الإتاحة
                            </h1>
                            <p className="sertext text-center">
                              اتاحة بيانات وزارة الحج والعمرة القابلة للإفصاح
                              وتمكين الوصول اليها او استخدامها من خلال البوابة
                              الالكترونية للوزارة او البوابة الوطنية للبيانات
                              المفتوحة او كليهما
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                          <div className="imgCover">
                            <Image
                              src={img3}
                              alt="imge media center"
                              layout="fixed"
                              width=" 60px"
                              height="60px"
                            />
                          </div>
                          <div className="card-body">
                            <h1 className="ser_title">
                              الصيغة المفتوحة وإمكانية القراءة آليا
                            </h1>
                            <p className="sertext text-center">
                              توفير البيانات المفتوحة بصيغ مقروءة آليا (CSV,
                              XLS)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                          <div className="imgCover">
                            <Image
                              src={img3}
                              alt="imge media center"
                              layout="fixed"
                              width=" 60px"
                              height="60px"
                            />
                          </div>
                          <div className="card-body">
                            <h1 className="ser_title">حداثة البيانات</h1>
                            <p className="sertext text-center">
                              نشر أحدث اصدار من البيانات المتاحة بشكل دوري كل
                              عام
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                          <div className="imgCover">
                            <Image
                              src={img3}
                              alt="imge media center"
                              layout="fixed"
                              width=" 60px"
                              height="60px"
                            />
                          </div>
                          <div className="card-body">
                            <h1 className="ser_title">الشمولية</h1>
                            <p className="sertext text-center">
                              اتاحة بيانات مفتوحة شاملة وتتضمن أكبر قدر ممكن من
                              التفاصيل
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                          <div className="imgCover">
                            <Image
                              src={img3}
                              alt="imge media center"
                              layout="fixed"
                              width=" 60px"
                              height="60px"
                            />
                          </div>
                          <div className="card-body">
                            <h1 className="ser_title">عدم التمييز</h1>
                            <p className="sertext text-center">
                              اتاحة البيانات المفتوحة للجميع ولا تحتاج الى تسجيل
                              الدخول
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                          <div className="imgCover">
                            <Image
                              src={img3}
                              alt="imge media center"
                              layout="fixed"
                              width=" 60px"
                              height="60px"
                            />
                          </div>
                          <div className="card-body">
                            <h1 className="ser_title">بدون مقابل مالي</h1>
                            <p className="sertext text-center">
                              اتاحة البيانات المفتوحة للجميع مجاناً
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                          <div className="imgCover">
                            <Image
                              src={img3}
                              alt="imge media center"
                              layout="fixed"
                              width=" 60px"
                              height="60px"
                            />
                          </div>
                          <div className="card-body">
                            <h1 className="ser_title">
                              ترخيص البيانات المفتوحة في المملكة
                            </h1>
                            <p className="sertext text-center">
                              اتاحة البيانات المفتوحة يكون مبني على أساس نظامي
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                          <div className="imgCover">
                            <Image
                              src={img3}
                              alt="imge media center"
                              layout="fixed"
                              width=" 60px"
                              height="60px"
                            />
                          </div>
                          <div className="card-body">
                            <h1 className="ser_title">
                              تطوير نموذج الحكومة وإشراك الجميع
                            </h1>
                            <p className="sertext text-center">
                              اتاحة مشاركة البيانات المفتوحة وذلك لتعزيز
                              الشفافية والتكامل مع الجهات المختلفة
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                          <div className="imgCover">
                            <Image
                              src={img3}
                              alt="imge media center"
                              layout="fixed"
                              width=" 60px"
                              height="60px"
                            />
                          </div>
                          <div className="card-body">
                            <h1 className="ser_title">
                              التنمية الشاملة والابتكار
                            </h1>
                            <p className="sertext text-center">
                              توفير نماذج اعمال من البيانات المفتوحة لمساعدة
                              المستخدمين على إعادة استخدام البيانات
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="heading5-w-img">
                      <Image
                        src={img4}
                        alt="imge media center"
                        layout="fixed"
                        width=" 30px"
                        height="30px"
                      />
                      &nbsp; مستخدمو البيانات المفتوحة
                    </h2>
                    <p>
                      تتيح وزارة الحج والعمرة لمستخدمي البوابة الاطلاع على
                      البيانات المفتوحة، كما أن لهم الحق في استخدام هذه البيانات
                      على مسؤوليتهم الشخصية، وهذا الحق مكفول لكافة المستفيدين
                    </p>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                          <h1 className="heading5-main-sec">
                            مسؤولية مستخدمي البيانات
                          </h1>
                          <p className="p-sec4">
                            • ان استخدام البيانات المفتوحة في البوابة
                            الإلكترونية يعتبر إقراراً من المستخدم بالالتزام
                            بأحكام وشروط سياسة إعادة استخدام البيانات المفتوحة.{" "}
                            <br />
                            • يكون مستخدم البيانات المفتوحة مسؤولاً عن إعادة
                            استخدام البيانات في البوابة الإلكترونية للوزارة، ولا
                            يجب أن ينتج عن إعادة استخدام هذه البيانات أي أخطاء
                            تتعلق بمحتوى البيانات ومصدرها وتاريخها.
                            <br />• يجب أن تكون نتائج الدراسات التي يتم نشرها
                            خالية من الأخطاء التي تتعلق بصحة وسلامة ودقة
                            البيانات.
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                          <h1 className="heading5-main-sec">مسؤولية الوزارة</h1>
                          <p className="p-sec4">
                            تخلي وزارة الحج والعمرة مسؤوليتها عن أي ضرر أو سوء
                            استخدام يتعرض له المستخدم نتيجة استخدام هذه البيانات
                            المفتوحة على الموقع الرسمي للوزارة. كما تخلي الوزارة
                            مسؤوليتها تجاه مستخدمي هذه البيانات، وما قد يقع
                            عليهم من ضرر أو خسارة بسبب إعادة استخدامها.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card">
                      <h2 className="heading5-w-img">
                        <Image
                          src={img3}
                          alt="imge media center"
                          layout="fixed"
                          width=" 40px"
                          height="40px"
                        />
                        &nbsp; شروط إعادة الاستخدام
                      </h2>
                      <p>
                        • يجب على المستخدم عدم تحريف هذه البيانات أو مصدرها
                        <br />• يجب ‌ألا تستخدم هذه البيانات في أغراض سياسية أو
                        لدعم نشاط غير مشروع، أو إجرامي، أو عنصري، أو التأجيج، أو
                        التأثير السلبي في الثقافة، أو المساواة، أو التحريض، أو
                        أي نشاط غير نظامي أو مخالف لعادات المملكة وتقاليدها.
                        <br />• يجب عند استخدام هذه البيانات الإشارة إلى مصدرها
                        (البوابة الإلكترونية لوزارة الحج والعمرة).
                        <br />• يجب الإشارة إلى مصدر المعلومات التي تم إعادة
                        استخدامها عن طريق وضع رابط البوابة الإلكترونية للوزارة
                        للمحافظة على الملكية الفكرية للبيانات ومصداقيتها وصحة
                        مصدرها.
                      </p>
                    </div>
                  </div>
                  <div className="sec6">
                    <div className="card">
                      <h2 className="heading5-w-img">
                        <Image
                          src={img3}
                          alt="imge media center"
                          layout="fixed"
                          width=" 40px"
                          height="40px"
                        />
                        &nbsp; طريقة استخدام البيانات المفتوحة
                      </h2>
                      <p>
                        يتوفر في مكتبة البيانات المفتوحة العديد من صيغ الملفات
                        التي من الممكن استعراضها أو تحميلها، وقد تحتاج إلى تنصيب
                        بعض المنتجات حتى تتمكن من الاستفادة القصوى من تلك
                        البيانات . <br />
                        وفي ما يلي شرح لكل صيغة ملف وكيفية الاستفادة منه: <br />
                        <span>XLS:</span> هي ملفات تحتوي على جدول اكسل ، ويمكنك
                        استعراض هذه الجداول بتنصيب برنامج مستعرض اكسل مجانا{" "}
                        <br />
                        <span>CSV:</span> يمكنك فتح هذه الملفات بواسطة العديد من
                        الأدوات مثل مايكروسوفت اكسل ، المفكرة ، غيرها .
                      </p>
                    </div>
                  </div>
                  <div className="lib-sec">
                    <div className="row">
                      <div className="col-md-6 cardLib">
                        <div className="incardLib">
                          <div className="row">
                            <div className="col-md-2">
                              <Image
                                src={img5}
                                alt="imge media center"
                                layout="fixed"
                                width=" 60px"
                                height="60px"
                              />
                            </div>
                            <div className="col-md-10">
                              <div className="row justify-content-between align-items-center">
                                <div className="col-md-6">
                                  <h2 className="h-libSec">
                                    إحصائيات الحج خلال خمسة أعوام{" "}
                                  </h2>
                                </div>
                                <div className="col-md-5">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <h2 className="heading6-w-img">
                                        <Image
                                          src={img6}
                                          alt="imge media center"
                                          layout="fixed"
                                        />
                                        &nbsp;تحميل
                                      </h2>
                                    </div>
                                    <div className="col-md-6">
                                      <h2 className="heading6-w-img">
                                        <Image
                                          src={img7}
                                          alt="imge media center"
                                          layout="fixed"
                                        />
                                        &nbsp;طباعة
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>
                                {" "}
                                وفقً النتائج السجلية التابعة لوزارة الحج
                                والعمرة. لمعتمري الداخل والخارج
                              </p>
                              <p>
                                تاريخ التعديل <span>12/02/2020</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 cardLib">
                        <div className="incardLib">
                          <div className="row">
                            <div className="col-md-2">
                              <Image
                                src={img8}
                                alt="imge media center"
                                layout="fixed"
                                width=" 60px"
                                height="60px"
                              />
                            </div>
                            <div className="col-md-10">
                              <div className="row justify-content-between align-items-center">
                                <div className="col-md-6">
                                  <h2 className="h-libSec">
                                  عدد شركات ومؤسسات العمرة{" "}
                                  </h2>
                                </div>
                                <div className="col-md-5">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <h2 className="heading6-w-img">
                                        <Image
                                          src={img6}
                                          alt="imge media center"
                                          layout="fixed"
                                        />
                                        &nbsp;تحميل
                                      </h2>
                                    </div>
                                    <div className="col-md-6">
                                      <h2 className="heading6-w-img">
                                        <Image
                                          src={img7}
                                          alt="imge media center"
                                          layout="fixed"
                                        />
                                        &nbsp;طباعة
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>
                                {" "}
                                وفقً النتائج السجلية التابعة لوزارة الحج
                                والعمرة. لمعتمري الداخل والخارج
                              </p>
                              <p>
                                تاريخ التعديل <span>12/02/2020</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
