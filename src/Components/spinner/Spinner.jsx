import React from "react";
import style from "./spinner.module.css";
const Spinner = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className={style.dots}></div>
    </div>
  );
};

export default Spinner;
