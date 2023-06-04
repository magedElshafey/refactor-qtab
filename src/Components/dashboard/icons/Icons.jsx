import React from "react";
import style from "./icons.module.css";
import { HiOutlineCursorClick } from "react-icons/hi";
import { GrShare } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
const Icons = ({ share, message, visits }) => {
  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <div
        className={`p-4 ${style.statesIcon} d-flex flex-column align-items-center `}
      >
        <HiOutlineCursorClick size={50} />

        <div className="m-0 p-0 d-flex flex-column align-items-center">
          <h2 className="m-0 p-0">{visits}</h2>
          <p className="m-0 p-0">زيارات</p>
        </div>
      </div>
      <div
        className={`p-4 ${style.statesIcon} d-flex flex-column align-items-center `}
      >
        <AiOutlineEye size={50} />

        <div className="m-0 p-0 d-flex flex-column align-items-center">
          <h2 className="m-0 p-0">{message}</h2>
          <p className="m-0 p-0">رسائل</p>
        </div>
      </div>
      <div
        className={`p-4 ${style.statesIcon} d-flex flex-column align-items-center `}
      >
        <GrShare size={50} />

        <div className="m-0 p-0 d-flex flex-column align-items-center">
          <h2 className="m-0 p-0">{share}</h2>
          <p className="m-0 p-0">مشاركات</p>
        </div>
      </div>
    </div>
  );
};

export default Icons;
