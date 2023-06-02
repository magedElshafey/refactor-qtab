import React from "react";
import style from "./MainBtn.module.css";
const MainBtn = ({ children, action }) => {
  return (
    <button className={style.btn} onClick={action}>
      {children}
    </button>
  );
};

export default MainBtn;
