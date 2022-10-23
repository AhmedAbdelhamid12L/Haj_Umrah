import Image from "next/image";
import { Fragment, useState } from "react";
import image1 from "../../public/im/newIcons1/newServicesDetails1/icon1.svg";
import image2 from "../../public/im/newIcons1/newServicesDetails1/icon2.svg";
import image3 from "../../public/im/newIcons1/newServicesDetails1/icon3.svg";
import image4 from "../../public/im/newIcons1/newServicesDetails1/icon4.svg";
import image5 from "../../public/im/newIcons1/newServicesDetails1/icon5.svg";
import image6 from "../../public/im/newIcons1/newServicesDetails1/icon6.svg";

export default function ServicesDetailsComp(props) {
  const data = props.ele;

  let x = data.id;
  let im;
  if (x == 1) {
    im = image1;
  } else if (x == 2) {
    im = image2;
  } else if (x == 3) {
    im = image3;
  } else if (x == 4) {
    im = image4;
  } else if (x == 5) {
    im = image5;
  } else if (x == 6) {
    im = image6;
  }

  return (
    <Fragment>
      <section className="services-details-comp col-xs-12 col-md-4 ">
        <Image src={im} width="30" height="30" layout="fixed" />
        <h6>{data.mainTitle} </h6>
        <div className="last-part" dangerouslySetInnerHTML={{ __html: data.secondTitle }} />
        {/* {data.secondTitle}  */}
      </section>
    </Fragment>
  );
}
