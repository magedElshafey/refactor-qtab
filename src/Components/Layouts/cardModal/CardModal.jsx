import React, { useRef, useEffect, useState } from "react";
import style from "./cardModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../../Redux/Cards";
import { AiOutlineCloseSquare } from "react-icons/ai";
import MainBtn from "../../utils/mainBtn/MainBtn";
import { useNavigate } from "react-router-dom";
function validateLang(v) {
  if (v.trim() === "") {
    return "Lang is Required";
  }
  return "";
}
function validateTheme(v) {
  if (v.trim() === "") {
    return "Lang is Required";
  }
  return "";
}
const CardModal = () => {
  const [lang, setLang] = useState("");
  const [type, setType] = useState("");
  const [langError, setLangError] = useState("");
  const [typeError, setTypeError] = useState("");
  const navigate = useNavigate();
  const handleChangeLang = (e) => {
    setLang(e.target.value);
    setLangError(validateLang(e.target.value));
    window.localStorage.setItem("lang", JSON.stringify(e.target.value));
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
    setTypeError(validateTheme(e.target.value));
  };
  const { modalIsOpen } = useSelector((state) => state.Cards);
  const dispatch = useDispatch();
  const modalRef = useRef();
  const handleHideModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleHideModal);
    return () => {
      document.removeEventListener("mousedown", handleHideModal);
    };
  }, []);
  const handleClick = () => {
    if (typeError || langError) {
      return;
    } else {
      navigate(`/card/${type}/${lang}`);
      dispatch(closeModal());
    }
  };
  return (
    <div
      className={`${style.overlay} ${
        modalIsOpen ? style.showOverlay : style.hideOverLay
      }`}
    >
      <div
        ref={modalRef}
        className={`${style.modal} ${modalIsOpen ? style.show : style.hide}`}
      >
        <AiOutlineCloseSquare
          size={20}
          className={style.closeIcon}
          onClick={() => dispatch(closeModal())}
        />
        <div className="mb-4">
          <label htmlFor="lang" className="label d-block mb-1">
            Language
          </label>
          <select onChange={handleChangeLang} className="inp" htmlFor="lang">
            <option value="">choose your card lang</option>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
          <p className="my-2 error">{langError}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="label d-block mb-1">
            card Type
          </label>
          <select onChange={handleChangeType} className="inp" htmlFor="lang">
            <option value="">choose your card type</option>
            <option value="bussienss">Bussienss Card</option>
            <option value="car">Car Sticker</option>
          </select>
          <p className="my-2 error">{typeError}</p>
        </div>
        <div className="d-flex justify-content-center pb-2">
          <MainBtn action={handleClick}>Next</MainBtn>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
