import React from "react";
import style from "./btns.module.css";
import whats from "../../assets/icons8-whatsapp-48.png";
const Btns = () => {
  return (
    <div>
      <div className={style.whatsContainer}>
        <a target="_blank" href="https://wa.me/+201022153359">
          <img src={whats} alt="whats/img" />
        </a>
      </div>
      <div className={style.box}>
        <a href="/#contact" className={style.cont}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Btns;
