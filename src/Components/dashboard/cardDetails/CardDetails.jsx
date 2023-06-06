import React, { useState } from "react";
import style from "./cardDetails.module.css";
import {
  AiOutlineShareAlt,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineGlobal,
} from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import DeleteCardBtn from "../../utils/deleteCardBtn/DeleteCardBtn";
import Share from "../Share/Share";
const CardDetails = ({ data }) => {
  const [showShareModal, setShowShareModel] = useState(false);
  return (
    <div className="position-relative">
      <div className={` ${style.cardContainer}`}>
        <div className={`text-white ${style.shareContainer}`}>
          <AiOutlineShareAlt
            onClick={() => setShowShareModel(true)}
            size={30}
          />
        </div>
        <div className={`${style.imgContainer} p-3`}>
          <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
            <div className={style.user}>
              <AiOutlineUser size={50} />
            </div>
            <span className="fs-5">{data.name}</span>
            <p>{data.job_title}</p>
          </div>
        </div>
        <div className="bg-light p-3">
          <div className="mb-3 d-flex align-items-center gap-4">
            <AiOutlineMail size={30} />
            <div className={`w-100 ${style.textContainer}`}>
              <span className="d-block">{data.email}</span>
              <span className={`d-block mb-3 ${style.smallTxt}`}>Email</span>
            </div>
          </div>
          <div className="mb-3 d-flex align-items-center gap-4">
            <AiOutlineMobile size={30} />
            <div className={`w-100 ${style.textContainer}`}>
              <span className="d-block">{data.personal_number}</span>
              <span className={`d-block mb-3 ${style.smallTxt}`}>mobile</span>
            </div>
          </div>
          <div className="mb-3 d-flex align-items-center gap-4">
            <AiOutlineGlobal size={30} />
            <div className={`w-100 ${style.textContainer}`}>
              <span className="d-block">{data.website}</span>
              <span className={`d-block mb-3 ${style.smallTxt}`}>website</span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <button className={`${style.btn} ${style.view}`}>
              <HashLink
                className={style.link}
                to={`/dashboard/cards/${data.id}`}
              >
                View
              </HashLink>
            </button>
            <button className={`${style.btn} ${style.edit}`}>
              <HashLink
                className={style.link}
                to={`/card/bussiness/edit/${data.id}`}
              >
                Edit
              </HashLink>
            </button>
            <DeleteCardBtn item={data} />
          </div>
        </div>
      </div>
      <Share
        title="check out this website"
        url={`${window.location.href}/${data.qrcode}/${data.email}`}
        showShareModal={showShareModal}
        setShowShareModel={setShowShareModel}
      />
    </div>
  );
};

export default CardDetails;
