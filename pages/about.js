import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import image1 from "../public/im/newIcons1/newAbout1/view.png";
import image2 from "../public/im/newIcons1/newAbout1/message.png";
import image3 from "../public/im/newIcons1/newAbout1/combine.png";


export default function About() {
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة -   أخبار الوزارة</title>
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

      <main dir="rtl" className="newAbout1" style={{overflowX:"hidden"}}>
        <FullHeader />
        <section >
          {/*  */}

          <section id="umra-section4">
            <div className="container-textd">
              <div className="row second-part">
                <div className="col-md-6 col-12">
                  <div className="div-first">
                    <div className="item">
                      <div className="sec-1">
                        <Image src={image1} width="100%" height="100%" />
                        <h5 className="card-title about">رؤيتنا</h5>
                      </div>
                      <div className="sec-2">
                        <p className="card-text text-muted">
                          ان تكون رحلة الحج والعمرة والزيارة مقننة وسهلة وميسرة
                          في جو من السكينة والطمأنينة لتبقي ذكري مميزة ورائعة في
                          ذاكرة الحاج والمعتمر والزائر تحقق له الرضا , وتجعله
                          سفيرا ينقل للعالم جهود المملكة في خدمة ضيوف الرحمن.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <div className="div-first">
                    <div className="item">
                      <div className="sec-1">
                        <Image src={image2} />
                        <h5 className="card-title about">رسالتنا</h5>
                      </div>

                      <div className="sec-2">
                        <p className="card-text text-muted">
                          تعمل وزارة الحج والعمرة في اداء مهامها بالتنسيق مع
                          الجهات الحكومية و الاهلية لتسيير اجراءات اداء المناسك
                          , وضبط وتقنين الخدمة من خلال تطوير اللانظمة وتوظيف
                          التقنية ورفع كفاءة العاملين في خدمة ضيوف الرحمن ,
                          واكمال البني التحتية بهدف توفير ضيافة دينية بمعايير
                          عالمية.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row lower-class">
              <div className="col-md-12 col-12">
                <div className="div-first">
                  <div className="card d-inline">
                    <div className="card-body">
                      <h5 className="card-title about">أهدافنا</h5>

                      <div className="items-cont">
                        <div className="row">
                          <div className="item col-xs-12 col-md-4">
                            <div className="item-inner">
                              <div className="upper">
                                <div className="upper-inner">
                                  <Image
                                    src={image3}
                                    className="image-1"
                                    alt="Family"
                                    srcset=""
                                  />
                                 
                                </div>
                              </div>
                              <div className="lower">
                                <p>
                                  العمل على الارتقاء بالخدمات المقدمة للحجاج
                                  والمعتمرين.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="item col-xs-12 col-md-4">
                            <div className="item-inner">
                              <div className="upper">
                              <div className="upper-inner">
                                  <Image
                                    src={image3}
                                    className="image-1"
                                    alt="Family"
                                    srcset=""
                                  />
                                 
                                </div>
                              </div>
                              <div className="lower">
                                <p>
                                  تطوير أعمال مهنة الطوافة ، الوكالة والدلالة ،
                                  وحج الداخل باستخدام أحدث وسائل التقنية .
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="item col-xs-12 col-md-4">
                            <div className="item-inner">
                              <div className="upper">
                              <div className="upper-inner">
                                  <Image
                                    src={image3}
                                    className="image-1"
                                    alt="Family"
                                    srcset=""
                                  />
                                 
                                </div>
                              </div>
                              <div className="lower">
                                <p>
                                  العمل على أن يكون الحج سهلاً وميسراً من خلال
                                  الجهود البشرية والتقنية المقدمة.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="item col-xs-12 col-md-4">
                            <div className="item-inner">
                              <div className="upper">
                              <div className="upper-inner">
                                  <Image
                                    src={image3}
                                    className="image-1"
                                    alt="Family"
                                    srcset=""
                                  />
                                 
                                </div>
                              </div>
                              <div className="lower">
                                <p>
                                  التنسيق مع كافة الجهات ذات الصلة لتيسير أداء
                                  الحجاج و المعتمرين و ​الزوار لمناسكهم.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="item col-xs-12 col-md-4">
                            <div className="item-inner">
                              <div className="upper">
                              <div className="upper-inner">
                                  <Image
                                    src={image3}
                                    className="image-1"
                                    alt="Family"
                                    srcset=""
                                  />
                                 
                                </div>
                              </div>
                              <div className="lower">
                                <p>
                                  الارتقاء بمهارات العاملين في الخدمة الميدانية
                                  لضمان خدمات متميزة للحجاج والمعتمرين ، باعتماد
                                  برامج تدريبية متميزة وفاعلة.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="item col-xs-12 col-md-4">
                            <div className="item-inner">
                              <div className="upper">
                              <div className="upper-inner">
                                  <Image
                                    src={image3}
                                    className="image-1"
                                    alt="Family"
                                    srcset=""
                                  />
                                 
                                </div>
                              </div>
                              <div className="lower">
                                <p>
                                  توحيد الجهود لتحفيز المواطن ليسهم بدوره ، ما
                                  وسعه ذلك ، في خدمة ضيوف الرحمن سواء مكلفاً أو
                                  متطوعاً.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="item col-xs-12 col-md-4">
                            <div className="item-inner">
                              <div className="upper">
                              <div className="upper-inner">
                                  <Image
                                    src={image3}
                                    className="image-1"
                                    alt="Family"
                                    srcset=""
                                  />
                                 
                                </div>
                              </div>
                              <div className="lower">
                                <p>
                                  توحيد الجهود لتحفيز المواطن ليسهم بدوره ، ما
                                  وسعه ذلك ، في خدمة ضيوف الرحمن سواء مكلفاً أو
                                  متطوعاً.
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
          </section>

          {/* <!-- cards --> */}

          {/* <!-- Question --> */}
          <div className="container-textd">
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
          </div>

          {/* <!-- Question --> */}

          {/*  */}
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
