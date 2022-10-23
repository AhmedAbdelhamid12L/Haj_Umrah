import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import sec1Image1Main from "../public/im/newIcons1/newNewsDetails1/main.png";
import sec1Image1Right from "../public/im/newIcons1/newNewsDetails1/PathRight.png";
import sec1Image1Left from "../public/im/newIcons1/newNewsDetails1/PathLeft.png";
import sec1Image1Date from "../public/im/newIcons1/newNewsDetails1/calender.png";
import sec1Image1Facebook from "../public/im/newIcons1/newNewsDetails1/facebook.png";
import sec1Image1Twitter from "../public/im/newIcons1/newNewsDetails1/twitter.png";
import sec1Image1LinkedIn from "../public/im/newIcons1/newNewsDetails1/Linkedin.png";
import sec1Image1Slider1 from "../public/im/newIcons1/newNewsDetails1/side1.png";
import sec1Image1Slider2 from "../public/im/newIcons1/newNewsDetails1/side2.png";
import sec1Image1Slider3 from "../public/im/newIcons1/newNewsDetails1/side3.png";

export default function NewsDetails() {
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة - تفاصيل الأخبار</title>
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

      <main dir="rtl" className="newNewsDetails1">
        <FullHeader />
        <section className="">
          <section class="one">
            <div class="row">
              <div class="part-1 col-xs-12">
                <div class="image-cont">
                  {/* <img
                    src="newIcons1/newNewsDetails1/main.png"
                    alt="Main Image - Ihram"
                    srcset=""
                  /> */}
                  <Image src={sec1Image1Main} width={1300} height={415} />
                  <div class="slide-sec">
                    <div class="right">
                      <div class="item-right-arrow">
                        {/* <img
                          src="newIcons1/newNewsDetails1/PathRight.png"
                          alt="Right Arrow"
                          srcset=""
                        /> */}

                        <Image src={sec1Image1Right} width={18} height={18} />
                      </div>
                    </div>
                    <div class="middle">
                      <div class="dot active"></div>
                      <div class="dot"></div>
                      <div class="dot"></div>
                      <div class="dot"></div>
                      <div class="dot"></div>
                      <div class="dot"></div>
                    </div>
                    <div class="left">
                      <div class="item-left-arrow">
                        {/* <img
                          src="newIcons1/newNewsDetails1/PathLeft.png"
                          alt="Left Arrow"
                          srcset=""
                        /> */}
                        <Image src={sec1Image1Left} width={18} height={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="part-2 col-xs-12">
                {/* <img src="newIcons1/newNewsDetails1/calender.png" alt="Date" /> */}
                <Image src={sec1Image1Date} width={18} height={18} />
                <p class="date-p">الجمعة ٢٠ محرم ١٤٤٣</p>
              </div>
            </div>
          </section>

          <section class="two">
            <div class="row">
              <div class="right col-xs-12 col-md-8">
                <div class="part-1">
                  <p>
                    وقعت مؤسسة نسك للحج والعمرة، مساء أمس الأربعاء، اتفاقية
                    تطوير وتعاون في مجال المنح مع مؤسسة سليمان الراجحي الخيرية.
                    ووقع الاتفاقية نائب رئيس مؤسسة نسك معالي الدكتور عبد الفتاح
                    مشاط، والدكتور خالد بن عبد الرحمن الراجحي الرئيس التنفيذي
                    لمؤسسة سليمان الراجحي الخيرية. وتهدف الاتفاقية إلى تطوير
                    أعمال مؤسسة نسك في بناء أنظمة الحوكمة والإلتزام عن طريق مركز
                    خدمات المانحين التابع لمؤسسة سليمان الراجحي الخيرية. ويهدف
                    مركز خدمات المانحين بمؤسسة سليمان الراجحي الخيرية إلى نشر
                    ثقافة المنح والمانحين بمناطق المملكة، وإعداد الدراسات
                    العلمية والميدانية عن المنح في المملكة، ودراسة وإبراز
                    الممارسات الناجحة في مجال المنح، والمساهمة في تحقيق مستهدفات
                    رؤية 2030. وتسعى مؤسسة نسك للحج والعمرة وبإشراف من وزارة
                    الحج والعمرة، إلى المساهمة في دعم وتعزيز أثر البرامج المقدمة
                    للحجاج والمعتمرين، وإثراء تجربتهم، إضافة إلى تمكين منظمات
                    القطاع غير الربحي المتخصص في مجال الحج والعمرة وخدمة ضيوف
                    الرحمن، ودعم الأبحاث والدراسات في تحسين خدمات الحج والعمرة
                    وخدمات ضيوف الرحمن، ودعم وتيسير البرامج الهادفة لتيسير أداء
                    المناسك بيسر وسهولة، وتفعيل مشاركة القطاع الحكومي والخاص
                    وغير الربحي في تحسين وتجويد خدمات الحج والعمرة وفق رؤية
                    2030.
                  </p>
                  <p>
                    وقعت مؤسسة نسك للحج والعمرة، مساء أمس الأربعاء، اتفاقية
                    تطوير وتعاون في مجال المنح مع مؤسسة سليمان الراجحي الخيرية.
                    ووقع الاتفاقية نائب رئيس مؤسسة نسك معالي الدكتور عبد الفتاح
                    مشاط، والدكتور خالد بن عبد الرحمن الراجحي الرئيس التنفيذي
                    لمؤسسة سليمان الراجحي الخيرية. وتهدف الاتفاقية إلى تطوير
                    أعمال مؤسسة نسك في بناء أنظمة الحوكمة والإلتزام عن طريق مركز
                    خدمات المانحين التابع لمؤسسة سليمان الراجحي الخيرية. ويهدف
                    مركز خدمات المانحين بمؤسسة سليمان الراجحي الخيرية إلى نشر
                    ثقافة المنح والمانحين بمناطق المملكة، وإعداد الدراسات
                    العلمية والميدانية عن المنح في المملكة، ودراسة وإبراز
                    الممارسات الناجحة في مجال المنح، والمساهمة في تحقيق مستهدفات
                    رؤية 2030.
                  </p>
                  <p>
                    وقعت مؤسسة نسك للحج والعمرة، مساء أمس الأربعاء، اتفاقية
                    تطوير وتعاون في مجال المنح مع مؤسسة سليمان الراجحي الخيرية.
                    ووقع الاتفاقية نائب رئيس مؤسسة نسك معالي الدكتور عبد الفتاح
                    مشاط، والدكتور خالد بن عبد الرحمن الراجحي الرئيس التنفيذي
                    لمؤسسة سليمان الراجحي الخيرية. وتهدف الاتفاقية إلى تطوير
                    أعمال مؤسسة نسك في بناء أنظمة الحوكمة والإلتزام عن طريق مركز
                    خدمات المانحين التابع لمؤسسة سليمان الراجحي الخيرية.
                  </p>
                </div>
                <div class="part-2">
                  <i>مشاركة عبر</i>
                  <div class="icon-cont">
                    {/* <img
                      src="newIcons1/newNewsDetails1/twitter.png"
                      alt="Twitter"
                    /> */}
                    <Image src={sec1Image1Facebook} width={15} height={15} />
                  </div>
                  <div class="icon-cont">
                    {/* <img
                      src="newIcons1/newNewsDetails1/facebook.png"
                      alt="Facebook"
                    /> */}
                    <Image src={sec1Image1Twitter} width={15} height={15} />
                  </div>
                  <div class="icon-cont">
                    {/* <img
                      src="newIcons1/newNewsDetails1/Linkedin.png"
                      alt="Linked In"
                    /> */}
                    <Image src={sec1Image1LinkedIn} width={15} height={15} />
                  </div>
                </div>

                <div class="part-3">
                  <section class="container-textd">
                    <div class="border_linebox">
                      <div class="row">
                        <div class="col-md-5 col-xs-12">
                          <h3 class="about">
                            هل استفدت من المعلومات المقدمة في هذه الصفحة؟
                          </h3>
                        </div>
                        <div class="col-md-7 col-xs-12">
                          <div class="btNflex">
                            <button href="#" class="btn btn_color">
                              نعم، استفدت
                            </button>
                            <button href="#" class="btn btn solid">
                              لا، لم أستفد
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <div class="left col-xs-12 col-md-4">
                <h6>أخبار مشابهة</h6>

                <div class="items-cont">
                  <div class="item item-line-under">
                    <div class="item-inner">
                      <div class="row">
                        <div class="part-1 col-xs-12 col-md-4 second-change-class">
                          <div class="image-cont">
                            {/* <img
                              src="newIcons1/newNewsDetails1/side1.png"
                              alt="Hajj & Omrah"
                              srcset=""
                            /> */}
                            <Image
                              src={sec1Image1Slider1}
                              width={105}
                              height={108}
                            />
                          </div>
                        </div>
                        <div class="part-2 col-xs-12 col-md-8 third-change-class">
                          <div class="one">
                            <div class="right">
                              <p>العمرة</p>
                            </div>
                            <div class="left">
                              <Image
                                src={sec1Image1Date}
                                width={12}
                                height={12}
                              />

                              <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                            </div>
                          </div>
                          <div class="two">
                            <p>
                              العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                              تأشيرة عمرة 1444 هجرية
                            </p>
                          </div>
                          <div class="three class-of-show-text">
                            <p>
                              بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                              إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                              جميع
                              <br />
                              دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                            </p>
                          </div>
                          <div class="four">
                            <a href="#">اقرأ المزيد</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="item item-line-under">
                    <div class="item-inner">
                      <div class="row">
                        <div class="part-1 col-xs-12 col-md-4 second-change-class">
                          <div class="image-cont">
                            {/* <img
                              src="newIcons1/newNewsDetails1/side2.png"
                              alt="Hajj & Omrah"
                              srcset=""
                            /> */}
                            <Image
                              src={sec1Image1Slider2}
                              width={105}
                              height={108}
                            />
                          </div>
                        </div>
                        <div class="part-2 col-xs-12 col-md-8 third-change-class">
                          <div class="one">
                            <div class="right">
                              <p>العمرة</p>
                            </div>
                            <div class="left">
                              <Image
                                src={sec1Image1Date}
                                width={12}
                                height={12}
                              />
                              <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                            </div>
                          </div>
                          <div class="two">
                            <p>
                              العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                              تأشيرة عمرة 1444 هجرية
                            </p>
                          </div>
                          <div class="three class-of-show-text">
                            <p>
                              بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                              إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                              جميع
                              <br />
                              دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                            </p>
                          </div>
                          <div class="four">
                            <a href="#">اقرأ المزيد</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="item-inner">
                      <div class="row">
                        <div class="part-1 col-xs-12 col-md-4 second-change-class">
                          <div class="image-cont">
                            {/* <img
                              src="newIcons1/newNewsDetails1/side3.png"
                              alt="Hajj & Omrah"
                              srcset=""
                            /> */}

                            <Image
                              src={sec1Image1Slider3}
                              width={105}
                              height={108}
                            />
                          </div>
                        </div>
                        <div class="part-2 col-xs-12 col-md-8 third-change-class">
                          <div class="one">
                            <div class="right">
                              <p>العمرة</p>
                            </div>
                            <div class="left">
                              {/* <img
                                src="newIcons1/newNews1/calender.png"
                                alt=""
                                srcset=""
                              /> */}
                              <Image
                                src={sec1Image1Date}
                                width={12}
                                height={12}
                              />
                              <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                            </div>
                          </div>
                          <div class="two">
                            <p>
                              العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                              تأشيرة عمرة 1444 هجرية
                            </p>
                          </div>
                          <div class="three class-of-show-text">
                            <p>
                              بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                              إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                              جميع
                              <br />
                              دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                            </p>
                          </div>
                          <div class="four">
                            <a href="#">اقرأ المزيد</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button class="show-more-here">
                  <a href="#">عرض المزيد</a>
                </button>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
