import React from "react";
import style from "./hero.module.css";
import { useNavigate } from "react-router-dom";
import MainBtn from "../../utilits/mainBtn/MainBtn";
const Hero = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className={`mb-5 ${style.mainDiv}`}>
      <video loop autoPlay className={style.video}>
        <source src={data.video} type="video/mp4"></source>
      </video>
      <div className="overlay">
        <div className={style.content}>
          <h2 className="fs-2 mb-4 text-white">{data.title}</h2>
          <p className="mb-3 text-white-50">{data.description}</p>
          <MainBtn action={() => navigate("/products")}>Shop Now</MainBtn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
