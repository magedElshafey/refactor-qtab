import React from "react";
import MainBtn from "../../utils/mainBtn/MainBtn";

const BussinessForm = ({ lang }) => {
  return (
    <form className="p-4 mainForm">
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="name">
          {lang === "en" ? "Name" : "الاسم"}
        </label>
        <input
          type="text"
          placeholder={lang === "en" ? "enter your name" : "ادخل الإسم"}
          className="inp"
          id="name"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="personalNumber">
          {lang === "en" ? "personal number" : "الرقم الشخصي"}
        </label>
        <input
          type="number"
          placeholder={
            lang === "en" ? "enter your personal number" : "ادخل الرقم الشخصي"
          }
          className="inp"
          id="personalNumber"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="whatsNum">
          {lang === "en" ? "Whatsapp number" : "رقم الواتساب"}
        </label>
        <input
          type="number"
          placeholder={
            lang === "en" ? "enter your Whatsapp number" : "ادخل رقم الواتساب"
          }
          className="inp"
          id="whatsNum"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="bussiness">
          {lang === "en" ? "bussiness number" : "رقم العمل"}
        </label>
        <input
          type="number"
          placeholder={
            lang === "en" ? "enter your bussiness number" : "ادخل رقم العمل"
          }
          className="inp"
          id="bussiness"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="email">
          {lang === "en" ? "email" : "البريد الإلكتروني"}
        </label>
        <input
          type="email"
          placeholder={
            lang === "en"
              ? "enter your bussiness number"
              : "ادخل البريد الإلكتروني"
          }
          className="inp"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="jobTitle">
          {lang === "en" ? "job title" : "المسمي الوظيفي"}
        </label>
        <input
          type="text"
          placeholder={
            lang === "en" ? "enter your job title" : "ادخل المسمي الوظيفي"
          }
          className="inp"
          id="jobTitle"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="port">
          {lang === "en" ? "portfolio" : "معرض الأعمال"}
        </label>
        <input
          type="link"
          placeholder={
            lang === "en"
              ? "enter your portfolio link"
              : "ادخل لينك معرض الأعمال"
          }
          className="inp"
          id="port"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="website">
          {lang === "en" ? "website" : "الموقع الشخصي"}
        </label>
        <input
          type="link"
          placeholder={
            lang === "en"
              ? "enter your website link"
              : "ادخل لينك الموقع الشخصي"
          }
          className="inp"
          id="website"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="Facebook">
          {lang === "en" ? "Facebook" : "فيسبوك"}
        </label>
        <input
          type="link"
          placeholder={
            lang === "en" ? "enter your Facebook link" : "ادخل لينك فيسبوك "
          }
          className="inp"
          id="Facebook"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="instagram">
          {lang === "en" ? "instagram" : "انستغرام"}
        </label>
        <input
          type="link"
          placeholder={
            lang === "en" ? "enter your instagram link" : "ادخل لينك انستغرام "
          }
          className="inp"
          id="instagram"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="linkedin">
          {lang === "en" ? "linkedin" : "لينكدان"}
        </label>
        <input
          type="link"
          placeholder={
            lang === "en" ? "enter your linkedin link" : "ادخل لينك لينكدان "
          }
          className="inp"
          id="linkedin"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="twitter">
          {lang === "en" ? "twitter" : "تويتر"}
        </label>
        <input
          type="link"
          placeholder={
            lang === "en" ? "enter your twitter link" : "ادخل لينك تويتر "
          }
          className="inp"
          id="twitter"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="bottim">
          {lang === "en" ? "bottim" : "بوتيم"}
        </label>
        <input
          type="link"
          placeholder={
            lang === "en" ? "enter your bottim link" : "ادخل لينك بوتيم "
          }
          className="inp"
          id="bottim"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="i school">
          {lang === "en" ? "i school" : "سكول"}
        </label>
        <input
          type="link"
          placeholder={
            lang === "en" ? "enter your i school link" : "ادخل لينك سكول "
          }
          className="inp"
          id="i school"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="bio">
          {lang === "en" ? "bio" : "نبذة عنك"}
        </label>
        <input
          type="text"
          placeholder={lang === "en" ? "enter your bio" : "ادخل نبذة عنك "}
          className="inp"
          id="bio"
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="profile">
          {lang === "en" ? "profile photo" : "صورة شخصية"}
        </label>
        <input
          type="file"
          placeholder={
            lang === "en" ? "enter your profile photo" : "ادخل صورة شخصية "
          }
          className="inp"
          id="profile"
        />
      </div>
      <div className="d-flex justify-content-center">
        <MainBtn>{lang === "en" ? "create card" : "انشئ كارت"}</MainBtn>
      </div>
    </form>
  );
};

export default BussinessForm;
