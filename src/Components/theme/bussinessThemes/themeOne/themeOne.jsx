import React from "react";
import style from "./themeone.module.css";
import avatar from "../../../../assets/pexels-photo-941693.jpeg";
import {
  AiFillMail,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  BsFillTelephoneOutboundFill,
  BsGlobe,
  BsSnapchat,
  BsTiktok,
  BsRobot,
} from "react-icons/bs";
import { MdLocationOn, MdOutlineSchool } from "react-icons/md";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";
import { TbBrandTinder } from "react-icons/tb";

const ThemeOne = ({
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
    <div className={`pb-3 pt-5 ${style.mainContainer}`}>
      <div className={`${style.imgContainer} mb-5`}>
        <div
          className={`${style.personalContent} d-flex flex-column align-items-center`}
        >
          <div className={style.profileContainer}>
            <img
              className={style.mainImg}
              alt="profile/img"
              src={photo ? URL.createObjectURL(photo) : avatar}
            />
          </div>
          <p className="fw-bold text-white fs-4">
            {!name && lang === "en" && "My Name"}
            {!name && lang === "ar" && "الأسم"}
            {name && name}
          </p>
          <p className={style.jobTitle}>
            {!job_title && lang === "en" && "My Job Title"}
            {!job_title && lang === "ar" && "المسمي الوظيفي"}
            {job_title && job_title}
          </p>

          <p className={style.jobTitle}>
            {!bio && lang === "en" && "My bio"}
            {!bio && lang === "ar" && "معلومات عني"}
            {bio && bio}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        <a
          href={linked_in ? linked_in : null}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <FaLinkedinIn className={` ${style.icon}`} />
        </a>
        <a
          href={instgram ? instgram : null}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <AiOutlineInstagram className={` ${style.icon}`} />
        </a>
        <a
          href={facebook ? facebook : null}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <FaFacebookF className={` ${style.icon}`} />
        </a>
        <a
          href={`https://wa.me/+20${whatsApp_number}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <FaWhatsapp className={` ${style.icon}`} />
        </a>
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <AiOutlineTwitter className={` ${style.icon}`} />
        </a>
        <a
          href={tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <BsTiktok className={` ${style.icon}`} />
        </a>
        <a
          href={snap}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <BsSnapchat className={` ${style.icon}`} />
        </a>
        <a
          href={pinterest}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <FaPinterestP className={` ${style.icon}`} />
        </a>
        <a
          href={school_account}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <MdOutlineSchool className={` ${style.icon}`} />
        </a>
        <a
          href={tender}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <TbBrandTinder className={` ${style.icon}`} />
        </a>
        <a
          href={Botim}
          target="_blank"
          rel="noopener noreferrer"
          className={style.box}
        >
          <BsRobot className={` ${style.icon}`} />
        </a>
        <a
          href={website ? website : null}
          target="_blank"
          rel="noreferrer"
          className={style.box}
        >
          <BsGlobe size={30} className={style.icon} />
        </a>
      </div>
      <div className={style.infoContainer}>
        <div className="row justify-content-center gap-3 mb-5">
          <div
            className={`col-5 ${style.mainBox} d-flex flex-column align-items-center justify-content-center p-3 gap-3`}
          >
            <div className={style.emailBox}>
              <AiFillMail size={30} className={style.emailIcon} />
            </div>
            <span className="text-white fw-bold">
              {!email && lang === "en" && "My Mail"}
              {!email && lang === "ar" && "البريد الإلكتروني"}
              {email && email}
            </span>
            <span className={style.emailTitle}>
              {!email && lang === "en" && "Email"}
              {!email && lang === "ar" && "البريد الإلكتروني"}
            </span>
          </div>
          <div
            className={`col-5 ${style.mainBox} d-flex flex-column align-items-center justify-content-center p-3 gap-3`}
          >
            <div className={style.phoneBox}>
              <BsFillTelephoneOutboundFill
                size={30}
                className={style.phoneIcon}
              />
            </div>
            {!personal_number && lang === "en" && (
              <span className="fw-bold text-white">my personal phone</span>
            )}
            {!personal_number && lang === "ar" && (
              <span className="fw-bold text-white">رقمي الشخصي</span>
            )}
            {personal_number && (
              <span className="fw-bold text-white">{personal_number}</span>
            )}

            <span className={style.emailTitle}>
              {lang === "en" ? "personal Number" : "الرقم الشخصي"}
            </span>
          </div>
        </div>
        <div className="row justify-content-center gap-3 mb-5">
          <div
            className={`col-5 ${style.mainBox} d-flex flex-column align-items-center justify-content-center p-3 gap-3`}
          >
            <div className={style.locationBox}>
              <MdLocationOn size={30} className={style.locationIcon} />
            </div>
            {!location && lang === "en" && (
              <span className="fw-bold text-white">my location</span>
            )}
            {!location && lang === "ar" && (
              <span className="fw-bold text-white">موقعي</span>
            )}
            {location && <span className="fw-bold text-white">{location}</span>}

            <span className={style.emailTitle}>
              {lang === "en" ? "Location" : "موقعي"}
            </span>
          </div>
          <div
            className={`col-5 ${style.mainBox} d-flex flex-column align-items-center justify-content-center p-3 gap-3`}
          >
            <div className={style.websiteBox}>
              <BsFillTelephoneOutboundFill
                size={30}
                className={style.phoneIcon}
              />
            </div>
            {!business_number && lang === "en" && (
              <span className="fw-bold text-white">my Bussiness Number</span>
            )}
            {!business_number && lang === "ar" && (
              <span className="fw-bold text-white">رقم العمل</span>
            )}
            {business_number && (
              <span className="fw-bold text-white">{business_number}</span>
            )}

            <span className={style.emailTitle}>
              {lang === "en" ? "business_number" : "رقم العمل"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeOne;
