import React from "react";
import style from "./themeTwo.module.css";
import avatar from "../../../../assets/pexels-photo-941693.jpeg";
import {
  AiFillMail,
  AiOutlineWhatsApp,
  AiOutlineShareAlt,
} from "react-icons/ai";
import {
  BsFillTelephoneOutboundFill,
  BsSnapchat,
  BsTiktok,
  BsGlobe,
  BsRobot,
} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { RxInstagramLogo } from "react-icons/rx";
import { CiTwitter } from "react-icons/ci";
import { TbBrandTinder } from "react-icons/tb";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
const ThemeTwo = ({
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
    <div className={style.mainContainer}>
      <div className={style.imgContainer}>
        <img
          className={style.mainImg}
          src="https://img.freepik.com/free-photo/gray-concrete-wall_53876-88973.jpg?w=826&t=st=1683120758~exp=1683121358~hmac=bae8376428a1173b5360dbb63082bccebcf11979cd361ec91fbd833a69e30649"
          alt="img"
          loading="lazy"
        />
        <div className={style.overlay}>
          <div
            className={`d-flex flex-column align-items-center justify-content-center ${style.textContent}`}
          >
            <img
              src={photo ? URL.createObjectURL(photo) : avatar}
              className={`mb-3 ${style.avImg}`}
              alt=""
            />
            <p className="fw-bold mb-1 fs-5 text-white">
              {!name && lang === "en" && "My Name"}
              {!name && lang === "ar" && "الأسم"}
              {name && name}
            </p>
            <p className="text-white">
              {!job_title && lang === "en" && "My Job Title"}
              {!job_title && lang === "ar" && "المسمي الوظيفي"}
              {job_title && job_title}
            </p>
            <p className="text-white">{bio === "" ? "My Job bio" : bio}</p>
            <div className="w-100 d-flex flex-wrap justify-content-center gap-1   align-items-center ">
              <p className={style.secondbtn}>
                {!location && lang === "en" && "My Location : "}
                {!job_title && lang === "ar" && "موقعي : "}
                {location}
              </p>

              <p className={style.secondbtn}>
                {!location && lang === "en" && "Bussiness Number :"}
                {!job_title && lang === "ar" && "رقم العمل : "}
                {business_number}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${style.newsocialContainer}`}>
        <div
          className={`${style.socialWraper} d-flex gap-4 flex-wrap justify-content-center p-3`}
        >
          <a
            href={instgram ? instgram : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxInstagramLogo size={35} className={`${style.icon} text-white`} />
          </a>
          <a
            href={facebook ? facebook : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook size={35} className={`${style.icon}  text-white`} />
          </a>
          <a
            href={twitter ? twitter : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiTwitter size={35} className={`${style.icon}  text-white`} />
          </a>
          <a
            href={linked_in ? linked_in : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={35} className={`${style.icon}  text-white`} />
          </a>
          <a href={snap} target="_blank" rel="noopener noreferrer">
            <BsSnapchat size={35} className={`${style.icon}  text-white`} />
          </a>
          <a href={tiktok} target="_blank" rel="noopener noreferrer">
            <BsTiktok size={35} className={`${style.icon}  text-white`} />
          </a>

          <a href={pinterest} target="_blank" rel="noopener noreferrer">
            <FaPinterestP size={35} className={`${style.icon}  text-white`} />
          </a>
          <a href={tender} target="_blank" rel="noopener noreferrer">
            <TbBrandTinder size={35} className={`${style.icon}  text-white`} />
          </a>
          <a href={whatsApp_number} target="_blank" rel="noopener noreferrer">
            <AiOutlineWhatsApp
              size={35}
              className={`${style.icon}  text-white`}
            />
          </a>
          <a href={school_account} target="_blank" rel="noopener noreferrer">
            <MdOutlineSchool
              size={35}
              className={`${style.icon}  text-white`}
            />
            <a href={Botim} target="_blank" rel="noopener noreferrer">
              <BsRobot size={25} className={`${style.icon}  text-white`} />
            </a>
          </a>
        </div>
      </div>
      <div className={`${style.infoContainer}`}>
        <div className="p-3 d-flex flex-wrap justify-content-center gap-5">
          <a
            href={email === "" ? "" : `mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail size={35} className={`${style.icon} text-white`} />
          </a>

          <a
            href={personal_number === "" ? "" : `tel:${personal_number}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillTelephoneOutboundFill
              size={35}
              className={`${style.icon}  text-white`}
            />
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <BsGlobe size={35} className={`${style.icon}  text-white`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThemeTwo;
