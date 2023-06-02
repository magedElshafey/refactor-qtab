import React from "react";
import style from "./about.module.css";
import MainBtn from "../../utils/mainBtn/MainBtn";
import { HashLink } from "react-router-hash-link";
const About = ({ data }) => {
  return (
    <div
      id="about"
      data-aos="fade-down"
      data-aos-offset="150"
      className="container pb-5"
    >
      <div className="row justify-content-between align-items-center">
        <div className="text-white col-12 col-md-5 mb-4 mb-md-0">
          <h4 className="fs-5 mb-4">{data.title}</h4>
          <p className="mb-3">{data.description}</p>
          <MainBtn>
            <HashLink className="link" to="/#contact">
              Contact us
            </HashLink>
          </MainBtn>
        </div>
        <div className={`${style.imgContainer} col-12 col-md-7 mb-4 mb-md-0 `}>
          <img
            src={data.image}
            alt=""
            className={`${style.mainImg}`}
            data-aos="zoom-in"
            data-aos-delay="400"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
