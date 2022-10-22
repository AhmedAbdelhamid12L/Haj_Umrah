import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import image1 from "../public/im/newIcons1/newAbout1/view.png";
import image2 from "../public/im/newIcons1/newAbout1/message.png";
import image3 from "../public/im/newIcons1/newAbout1/combine.png";
import AwarnessComp1 from "../components/AwranessComp1";

export default function Awarness() {
  const awarnessData = [
    {
      imagee: "/../public/im/newIcons1/newAwarness1/Frame1000003744.png",
      mainTitle: "دليل خدمات المسجد النبوي",
    },
    {
      imagee: "/../public/im/newIcons1/newAwarness1/Frame1000003913.png",
      mainTitle: "دليل خدمات المسجد النبوي",
    },
    {
      imagee: "/../public/im/newIcons1/newAwarness1/Frame1000003912.png",
      mainTitle: "دليل خدمات المسجد النبوي",
    },
    {
      imagee: "/../public/im/newIcons1/newAwarness1/Frame1000003916.png",
      mainTitle: "دليل خدمات المسجد النبوي",
    },
    {
      imagee: "/../public/im/newIcons1/newAwarness1/Frame1000003914.png",
      mainTitle: "دليل خدمات المسجد النبوي",
    },
    {
      imagee: "/../public/im/newIcons1/newAwarness1/Frame1000003744.png",
      mainTitle: "دليل خدمات المسجد النبوي",
    },

    {
      imagee: "/../public/im/newIcons1/newAwarness1/Frame1000003915.png",
      mainTitle: "دليل خدمات المسجد النبوي",
    },

    {
      imagee: "/../public/im/newIcons1/newAwarness1/Frame1000003744.png",
      mainTitle: "دليل خدمات المسجد النبوي",
    },
  ];
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة - الأدلة التوعوية </title>
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

      <main dir="rtl" className="newAwarness1">
        <FullHeader />
        <section>
          <section className="one">
            <div className="row justify-content-between">
              <div className="col-md-2 one-header-right">
                <div className="row justify-content-between">
                  <h5 className="col-2 one-heading1">بحث</h5>
                  <div className="col-10">
                    <input
                      type="text"
                      className="search_input"
                      placeholder="بحث عن خدمة"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 one-header-left">
                <div className="row justify-content-between">
                  <h5 className="col-7 one-heading2">تصنيف الخدمات</h5>
                  <div className="col-5">
                    <select className="select_input" name="" id="">
                      <option value="">الكل</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              {awarnessData.map((el, index) => {
                return <AwarnessComp1 key={index} el={el} />;
              })}
              {/* <div className="col-md-6 one-main-cover">
                <div className="one-main-part">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <img
                          className="one-main-img"
                          src="./newIcons1/newAwarness1/Frame 1000003744.png"
                          alt="دليل الاحرام"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h4 className="one-main-heading1">
                          دليل خدمات المسجد النبوى
                        </h4>
                        <h6 className="one-main-heading2">
                          دليل زوار وزائرات المسجد النبوى
                        </h6>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <div className="row one-main-use">
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Play.png"
                                alt="play"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تشغيل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Vector.png"
                                alt="read"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">قراءة</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Sound.png"
                                alt="sound"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">استماع</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">^</div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تحميل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Share.png"
                                alt="share"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">مشاركة</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 one-main-cover">
                <div className="one-main-part">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <img
                          className="one-main-img"
                          src="./newIcons1/newAwarness1/Frame 1000003913.png"
                          alt="دليل التوعية الصحية"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h4 className="one-main-heading1">دليل التوعية الصحية </h4>
                        <h6 className="one-main-heading2">
                          دليل زوار وزائرات المسجد النبوى
                        </h6>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <div className="row one-main-use">
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Play.png"
                                alt="play"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تشغيل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Vector.png"
                                alt="read"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">قراءة</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Sound.png"
                                alt="sound"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">استماع</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">^</div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تحميل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Share.png"
                                alt="share"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">مشاركة</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 one-main-cover">
                <div className="one-main-part">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <img
                          className="one-main-img"
                          src="./newIcons1/newAwarness1/Frame 1000003912.png"
                          alt="دليل المسجد النبوى"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h4 className="one-main-heading1">
                          دليل المسجد النبوى التوعوى
                        </h4>
                        <h6 className="one-main-heading2">
                          دليل زوار وزائرات المسجد النبوى
                        </h6>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <div className="row one-main-use">
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Play.png"
                                alt="play"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تشغيل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Vector.png"
                                alt="read"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">قراءة</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Sound.png"
                                alt="sound"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">استماع</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">^</div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تحميل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Share.png"
                                alt="share"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">مشاركة</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 one-main-cover">
                <div className="one-main-part">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <img
                          className="one-main-img"
                          src="./newIcons1/newAwarness1/Frame 1000003916.png"
                          alt="دليل مكة"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h4 className="one-main-heading1">
                          دليل معالم مكة التوعوى
                        </h4>
                        <h6 className="one-main-heading2">
                          دليل زوار وزائرات المسجد النبوى
                        </h6>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <div className="row one-main-use">
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Play.png"
                                alt="play"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تشغيل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Vector.png"
                                alt="read"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">قراءة</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Sound.png"
                                alt="sound"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">استماع</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">^</div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تحميل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Share.png"
                                alt="share"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">مشاركة</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 one-main-cover">
                <div className="one-main-part">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <img
                          className="one-main-img"
                          src="./newIcons1/newAwarness1/Frame 1000003914.png"
                          alt="دليل الجمرات"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h4 className="one-main-heading1">دليل الجمرات التوعوى</h4>
                        <h6 className="one-main-heading2">
                          دليل زوار وزائرات المسجد النبوى
                        </h6>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <div className="row one-main-use">
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Play.png"
                                alt="play"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تشغيل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Vector.png"
                                alt="read"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">قراءة</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Sound.png"
                                alt="sound"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">استماع</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">^</div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تحميل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Share.png"
                                alt="share"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">مشاركة</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 one-main-cover">
                <div className="one-main-part">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <img
                          className="one-main-img"
                          src="./newIcons1/newAwarness1/Frame 1000003744.png"
                          alt="دليل عرفة"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h4 className="one-main-heading1">دليل يوم عرفة التوعوى</h4>
                        <h6 className="one-main-heading2">
                          دليل زوار وزائرات المسجد النبوى
                        </h6>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <div className="row one-main-use">
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Play.png"
                                alt="play"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تشغيل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Vector.png"
                                alt="read"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">قراءة</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Sound.png"
                                alt="sound"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">استماع</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">^</div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تحميل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Share.png"
                                alt="share"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">مشاركة</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 one-main-cover">
                <div className="one-main-part">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <img
                          className="one-main-img"
                          src="./newIcons1/newAwarness1/Frame 1000003915.png"
                          alt="دليل منى"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h4 className="one-main-heading1">دليل منى التوعوى</h4>
                        <h6 className="one-main-heading2">
                          دليل زوار وزائرات المسجد النبوى
                        </h6>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <div className="row one-main-use">
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Play.png"
                                alt="play"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تشغيل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Vector.png"
                                alt="read"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">قراءة</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Sound.png"
                                alt="sound"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">استماع</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">^</div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تحميل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Share.png"
                                alt="share"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">مشاركة</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 one-main-cover">
                <div className="one-main-part">
                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <img
                          className="one-main-img"
                          src="./newIcons1/newAwarness1/Frame 1000003744.png"
                          alt="دليل الاحرام"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <h4 className="one-main-heading1">
                          دليل خدمات المسجد النبوى
                        </h4>
                        <h6 className="one-main-heading2">
                          دليل زوار وزائرات المسجد النبوى
                        </h6>
                      </div>
                      <br />
                      <br />
                      <hr />
                      <div className="row one-main-use">
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Play.png"
                                alt="play"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تشغيل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Vector.png"
                                alt="read"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">قراءة</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Sound.png"
                                alt="sound"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">استماع</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">^</div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">تحميل</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-6">
                          <div className="row-one-main">
                            <div className="one-main-icon">
                              <img
                                src="./newIcons1/newAwarness1/Share.png"
                                alt="share"
                              />
                            </div>
                            <div className="one-main-Cheading3">
                              <h6 className="one-main-heading3">مشاركة</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
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
