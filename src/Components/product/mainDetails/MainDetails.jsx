import React, { useState } from "react";
import style from "./mainDetails.module.css";
import AddToCartBtn from "../../utils/addToCartBtn/AddToCartBtn";
const MainDetails = ({ data }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <div className="container mt-5 pt-5">
      <div>
        <p
          className="text-white fw-bold text-uppercase fs-4 mb-3 text-center"
          data-aos="fade-down"
        >
          {data?.title}
        </p>
        <div
          className="d-flex justify-content-center mb-5"
          data-aos="zoom-in-left"
          data-aos-delay="250"
        >
          <div className="text-center">
            <img
              src={
                data?.images[selectedImg]
                  ? data?.images[selectedImg]
                  : data?.image
              }
              alt="product/img"
              loading="lazy"
              className={`mb-5 ${style.mainImg}`}
            />
            <div className="d-flex mb-4 justify-content-center align-items-center gap-2">
              {data?.images.map((item, index) => (
                <img
                  key={index}
                  className={style.subImg}
                  src={item}
                  alt="products/img"
                  loading="lazy"
                  onClick={() => setSelectedImg(index)}
                />
              ))}
            </div>

            <p className="text-white m-0 p-0  text-center fs-4">
              {data?.price} L.E
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <AddToCartBtn item={data} />
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
