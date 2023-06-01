import React, { useState } from "react";
import style from "./contact.module.css";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillYoutube, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp, BsSnapchat, BsTiktok } from "react-icons/bs";
import MainBtn from "../../utilits/mainBtn/MainBtn";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div
      data-aos-offset="100"
      data-aos-delay="300"
      data-aos="flip-left"
      id="contact"
      className={`py-5 ${style.mainContainer}`}
    >
      <div className="overlay">
        <h3
          className={`fs-2 text-uppercase py-2 ${style.contact} text-center text-white`}
        >
          contact us
        </h3>
        <div className="row pt-5 justify-content-center">
          <div className="col-10 d-flex align-items-center flex-column gap-2">
            <form className="col-12 col-md-6 mb-4 mb-md-0">
              <input
                className="inp mb-4"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="inp mb-4"
                type="email"
                placeholder="email"
              />
              <textarea
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Leavr a message"
                className={`${style.text}`}
              ></textarea>
              <div className="d-flex justify-content-center">
                <MainBtn>Submit</MainBtn>
              </div>
            </form>
            <p className="pb-5 pt-3 text-white d-flex flex-wrap align-items-center gap-2">
              <span className="fw-bold fs-3">follow us : </span>
              {data.twitter && (
                <a
                  rel="noreferrer"
                  className="px-2"
                  target="_blank"
                  href={data.twitter}
                >
                  <FaTwitter className="text-white" size={30} />
                </a>
              )}
              {data.facebook && (
                <a
                  rel="noreferrer"
                  className="px-2"
                  target="_blank"
                  href={data.facebook}
                >
                  <FaFacebook className="text-white" size={30} />
                </a>
              )}
              {data.youtube && (
                <a
                  rel="noreferrer"
                  className="px-2"
                  target="_blank"
                  href={data.youtube}
                >
                  <AiFillYoutube className="text-white" size={30} />
                </a>
              )}
              {data.whatsapp && (
                <a
                  rel="noreferrer"
                  className="px-2"
                  target="_blank"
                  href={`https://wa.me/+2${data.whatsapp}`}
                >
                  <BsWhatsapp className="text-white" size={30} />
                </a>
              )}
              {data.linkedin && (
                <a
                  rel="noreferrer"
                  className="px-2"
                  target="_blank"
                  href={data.linkedin}
                >
                  <AiFillLinkedin className="text-white" size={30} />
                </a>
              )}
              {data.snapchat && (
                <a
                  rel="noreferrer"
                  className="px-2"
                  target="_blank"
                  href={data.snapchat}
                >
                  <BsSnapchat className="text-white" size={30} />
                </a>
              )}
              {data.tiktok && (
                <a
                  rel="noreferrer"
                  className="px-2"
                  target="_blank"
                  href={data.tiktok}
                >
                  <BsTiktok className="text-white" size={30} />
                </a>
              )}
              {data.instagram && (
                <a
                  rel="noreferrer"
                  className="px-2"
                  target="_blank"
                  href={data.instagram}
                >
                  <AiFillInstagram className="text-white" size={30} />
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
/*
   
*/
