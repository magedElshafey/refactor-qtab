import React from "react";
import style from "./hero.module.css";
import { useNavigate } from "react-router-dom";
import MainBtn from "../../utils/mainBtn/MainBtn";
import heroVideo from "../../../assets/heroTwo.mp4";
const Hero = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className={`mb-5 ${style.mainDiv}`}>
      <video
        src={heroVideo}
        type="video/mp4"
        loop
        autoPlay={true}
        className={style.video}
      />

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
