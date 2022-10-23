import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import sec1Image1 from "../public/im/newIcons1/newNews1/net.png";
import sec1Image2 from "../public/im/newIcons1/newNews1/vert.png";
import sec2image1 from "../public//im/newIcons1/newNews1/main1.png";
import sec2image2 from "../public//im/newIcons1/newNews1/main2.png";
import sec2image3 from "../public//im/newIcons1/newNews1/main3.png";
import sec2image4 from "../public//im/newIcons1/newNews1/main4.png";


export default function News() {
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة - الأخبار</title>
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

      <main dir="rtl" className="newNews1">
        <FullHeader />
        <section className="">
          <section className="category-sec">
            <div className="container-textd">
              <div className="part-1">
                <label for="show">عرض</label>
                <select id="show">
                  <option value="All">الكل</option>
                  <option value="one">واحد</option>
                  <option value="two">اثنان</option>
                  <option value="three">ثلاثة</option>
                </select>
              </div>

              <div className="part-2">
                <label for="show-with">عرض حسب</label>
                <select id="show-with">
                  <option value="All">الأحدث</option>
                  <option value="one">الأقدم</option>
                  <option value="two">الاسم</option>
                </select>
              </div>
              <div className="part-3">
                <i className="net-show" onclick="netChange()">
                  {/* <img src="newIcons1/newNews1/net.png" alt="Net" /> */}
                  <Image src={sec1Image1} width={24} height={24} />
                </i>
                <i className="vertical-show" onclick="verticalChange()">
                  {/* <img src="newIcons1/newNews1/vert.png" alt="Vert" /> */}
                  <Image src={sec1Image2} width={24} height={24} />
                </i>
              </div>
            </div>
          </section>

          <section className="main-sec">
            <div className="container-textd">
              <div className="row">
                <div className="item col-xs-12 col-md-3 first-change-className">
                  <div className="item-inner">
                    <div className="row">
                      <div className="part-1 col-xs-12 second-change-className">
                        <div className="image-cont">
                          <Image src={sec2image1} width={310} height={180} />
                        </div>
                      </div>
                      <div className="part-2 col-xs-12 third-change-className">
                        <div className="one">
                          <div className="right">
                            <p>العمرة</p>
                          </div>
                          <div className="left">
                            <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                          </div>
                        </div>
                        <div className="two">
                          <p>
                            العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                            تأشيرة عمرة 1444 هجرية
                          </p>
                        </div>
                        <div className="three className-of-show-text">
                          <p>
                            بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                            إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                            جميع
                            <br />
                            دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                          </p>
                        </div>
                        <div className="four">
                          <a href="#">اقرأ المزيد</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-xs-12 col-md-3 first-change-className">
                  <div className="item-inner">
                    <div className="row">
                      <div className="part-1 col-xs-12 second-change-className">
                        <div className="image-cont">
                          {/* <img
                            src="newIcons1/newNews1/main2.png"
                            alt=""
                            srcset=""
                          /> */}
                          <Image src={sec2image2} width={310} height={180} />
                        </div>
                      </div>
                      <div className="part-2 col-xs-12 third-change-className">
                        <div className="one">
                          <div className="right">
                            <p>العمرة</p>
                          </div>
                          <div className="left">
                            {/* <img
                              src="newIcons1/newNews1/calender.png"
                              alt=""
                              srcset=""
                            /> */}

                            <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                          </div>
                        </div>
                        <div className="two">
                          <p>
                            العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                            تأشيرة عمرة 1444 هجرية
                          </p>
                        </div>
                        <div className="three className-of-show-text">
                          <p>
                            بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                            إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                            جميع
                            <br />
                            دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                          </p>
                        </div>
                        <div className="four">
                          <a href="#">اقرأ المزيد</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-xs-12 col-md-3 first-change-className">
                  <div className="item-inner">
                    <div className="row">
                      <div className="part-1 col-xs-12 second-change-className">
                        <div className="image-cont">
                          <Image src={sec2image3} width={310} height={180} />
                        </div>
                      </div>
                      <div className="part-2 col-xs-12 third-change-className">
                        <div className="one">
                          <div className="right">
                            <p>العمرة</p>
                          </div>
                          <div className="left">
                            <img
                              src="newIcons1/newNews1/calender.png"
                              alt=""
                              srcset=""
                            />
                            <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                          </div>
                        </div>
                        <div className="two">
                          <p>
                            العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                            تأشيرة عمرة 1444 هجرية
                          </p>
                        </div>
                        <div className="three className-of-show-text">
                          <p>
                            بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                            إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                            جميع
                            <br />
                            دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                          </p>
                        </div>
                        <div className="four">
                          <a href="#">اقرأ المزيد</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-xs-12 col-md-3 first-change-className">
                  <div className="item-inner">
                    <div className="row">
                      <div className="part-1 col-xs-12 second-change-className">
                        <div className="image-cont">
                          <Image src={sec2image4} width={310} height={180} />
                        </div>
                      </div>
                      <div className="part-2 col-xs-12 third-change-className">
                        <div className="one">
                          <div className="right">
                            <p>العمرة</p>
                          </div>
                          <div className="left">
                            <img
                              src="newIcons1/newNews1/calender.png"
                              alt=""
                              srcset=""
                            />
                            <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                          </div>
                        </div>
                        <div className="two">
                          <p>
                            العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                            تأشيرة عمرة 1444 هجرية
                          </p>
                        </div>
                        <div className="three className-of-show-text">
                          <p>
                            بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                            إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                            جميع
                            <br />
                            دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                          </p>
                        </div>
                        <div className="four">
                          <a href="#">اقرأ المزيد</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-xs-12 col-md-3 first-change-className">
                  <div className="item-inner">
                    <div className="row">
                      <div className="part-1 col-xs-12 second-change-className">
                        <div className="image-cont">
                          <Image src={sec2image1} width={310} height={180} />
                        </div>
                      </div>
                      <div className="part-2 col-xs-12 third-change-className">
                        <div className="one">
                          <div className="right">
                            <p>العمرة</p>
                          </div>
                          <div className="left">
                            <img
                              src="newIcons1/newNews1/calender.png"
                              alt=""
                              srcset=""
                            />
                            <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                          </div>
                        </div>
                        <div className="two">
                          <p>
                            العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                            تأشيرة عمرة 1444 هجرية
                          </p>
                        </div>
                        <div className="three className-of-show-text">
                          <p>
                            بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                            إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                            جميع
                            <br />
                            دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                          </p>
                        </div>
                        <div className="four">
                          <a href="#">اقرأ المزيد</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-xs-12 col-md-3 first-change-className">
                  <div className="item-inner">
                    <div className="row">
                      <div className="part-1 col-xs-12 second-change-className">
                        <div className="image-cont">
                          <Image src={sec2image2} width={310} height={180} />
                        </div>
                      </div>
                      <div className="part-2 col-xs-12 third-change-className">
                        <div className="one">
                          <div className="right">
                            <p>العمرة</p>
                          </div>
                          <div className="left">
                            <img
                              src="newIcons1/newNews1/calender.png"
                              alt=""
                              srcset=""
                            />
                            <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                          </div>
                        </div>
                        <div className="two">
                          <p>
                            العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                            تأشيرة عمرة 1444 هجرية
                          </p>
                        </div>
                        <div className="three className-of-show-text">
                          <p>
                            بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                            إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                            جميع
                            <br />
                            دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                          </p>
                        </div>
                        <div className="four">
                          <a href="#">اقرأ المزيد</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-xs-12 col-md-3 first-change-className">
                  <div className="item-inner">
                    <div className="row">
                      <div className="part-1 col-xs-12 second-change-className">
                        <div className="image-cont">
                          <Image src={sec2image3} width={310} height={180} />
                        </div>
                      </div>
                      <div className="part-2 col-xs-12 third-change-className">
                        <div className="one">
                          <div className="right">
                            <p>العمرة</p>
                          </div>
                          <div className="left">
                            <img
                              src="newIcons1/newNews1/calender.png"
                              alt=""
                              srcset=""
                            />
                            <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                          </div>
                        </div>
                        <div className="two">
                          <p>
                            العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                            تأشيرة عمرة 1444 هجرية
                          </p>
                        </div>
                        <div className="three className-of-show-text">
                          <p>
                            بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                            إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                            جميع
                            <br />
                            دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                          </p>
                        </div>
                        <div className="four">
                          <a href="#">اقرأ المزيد</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-xs-12 col-md-3 first-change-className">
                  <div className="item-inner">
                    <div className="row">
                      <div className="part-1 col-xs-12 second-change-className">
                        <div className="image-cont">
                          <Image src={sec2image4} width={310} height={180} />
                        </div>
                      </div>
                      <div className="part-2 col-xs-12 third-change-className">
                        <div className="one">
                          <div className="right">
                            <p>العمرة</p>
                          </div>
                          <div className="left">
                            <img
                              src="newIcons1/newNews1/calender.png"
                              alt=""
                              srcset=""
                            />
                            <p>الجمعة ٢٠ محرم ١٤٤٣</p>
                          </div>
                        </div>
                        <div className="two">
                          <p>
                            العمرة أول محرم.. ننشر المستندات المطلوبة لاستخراج
                            تأشيرة عمرة 1444 هجرية
                          </p>
                        </div>
                        <div className="three className-of-show-text">
                          <p>
                            بدأت وزارة الحج والعمرة السعودية في استقبال طلبات
                            إصدار تأشيرات العُمرة للقادمين من خارج المملكة من
                            جميع
                            <br />
                            دول العالم، لعام 1444 هجرية، اعتبارًا من الخميس..
                          </p>
                        </div>
                        <div className="four">
                          <a href="#">اقرأ المزيد</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Pagination Section --> */}
          <section className="section-5">
            <div className="container">
              <div className="pagination">
                <div className="one">
                  <button>الصفحة السابقة</button>
                </div>
                <div className="two">
                  <button className="current">1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button className="empty-btn">..</button>
                  <button>10</button>
                </div>
                <div className="three">
                  <button className="current">الصفحة التالية</button>
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
