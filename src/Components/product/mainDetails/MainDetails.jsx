import React, { useState } from "react";
import style from "./mainDetails.module.css";
const MainDetails = ({ data }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <div className="container mt-5 pt-5">
      <div>
        <p
          className="text-white fw-bold text-uppercase fs-4 mb-5 text-center"
          data-aos="fade-down"
        >
          {data.title}
        </p>
        <div
          className="d-flex justify-content-center mb-5"
          data-aos="zoom-in-left"
          data-aos-delay="250"
        >
          <div className="text-center">
            <img
              src={
                data.images[selectedImg] ? data.images[selectedImg] : data.image
              }
              alt="product/img"
              loading="lazy"
              className={`mb-5 ${style.mainImg}`}
            />
            <div className="d-flex justify-content-center align-items-center gap-2">
              {data.images.map((item, index) => (
                <img
                  key={index}
                  className={style.subImg}
                  src={item}
                  alt=""
                  onClick={() => setSelectedImg(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
