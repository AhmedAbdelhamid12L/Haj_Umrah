import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/Footer";
import FullHeader from "../components/Full-header";
import sec1Image1 from "../public/im/newIcons1/newContactus/mail.png";
import sec1Image2 from "../public/im/newIcons1/newContactus/phone.png";
import sec2image1 from "../public//im/newIcons1/newContactus/Frame1.png"
import sec2image2 from "../public//im/newIcons1/newContactus/Frame2.png"
import sec2image3 from "../public//im/newIcons1/newContactus/Frame3.png"
import mainImage1 from "../public//im/newIcons1/newContactus/background.png"

export default function ContactUs() {
  return (
    <Fragment>
      <Head>
        <title>الحج والعمرة - تواصل معنا</title>
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

      <main dir="rtl" className="newContactUs1">
        <FullHeader />
        <section className="">
          <section className="sec-1">
            <div className="row items-cont">
              <div className="item item-1 col-xs-12 col-md-6 col-lg-3">
                <div className="item-inner">
                  <div className="col-xs-3 image-cont">
                    <Image src={sec1Image1} width={57} height={57} />
                  </div>
                  <div className="col-xs-9 text-cont">
                    <h6>البريد الإلكتروني</h6>
                    <h6>hajcc@haj.gov.sa</h6>
                  </div>
                </div>
              </div>
              <div className="item item-2 col-xs-12 col-md-6 col-lg-3">
                <div className="item-inner">
                  <div className="col-xs-3 image-cont">
                    <Image src={sec1Image2} width={57} height={57} />
                  </div>
                  <div className="col-xs-9 text-cont">
                    <h6>الرقم الموحد</h6>
                    <h6>+966148300069</h6>
                  </div>
                </div>
              </div>
              <div className="item item-3 col-xs-12 col-md-6 col-lg-3">
                <div className="item-inner">
                  <div className="col-xs-3 image-cont">
                    <Image src={sec1Image2} width={57} height={57} />
                  </div>
                  <div className="col-xs-9 text-cont">
                    <h6>المدينة المنورة</h6>
                    <h6>+966148300069</h6>
                  </div>
                </div>
              </div>
              <div className="item item-4 col-xs-12 col-md-6 col-lg-3">
                <div className="item-inner">
                  <div className="col-xs-3 image-cont">
                    <Image src={sec1Image2} width={57} height={57} />
                  </div>
                  <div className="col-xs-9 text-cont">
                    <h6>مكة المكرمة</h6>
                    <h6>+966125649999</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="sec-2">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-6 right">
                  <div className="inner-right">
                    <form>
                      <label for="mail">كيف يمكننا مساعدتك؟</label>
                      <input
                        placeholder="*البريد الإلكتروني"
                        required
                        id="mail"
                      />
                      <input placeholder="*الاسم" required />
                      <input placeholder="*الجوال" required />
                      <select id="message" name="">
                        <option value="one" disabled selected>
                          مجال الرسالة
                        </option>
                        <option value="one">one</option>
                        <option value="two">two</option>
                      </select>
                      <input placeholder="الرسالة" />

                      <button type="submit">إرسال</button>
                    </form>
                  </div>
                </div>

                <div className="col-xs-12 col-md-6 left">
                  <div className="inner-left">
                    <h4>مراكز عناية</h4>
                    <p>قم باختيار مركز عناية لمعرفة تفاصيل التواصل</p>
                    <div className="btns-cont">
                      <button
                        id="btn-1"
                        className="btn-left-side active-btn-left-side"
                        name="1"
                      >
                        المسفلة
                      </button>
                      <button id="btn-2" className="btn-left-side" name="2">
                        الحجون
                      </button>
                      <button id="btn-3" className="btn-left-side" name="3">
                        مطار الملك عبدالعزيز الدولي
                      </button>
                      <button id="btn-4" className="btn-left-side" name="4">
                        مطار الأميرمحمد بن عبدالعزيز الدولي
                      </button>
                      <button id="btn-5" name="5">
                        شرق المسجد النبوي الشريف
                      </button>
                    </div>

                    <div className="items-cont">
                      <div className="hide-sec-1 choose-sec active-left-sec">
                        <div className="item-1 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                            <Image src={sec2image1} width={60} height={60} />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>الخدمات المقدمة</h6>
                              <p>خدمات الأفراد - خدمات الأعمال</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-2 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                            <Image src={sec2image2} width={60} height={60} />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>ساعات العمل</h6>
                              <p>من 8 صباحاً حتى 10مساءً</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-3 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                            <Image src={sec2image3} width={60} height={60} />
                            </div>
                          
                            <div className="col-xs-9 text-cont">
                              <h6>العنوان</h6>
                              <p>شارع إبراهيم الخليل، المسفلة، مكة المكرمة</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hide-sec-4 choose-sec">
                        <div className="item-1 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                            <Image src={sec2image1} width={60} height={60} />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>الخدمات المقدمة</h6>
                              <p>خدمات الأفراد - خدمات الأعمال</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-2 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                            <Image src={sec2image2} width={60} height={60} />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>ساعات العمل</h6>
                              <p>من 8 صباحاً حتى 10مساءً</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-3 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                            <Image src={sec2image3} width={60} height={60} />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>العنوان</h6>
                              <p>طريق المدينة المنورة، الجحون، مكة المكرمة</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hide-sec-3 choose-sec">
                        <div className="item-1 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                              <img src="newIcons1/newContactus/Frame1.png" />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>الخدمات المقدمة</h6>
                              <p>خدمات الأفراد - خدمات الأعمال</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-2 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                              <img src="newIcons1/newContactus/Frame2.png" />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>ساعات العمل</h6>
                              <p>من 8 صباحاً حتى 10مساءً</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-3 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                              <img src="newIcons1/newContactus/Frame3.png" />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>العنوان</h6>
                              <p>مطار الملك عبدالعزيز الدولي - صالة رقم 1</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hide-sec-4 choose-sec">
                        <div className="item-1 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                              <img src="newIcons1/newContactus/Frame1.png" />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>الخدمات المقدمة</h6>
                              <p>خدمات الأفراد - خدمات الأعمال</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-2 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                              <img src="newIcons1/newContactus/Frame2.png" />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>ساعات العمل</h6>
                              <p>من 8 صباحاً حتى 10مساءً</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-3 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                              <img src="newIcons1/newContactus/Frame3.png" />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>العنوان</h6>
                              <p>طريق الملك فيصل، الدائري الأول</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hide-sec-5 choose-sec">
                        <div className="item-1 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                              <img src="newIcons1/newContactus/Frame1.png" />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>الخدمات المقدمة</h6>
                              <p>خدمات الأفراد - خدمات الأعمال</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-2 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                              <img src="newIcons1/newContactus/Frame2.png" />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>ساعات العمل</h6>
                              <p>من 8 صباحاً حتى 10مساءً</p>
                            </div>
                          </div>
                        </div>
                        <div className="item-3 item">
                          <div className="item-inner">
                            <div className="col-xs-3 image-cont">
                              <img src="newIcons1/newContactus/Frame3.png" />
                            </div>
                            <div className="col-xs-9 text-cont">
                              <h6>العنوان</h6>
                              <p>طريق الملك فيصل، الدائري الأول</p>
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

          <section className="sec-3">
            <div className="container">
              <div className="row">
                <h2>جدنا على الخريطة</h2>

                <div className="btns-cont">
                  <button className="btn-1 active">مواقعنا</button>
                  <button className="btn-2">مراكز عناية</button>
                </div>

                <div className="image-cont image-1">
                  <Image
                    src={mainImage1}
                    width={1140}
                    height={420}
                  />
                  <div className="dots-cont">
                    <div className="item item-1">
                      <div className="upper">
                        <p className="1">وزارة الحج والعمرة</p>
                        <p className="2">مكة المكرمة</p>

                        <p className="3">هاتف:0117858351</p>
                        <p className="4">عناية:0125649701</p>
                      </div>
                      <div className="dot">
                        <div className="inner-dot"></div>
                      </div>
                    </div>

                    <div className="item item-2">
                      <div className="upper">
                        <p className="1">وزارة الحج والعمرة</p>
                        <p className="2">مكة المكرمة</p>
                        <p className="3">هاتف:0117858351</p>
                        <p className="4">عناية:0125649701</p>
                      </div>
                      <div className="dot">
                        <div className="inner-dot"></div>
                      </div>
                    </div>

                    <div className="item item-3">
                      <div className="upper">
                        <p className="1">وزارة الحج والعمرة</p>
                        <p className="2">مكة المكرمة</p>
                        <p className="3">هاتف:0117858351</p>
                        <p className="4">عناية:0125649701</p>
                      </div>
                      <div className="dot">
                        <div className="inner-dot"></div>
                      </div>
                    </div>

                    <div className="item item-4">
                      <div className="upper">
                        <p className="1">وزارة الحج والعمرة</p>
                        <p className="2">مكة المكرمة</p>
                        <p className="3">هاتف:0117858351</p>
                        <p className="4">عناية:0125649701</p>
                      </div>
                      <div className="dot">
                        <div className="inner-dot"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="image-cont image-2 d-none">
                  <img
                    src="newIcons1/newContactus/background.png"
                    alt="map"
                    srcset=""
                  />
                  <div className="dots-cont">
                    <div className="item item-1">
                      <div className="upper">
                        <p className="1"></p>
                        <p className="2"></p>
                      </div>
                      <div className="dot">
                        <div className="inner-dot"></div>
                      </div>
                    </div>

                    <div className="item item-2">
                      <div className="upper">
                        <p className="1"></p>
                        <p className="2"></p>
                      </div>
                      <div className="dot">
                        <div className="inner-dot"></div>
                      </div>
                    </div>

                    <div className="item item-3">
                      <div className="upper">
                        <p className="1"></p>
                        <p className="2"></p>
                      </div>
                      <div className="dot">
                        <div className="inner-dot"></div>
                      </div>
                    </div>

                    <div className="item item-4">
                      <div className="upper">
                        <p className="1"></p>
                        <p className="2"></p>
                      </div>
                      <div className="dot">
                        <div className="inner-dot"></div>
                      </div>
                    </div>

                    <div className="item item-5">
                      <div className="upper">
                        <p className="1"></p>
                        <p className="2"></p>
                      </div>
                      <div className="dot">
                        <div className="inner-dot"></div>
                      </div>
                    </div>
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
