import React from "react";
import style from "./themeThree.module.css";
import megz from "../../../../assets/megz.jpg";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillMail,
} from "react-icons/ai";
import { BsFillTelephoneOutboundFill, BsTiktok, BsRobot } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

import { TbBrandTwitter, TbBrandTinder } from "react-icons/tb";
import { RiLinkedinLine } from "react-icons/ri";
import { BsGlobe, BsSnapchat } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaPinterestP } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
const ThemeThree = ({
  name,
  personal_number,
  whatsApp_number,
  business_number,
  job_title,
  email,
  website,
  portfolio,
  facebook,
  instgram,
  linked_in,
  Botim,
  twitter,
  school_account,
  photo,
  lang,
  location,
  bio,
  tender,
  snap,
  tiktok,
  pinterest,
}) => {
  return (
    <div className={`pb-3 ${style.mainContainer}`}>
      <div className={style.imgContainer}>
        <img
          className={`img-fluid ${style.mainImg}`}
          src={photo ? URL.createObjectURL(photo) : megz}
          alt="megz/img"
          loading="lazy"
        />
        <div className={style.overlay}>
          <div className={style.infoContent}>
            <p className={`fw-bold fs-4 mb-1 ${style.title}`}>
              {!name && lang === "en" && "My Name"}
              {!name && lang === "ar" && "الأسم"}
              {name && name}
            </p>
            <p className={`${style.jobTitle} mb-4 text-uppercase`}>
              {!job_title && lang === "en" && "My Job Title"}
              {!job_title && lang === "ar" && "المسمي الوظيفي"}
              {job_title && job_title}
            </p>
            <p className={`${style.jobTitle} mb-4 text-uppercase`}>
              {!bio && lang === "en" && "My bio"}
              {!bio && lang === "ar" && "معلومات عني"}
              {job_title && job_title}
              {bio && bio}
            </p>
          </div>
        </div>
      </div>
      <div className={style.sectionContainer}>
        <div className={style.contactContainer}>
          <div
            className={`row pb-5 justify-content-center ${style.firstContainer}`}
          >
            <div className="col-6 d-flex flex-column justify-content-center align-items-center gap-3">
              <div className={`mx-auto ${style.personalBox}`}>
                <AiFillMail size={30} />
              </div>
              <span className=" fw-bold">
                {!email && lang === "en" && "My Mail"}
                {!email && lang === "ar" && "البريد الإلكتروني"}
                {email && email}
              </span>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center align-items-center gap-3">
              <div className={`mx-auto ${style.personalBox}`}>
                <BsFillTelephoneOutboundFill size={30} />
              </div>
              <span className=" fw-bold">
                {!personal_number && lang === "en" && "my personal number"}
                {!personal_number && lang === "ar" && "الرقم الشخصي"}
                {personal_number && personal_number}
              </span>
            </div>
          </div>
          <div className="pt-4 row justify-content-center">
            <div className="col-6 d-flex flex-column justify-content-center align-items-center gap-3">
              <div className={`mx-auto ${style.personalBox}`}>
                <GoLocation size={30} />
              </div>

              <span className=" fw-bold">
                {!location && lang === "en" && " My location"}
                {!location && lang === "ar" && "موقعي"}
                {location && location}
              </span>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center align-items-center gap-3">
              <div className={`mx-auto ${style.personalBox}`}>
                <BsGlobe size={30} />
              </div>
              <span className=" fw-bold">
                {!website && lang === "en" && "my Website"}
                {!website && lang === "ar" && "الموقع الشخصي"}
                {website && website}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <button className={` ${style.btn}`}>contact with us</button>
        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap my-3">
          <a
            href={linked_in ? linked_in : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinLine size={30} className={`${style.icon}`} />
          </a>
          <a
            href={instgram ? instgram : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size={30} className={` ${style.icon}`} />
          </a>
          <a
            href={facebook ? facebook : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook size={30} className={` ${style.icon}`} />
          </a>
          <a
            href={whatsApp_number ? `https://wa.me+20${whatsApp_number}` : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineWhatsApp size={30} className={` ${style.icon}`} />
          </a>
          <a
            href={twitter ? twitter : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandTwitter size={30} className={` ${style.icon}`} />
          </a>
          <a
            href={snap ? snap : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsSnapchat size={30} className={` ${style.icon}`} />
          </a>
          <a
            href={tender ? tender : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandTinder size={30} className={` ${style.icon}`} />
          </a>
          <a
            href={pinterest ? pinterest : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterestP size={30} className={` ${style.icon}`} />
          </a>
          <a
            href={tiktok ? tiktok : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTiktok size={30} className={` ${style.icon}`} />
          </a>
          <a
            href={Botim ? Botim : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsRobot size={30} className={` ${style.icon}`} />
          </a>
          <a
            href={school_account ? school_account : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineSchool size={30} className={` ${style.icon}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThemeThree;
