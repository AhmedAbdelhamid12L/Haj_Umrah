import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Navbar from "../Navbar";
import icon1 from "../../public/im/newIcons1/newAbout1/Shape.png";
import icon2 from "../../public/im/newIcons1/newAbout1/Fill1.png";
import icon3 from "../../public/im/newIcons1/newAbout1/Text_Size.png";
import icon4 from "../../public/im/newIcons1//newAbout1/Fill1.png";
import icon5 from "../../public/im/newIcons1/newAbout1/Vector.png";
import icon6 from "../../public/im/newIcons1/newAbout1/Vector2.png";
import Image from "next/image";
import header_info from "../../Info/header_info/header_info";
import { useRouter } from "next/router";

export default function FullHeader() {
  let router = useRouter();
  const [nameOfTheRoute, setnameOfTheRoute] = useState("");

  let pathName = router.asPath.split("/")[1];

  useEffect(() => {
    if (pathName.includes("librarydetails")) {
      setnameOfTheRoute(header_info.libraryDetails);
    } else if (pathName.includes("library")) {
      setnameOfTheRoute(header_info.library);
    } else if (pathName.includes("about")) {
      setnameOfTheRoute(header_info.newsPage);
    } else if (pathName.includes("servicesdetails")) {
      setnameOfTheRoute(header_info.servicesdetails);
    } else if (pathName.includes("services")) {
      setnameOfTheRoute(header_info.services);
    } else if (pathName.includes("openresources")) {
      setnameOfTheRoute(header_info.openResources);
    } else if (pathName.includes("contactus")) {
      setnameOfTheRoute(header_info.contactus);
    } else if (pathName.includes("newsdetails")) {
      setnameOfTheRoute(header_info.newsdetails);
    } else if (pathName.includes("news")) {
      setnameOfTheRoute(header_info.news);
    } else if (pathName.includes("awarness")) {
      setnameOfTheRoute(header_info.awarness);
    }
  }, [pathName]);

  return (
    <Fragment>
      <Navbar />
      <main>
        <section className="newNews1">
          <div className="bg-mediacenter about-us-title-modify">
            <div className="container">
              <div className="media_breadcrumb">
                <nav aria-label="breadcrumb">
                  <div className="row">
                    <div className="right-side col-xs-12 col-md-6">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a className="a_bracd" href="index.html">
                            <i className="fa fa-home"></i>{" "}
                            {nameOfTheRoute.titleOne}
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active about-us-title-2"
                          aria-current="page"
                        >
                          {nameOfTheRoute.titleTwo}
                        </li>
                      </ol>
                      <label className="title_breadcrumb">
                        {nameOfTheRoute.titleThree}
                      </label>
                    </div>
                    <div className="left-side col-xs-12 col-md-6">
                      <div className="items-cont">
                        <div className="item">
                          <Image src={icon1} alt="" srcset="" />
                          <Image src={icon2} alt="" srcset="" />
                        </div>
                        <div className="item">
                          <Image src={icon3} alt="" srcset="" />
                          <Image src={icon4} alt="" srcset="" />
                        </div>
                        <div className="item">
                          <Image src={icon5} alt="" srcset="" />
                        </div>
                        <div className="item">
                          <Image src={icon6} alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
