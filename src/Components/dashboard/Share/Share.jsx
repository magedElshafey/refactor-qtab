import React, { useRef, useEffect } from "react";
import style from "./share.module.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Share = ({ title, url, showShareModal, setShowShareModel }) => {
  const modalRef = useRef();
  const handleShowModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowShareModel(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleShowModal);
    return () => {
      document.removeEventListener("mousedown", handleShowModal);
    };
  }, []);
  return (
    <div
      className={`${style.overlay} ${
        showShareModal ? style.showOverlay : style.hideOverlay
      }`}
    >
      <div
        ref={modalRef}
        className={`${style.modal} ${showShareModal ? style.show : style.hide}`}
      >
        <FacebookShareButton className="mx-3" url={url} quote={title}>
          <FaFacebook size={40} className={style.face} />
        </FacebookShareButton>
        <TwitterShareButton className="mx-3" url={url} quote={title}>
          <FaTwitter size={40} className={style.twitter} />
        </TwitterShareButton>
        <WhatsappShareButton className="mx-3" url={url} quote={title}>
          <FaWhatsapp className={style.whats} size={40} />
        </WhatsappShareButton>
        <AiOutlineClose
          onClick={() => setShowShareModel(false)}
          className={style.closeIcon}
          size={20}
        />
      </div>
    </div>
  );
};

export default Share;
