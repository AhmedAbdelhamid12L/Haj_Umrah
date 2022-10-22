import Image from "next/image";
import { Fragment } from "react";
// import icon1 from "../../public/im/newIcons1/newAwarness1/Play.png";
// import icon2 from "../../public/im/newIcons1/newAwarness1/Vector.png";
// import icon3 from "../../public/im/newIcons1/newAwarness1/Sound.png";
// import icon4 from "../../public/im/newIcons1/newAwarness1/Share.png";

export default function AwarnessComp1({ el }) {
  const images = {
    icon1: "/../../public/im/newIcons1/newAwarness1/Play.png",
    icon2: "/../../public/im/newIcons1/newAwarness1/Vector.png",
    icon3: "/../../public/im/newIcons1/newAwarness1/Sound.png",
    icon4: "/../../public/im/newIcons1/newAwarness1/Share.png",
  };
  return (
    <Fragment>
      <div className="col-md-6 one-main-cover">
        <div className="one-main-part">
          <div className="row">
            <div className="col-md-4">
              <div>
                <Image
                  className="one-main-img"
                  src={el.imagee}
                  alt="دليل الاحرام"
                  width="134px"
                  height="165px"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <h4 className="one-main-heading1">{el.mainTitle}</h4>
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
                      {/* <Image
                        src={images.icon1}
                        alt="play"
                        width="10px"
                        height="10px"
                      /> */}
                      <i class="fa-solid fa-play"></i>
                    </div>
                    <div className="one-main-Cheading3">
                      <h6 className="one-main-heading3">تشغيل</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <div className="row-one-main">
                    <div className="one-main-icon">
                      <Image
                        src={images.icon2}
                        alt="read"
                        width="10px"
                        height="10px"
                      />
                      <i class="fa-brands fa-readme"></i>
                    </div>
                    <div className="one-main-Cheading3">
                      <h6 className="one-main-heading3">قراءة</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <div className="row-one-main">
                    <div className="one-main-icon">
                      <Image
                        src={images.icon3}
                        alt="sound"
                        width="10px"
                        height="10px"
                      />
                      <i class="fa-solid fa-volume-off"></i>
                    </div>
                    <div className="one-main-Cheading3">
                      <h6 className="one-main-heading3">استماع</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <div className="row-one-main">
                    <div className="one-main-icon">
                      <i class="fa-solid fa-arrow-down"></i>
                    </div>
                    <div className="one-main-Cheading3">
                      <h6 className="one-main-heading3">تحميل</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-6">
                  <div className="row-one-main">
                    <div className="one-main-icon">
                      <Image
                        src={images.icon4}
                        alt="share"
                        width="10px"
                        height="10px"
                      />
                      <i class="fa-solid fa-share-nodes"></i>
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
    </Fragment>
  );
}
