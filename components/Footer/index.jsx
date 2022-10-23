import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <main>
        {/* Wide Footer  */}

        <footer
          id="liner"
          className="index-footer1 dark-wide-footer about-footer"
        >
          <div className="container-text">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 col-12 right-footer">
                <ul className="ul-footer">
                  <li className="list">
                    <a className="links_a"> تواصل معنا </a>
                  </li>
                  <li className="list">
                    <a className="links_a">سياسة الخصوصية </a>
                  </li>
                  <li className="list">
                    <a className="links_a"> تعريف ملفات الارتباط </a>
                  </li>
                  <li className="list">
                    <a className="links_a"> الأحكام والشروط </a>
                  </li>
                  <li className="list">
                    <a className="links_a"> خريطة الموقع </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 left-footer">
                <div className="left-footer-1">
                  <ul className="ul-footer L-left">
                    <li>
                      <a className="links_aicon" href="#">
                        {" "}
                        اتصل بنا:{" "}
                      </a>
                    </li>
                    <li>
                      <a className="links_aicon">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="links_aicon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="links_aicon"
                        target="_blank"
                        href="https://twitter.com/HajMinistry"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="links_aicon"
                        target="_blank"
                        href="https://youtube.com/channel/UCCm8-SFjGg7Fb13CQT1GFOg"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="left-footer-2">
                  <p className="footer-text">
                    حقوق النشر © 2022 جميع الحقوق محفوظة. وزارة الحج والعمرة
                  </p>
                  <li className="go-up">
                    <a className="links_aicon" href="#">
                      <label>العودة لأعلى</label>
                      <i className="fa-solid fa-circle-up"></i>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Min Footer  */}

        <footer className="section index-footer2">
          <div className="container-text">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 col-12 right-footer">
                <ul className="ul-footer">
                  <li className="list">
                    <a className="links_a"> تواصل معنا </a>
                  </li>
                  <li className="list">
                    <a className="links_a">سياسة الخصوصية </a>
                  </li>
                  <li className="list">
                    <a className="links_a"> تعريف ملفات الارتباط </a>
                  </li>
                  <li className="list">
                    <a className="links_a"> الأحكام والشروط </a>
                  </li>
                  <li className="list">
                    <a className="links_a"> خريطة الموقع </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 left-footer">
                <div className="left-footer-1">
                  <li>
                    <a className="contact-us-label" href="#">
                      اتصل بنا:
                    </a>
                  </li>

                  <ul className="ul-footer L-left">
                    <li>
                      <a className="links_aicon">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="links_aicon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="links_aicon"
                        target="_blank"
                        href="https://twitter.com/HajMinistry"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="links_aicon"
                        target="_blank"
                        href="https://youtube.com/channel/UCCm8-SFjGg7Fb13CQT1GFOg"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="left-footer-2">
                  <p className="footer-text">
                    حقوق النشر © 2022 جميع الحقوق محفوظة. وزارة الحج والعمرة
                  </p>
                  <li className="go-up">
                    <a className="links_aicon" href="#">
                      <label>العودة لأعلى</label>
                      <i className="fa-solid fa-circle-up"></i>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </Fragment>
  );
}
