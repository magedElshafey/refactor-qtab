import React from "react";
import style from "./feat.module.css";
const Feat = ({ data }) => {
  return (
    <div
      className="container mb-5"
      data-aos="fade-up"
      data-aos-offset="150"
      id="feat"
    >
      <h3 className="text-center text-white fs-3 mb-4">{data.title}</h3>
      <p
        data-aos="fade-down"
        data-aos-delay="500"
        className="text-center text-white mb-5"
      >
        {data.description}
      </p>
      <div className="row  justify-content-center">
        <div className={`${style.imgContainer} col-12 col-md-6 mb-5 mb-md-0`}>
          <img
            className={style.mainImg}
            src={data.image}
            alt="featuers/img"
            data-aos="zoom-in"
            loading="lazy"
          />
        </div>
        <ul className="col-12 col-md-6 mb-5 mb-md-0">
          {data.boxes.map((item, index) => (
            <li
              key={index}
              className="d-flex mb-5  gap-3"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay={item.delay}
            >
              <img src={item.icon} className={style.icon} alt="" />
              <div>
                <p className={`text-white fw-bold fs-5 mb-3 ${style.title}`}>
                  {item.title}
                </p>
                <p className="text-white">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feat;
