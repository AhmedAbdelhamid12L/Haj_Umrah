import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import LogoImage from "../../public/im/image/logo.png"
import eyeIcon from "../../public/im/image/Vector-eye-navbar-edit.png"
import global from "../../public/im/image/Vector-global-navbar-edit.png"
import search from "../../public/im/image/Vector-search-navbar-edit.png"

export default function Navbar() {
  return (
    <Fragment>
      <header>
        <div className="head electronic-nav-edit ">
          <div className="firsto">
            <div id="mySidenavAll" className="sidenav-all">
              <div className="upper">
                <div className="first">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="بحث" />
                </div>
                <div className="second">
                  <Link
                    href="javascript:void(0)"
                    className="xButton"
                    onclick="closeNav()"
                  >
                    &times;
                  </Link>
                </div>
              </div>
              <div className="middle">
                <div className="div-1">
                  <i className="fa-solid fa-arrow-left"></i>
                  <Link className="mini-nav-link" href="index.html">
                    الرئيسية
                  </Link>
                </div>
                <div className="div-2">
                  <Link className="mini-nav-link" href="About.html">
                    عن الوزارة
                  </Link>
                </div>
                <div className="div-3">
                  <Link
                    className="mini-nav-link"
                    href="electronic-services.html"
                  >
                    الخدمات الإلكترونية
                  </Link>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="div-4">
                  <Link className="mini-nav-link" href="#">
                    تطبيقات
                  </Link>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="div-5">
                  <Link className="mini-nav-link" href="hajj_grand.html">
                    مصادر
                  </Link>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="div-6">
                  <Link className="mini-nav-link" href="mediacenter.html">
                    المركز الإعلامي
                  </Link>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="div-7">
                  <Link className="mini-nav-link" href="Contact.html">
                    تواصل معنا
                  </Link>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="div-8">
                  <Link className="mini-nav-link" href="About.html">
                    الشكاوى والإقتراحات
                  </Link>
                </div>
              </div>
              <div className="lower">
                <div className="div-lang">
                  <i className="fa-solid fa-globe"></i>
                  <p>اللغة</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="container-textd">
            <nav
              style={{ zIndex: "99999" }}
              className="navbar navbar-expand-lg navbar-dark bg-light"
            >
              <Link className="navbar-brand" href="index.html">
                <Image width="200" className="logo" src={LogoImage} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onclick="openNav()"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" href="index.html">
                      الرئيسية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="About.html">
                      عن الوزارة
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="electronic-services.html">
                      الخدمات الإلكترونية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      تطبيقات
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="hajj_grand.html">
                      مصادر
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="mediacenter.html">
                      المركز الإعلامي
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="Contact.html">
                      تواصل معنا
                    </Link>
                  </li>
                  <div className="navbar-icons" href="#">
                    <Image
                      src={eyeIcon}
                      alt="Eye icon"
                      srcset=""
                      width="20"
                      height="20"
                    />
                    <Image
                      src={global}
                      alt="Global icon"
                      srcset=""
                      width="20"
                      height="20"
                    />
                    <Image
                      src={search}
                      alt="Search icon"
                      srcset=""
                      width="20"
                      height="20"
                    />
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
