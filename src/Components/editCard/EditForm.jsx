import React from "react";
import MainBtn from "../utils/mainBtn/MainBtn";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";
const token = JSON.parse(window.localStorage.getItem("userToken"));

const EditForm = ({
  lang,
  name,
  whatsApp_number,
  personal_number,
  business_number,
  email,
  bio,
  job_title,
  photo,
  theme,
  Botim,
  facebook,
  instgram,
  linked_in,
  portfolio,
  school_account,
  website,
  twitter,
  setName,
  setPersonalNumber,
  setWhatsNum,
  setBussinessNum,
  setEmail,
  setJobTitle,
  setWebsite,
  setPortfolio,
  setFaceBook,
  setInsta,
  setLinkedin,
  setTwitter,
  setBotim,
  setSchollAccount,
  setBio,
  setPhoto,
  setNameError,
  setWhatsNumError,
  setPersonalNumError,
  setBessinessError,
  setEmailError,
  setJobTitleError,
  setPortfolioError,
  setWebsiteError,
  setFacebookError,
  setInstaError,
  setLinkedinError,
  setBotimError,
  setTwitterError,
  setSchoolAccountError,
  setPhotoError,
  nameError,
  whatsNumError,
  personalNumError,
  bessinessError,
  emailError,
  jobTitleError,
  faceBookError,
  instaError,
  linkedinError,
  botimError,
  schollAccountError,
  photoError,
  websiteError,
  portfolioError,
  twitterError,
  setTheme,
  id,
}) => {
  // validation
  function validateText(v) {
    if (!v.trim() && lang === "en") {
      return "Name is Required";
    }
    if (!v.trim() && lang === "ar") {
      return "حقل الاسم مطلوب";
    }
    return "";
  }
  function ValidatePersonalNum(v) {
    const numberRegex = /^[0-9]+$/;
    if (!v.trim() && lang === "en") {
      return "Personal Number is Required";
    }
    if (!v.trim() && lang === "ar") {
      return "حقل الرقم الشخصي مطلوب";
    }
    if (!numberRegex.test(v) && lang === "en") {
      return "Invalid Number";
    }
    if (!numberRegex.test(v) && lang === "ar") {
      return "هذا الرقم غير صحيح";
    }
    return "";
  }
  function validateNum(v) {
    const numberRegex = /^[0-9]+$/;

    if (!numberRegex.test(v) && lang === "en") {
      return "Invalid Number";
    }
    if (!numberRegex.test(v) && lang === "ar") {
      return "هذا الرقم غير صحيح";
    }
    return "";
  }
  function validateLinks(v) {
    const linkRegex =
      /^(http(s)?:\/\/)(www\.)?[a-zA-Z0-9@:%._\+~#?&//=]{2,}\.[a-z]{2,}(\?[a-zA-Z0-9_.=&%#\-]*)?$/;
    if (!linkRegex.test(v) && lang === "en") {
      return "Invalid Links";
    }
    if (!linkRegex.test(v) && lang === "ar") {
      return "هذا الرابط غير صالح";
    }
    return "";
  }
  function validateEmail(v) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!v.trim() && lang === "en") {
      return "Name is Required";
    }
    if (!v.trim() && lang === "ar") {
      return "حقل الاسم مطلوب";
    }
    if (!emailRegex.test(v) && lang === "en") {
      return "Invalid Email";
    }
    if (!emailRegex.test(v) && lang === "ar") {
      return "هذا البريد الإلكتروني غير صالح";
    }
    return "";
  }
  function validatePhoto(file) {
    const acceptedImageTypes = ["image/jpeg", "image/png", "image/gif"];
    return file && acceptedImageTypes.includes(file.type);
  }
  // handle value change
  const handleChangeName = (e) => {
    setName(e.target.value);
    setNameError(validateText(e.target.value));
  };
  const handleChangePersonalNumber = (e) => {
    setPersonalNumber(e.target.value);
    setPersonalNumError(ValidatePersonalNum(e.target.value));
  };
  const handleChangeWhatsapp = (e) => {
    setWhatsNum(e.target.value);
    setWhatsNumError(validateNum(e.target.value));
  };
  const handleChangeBussinessNum = (e) => {
    setBussinessNum(e.target.value);
    setBessinessError(validateNum(e.target.value));
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };
  const handleChangeJobTitle = (e) => {
    setJobTitle(e.target.value);
  };
  const handleChangeWebsite = (e) => {
    setWebsite(e.target.value);
    setWebsiteError(validateLinks(e.target.value));
  };
  const handleChangePortfolio = (e) => {
    setPortfolio(e.target.value);
    setPortfolioError(validateLinks(e.target.value));
  };
  const handleChangeFacebook = (e) => {
    setFaceBook(e.target.value);
    setFacebookError(validateLinks(e.target.value));
  };
  const handleChangeInsta = (e) => {
    setInsta(e.target.value);
    setInstaError(validateLinks(e.target.value));
  };
  const handleChangeLinkedIn = (e) => {
    setLinkedin(e.target.value);
    setLinkedinError(validateLinks(e.target.value));
  };
  const handleChangeTwitter = (e) => {
    setTwitter(e.target.value);
    setTwitterError(validateLinks(e.target.value));
  };
  const handleChangeBotim = (e) => {
    setBotim(e.target.value);
    setBotimError(validateLinks(e.target.value));
  };
  const handleChangeIScholl = (e) => {
    setSchollAccount(e.target.value);
    setSchoolAccountError(validateLinks(e.target.value));
  };
  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (validatePhoto(selectedFile)) {
      setPhoto(selectedFile);
    } else {
      setPhoto(null);
      setPhotoError("Invalid file type. Please select an image file.");
    }
  };
  const navigate = useNavigate();
  const params = useParams();
  const query = useQueryClient();
  const { isLoading, mutate } = useMutation(
    (data) => {
      return axios.post(
        "https://qtap-dashboard.qutap.co/api/Dashboard/edit/card",
        data,
        {
          headers: {
            lang: "en",
            "X-CSRF-Token": document
              .querySelector('meta[name="csrf-token"]')
              .getAttribute("content"),
            "Access-Control-Allow-Credentials": "true",
            credentials: "include",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            card: params.id,
          },
        }
      );
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
  const handleClick = (e) => {
    e.preventDefault();
    if (isLoading) {
      return <Spinner />;
    }
    if (nameError || emailError || personalNumError) {
      return;
    } else {
      const data = {
        name,
        personal_number,
        whatsApp_number,
        business_number,
        email,
        job_title,
        website,
        portfolio,
        facebook,
        linked_in,
        instgram,
        Botim,
        twitter,
        bio,
        school_account,
        photo,
        theme_id: theme,
      };

      mutate(data);
    }
  };
  return (
    <form className="p-4 mainForm">
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="Theme">
          {lang === "en" ? "Theme" : "التصميم"}
        </label>
        <input
          onChange={(e) => setTheme(e.target.value)}
          type="number"
          placeholder={lang === "en" ? "enter your name" : "ادخل الإسم"}
          className="inp"
          id="Theme"
          value={theme}
        />
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="name">
          {lang === "en" ? "Name" : "الاسم"}
        </label>
        <input
          onChange={handleChangeName}
          type="text"
          placeholder={lang === "en" ? "enter your name" : "ادخل الإسم"}
          className="inp"
          id="name"
        />
        <p className="error py-2">{nameError}</p>
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="personalNumber">
          {lang === "en" ? "personal number" : "الرقم الشخصي"}
        </label>
        <input
          value={personal_number}
          onChange={handleChangePersonalNumber}
          type="number"
          placeholder={
            lang === "en" ? "enter your personal number" : "ادخل الرقم الشخصي"
          }
          className="inp"
          id="personalNumber"
        />
        <p className="error py-2">{personalNumError}</p>
      </div>

      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="whatsNum">
          {lang === "en" ? "Whatsapp number" : "رقم الواتساب"}
        </label>
        <input
          value={whatsApp_number}
          onChange={handleChangeWhatsapp}
          type="number"
          placeholder={
            lang === "en" ? "enter your Whatsapp number" : "ادخل رقم الواتساب"
          }
          className="inp"
          id="whatsNum"
        />
        <p className="error py-2">{whatsNumError}</p>
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="bussiness">
          {lang === "en" ? "bussiness number" : "رقم العمل"}
        </label>
        <input
          value={business_number}
          onChange={handleChangeBussinessNum}
          type="number"
          placeholder={
            lang === "en" ? "enter your bussiness number" : "ادخل رقم العمل"
          }
          className="inp"
          id="bussiness"
        />
        <p className="error py-2">{bessinessError}</p>
      </div>

      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="email">
          {lang === "en" ? "email" : "البريد الإلكتروني"}
        </label>
        <input
          value={email}
          onChange={handleChangeEmail}
          type="email"
          placeholder={
            lang === "en"
              ? "enter your bussiness number"
              : "ادخل البريد الإلكتروني"
          }
          className="inp"
          id="email"
        />
        <p className="error py-2">{emailError}</p>
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="jobTitle">
          {lang === "en" ? "job title" : "المسمي الوظيفي"}
        </label>
        <input
          value={job_title}
          onChange={handleChangeJobTitle}
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
          value={portfolio}
          onChange={handleChangePortfolio}
          type="link"
          placeholder={
            lang === "en"
              ? "enter your portfolio link"
              : "ادخل لينك معرض الأعمال"
          }
          className="inp"
          id="port"
        />
        <p className="error py-2">{portfolioError}</p>
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="website">
          {lang === "en" ? "website" : "الموقع الشخصي"}
        </label>
        <input
          value={website}
          onChange={handleChangeWebsite}
          type="link"
          placeholder={
            lang === "en"
              ? "enter your website link"
              : "ادخل لينك الموقع الشخصي"
          }
          className="inp"
          id="website"
        />
        <p className="error py-2">{websiteError}</p>
      </div>

      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="Facebook">
          {lang === "en" ? "Facebook" : "فيسبوك"}
        </label>
        <input
          value={facebook}
          onChange={handleChangeFacebook}
          type="link"
          placeholder={
            lang === "en" ? "enter your Facebook link" : "ادخل لينك فيسبوك "
          }
          className="inp"
          id="Facebook"
        />
        <p className="error py-2">{faceBookError}</p>
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="instagram">
          {lang === "en" ? "instagram" : "انستغرام"}
        </label>
        <input
          value={instgram}
          onChange={handleChangeInsta}
          type="link"
          placeholder={
            lang === "en" ? "enter your instagram link" : "ادخل لينك انستغرام "
          }
          className="inp"
          id="instagram"
        />
        <p className="error py-2">{instaError}</p>
      </div>

      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="linkedin">
          {lang === "en" ? "linkedin" : "لينكدان"}
        </label>
        <input
          value={linked_in}
          onChange={handleChangeLinkedIn}
          type="link"
          placeholder={
            lang === "en" ? "enter your linkedin link" : "ادخل لينك لينكدان "
          }
          className="inp"
          id="linkedin"
        />
        <p className="error py-2">{linkedinError}</p>
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="twitter">
          {lang === "en" ? "twitter" : "تويتر"}
        </label>
        <input
          value={twitter}
          onChange={handleChangeTwitter}
          type="link"
          placeholder={
            lang === "en" ? "enter your twitter link" : "ادخل لينك تويتر "
          }
          className="inp"
          id="twitter"
        />
        <p className="error py-2">{twitterError}</p>
      </div>

      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="bottim">
          {lang === "en" ? "bottim" : "بوتيم"}
        </label>
        <input
          value={Botim}
          onChange={handleChangeBotim}
          type="link"
          placeholder={
            lang === "en" ? "enter your bottim link" : "ادخل لينك بوتيم "
          }
          className="inp"
          id="bottim"
        />
        <p className="error py-2">{botimError}</p>
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="i school">
          {lang === "en" ? "i school" : "سكول"}
        </label>
        <input
          value={school_account}
          onChange={handleChangeIScholl}
          type="link"
          placeholder={
            lang === "en" ? "enter your i school link" : "ادخل لينك سكول "
          }
          className="inp"
          id="i school"
        />
        <p className="error py-2">{schollAccountError}</p>
      </div>

      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="bio">
          {lang === "en" ? "bio" : "نبذة عنك"}
        </label>
        <input
          value={bio}
          onChange={(e) => setBio(e.target.value)}
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
          onChange={handlePhotoChange}
          type="file"
          placeholder={
            lang === "en" ? "enter your profile photo" : "ادخل صورة شخصية "
          }
          className="inp"
          id="profile"
        />
        <p className="error py-2">{photoError}</p>
      </div>
      <div className="d-flex justify-content-center">
        <MainBtn action={handleClick}>
          {lang === "en" ? "Edit card" : "عدل كارت"}
        </MainBtn>
      </div>
    </form>
  );
};

export default EditForm;
/*
   <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="tender">
          {lang === "en" ? "tender" : "تيندر"}
        </label>
        <input
          onChange={handleTenderChange}
          type="link"
          placeholder={
            lang === "en" ? "enter your tender link" : "ادخل لينك تيندر "
          }
          className="inp"
          id="tender"
        />
        <p className="error py-2">{tenderError}</p>
      </div>

      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="snap">
          {lang === "en" ? "snapchat" : "سناب شات"}
        </label>
        <input
          onChange={handleSnapChange}
          type="link"
          placeholder={
            lang === "en" ? "enter your snapchat link" : "ادخل لينك سناب شات "
          }
          className="inp"
          id="snap"
        />
        <p className="error py-2">{snapError}</p>
      </div>

      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="pinterest">
          {lang === "en" ? "pinterest" : "بنتريست"}
        </label>
        <input
          onChange={handlePinterestChange}
          type="link"
          placeholder={
            lang === "en" ? "enter your pinterest link" : "ادخل لينك بنتريست "
          }
          className="inp"
          id="pinterest"
        />
        <p className="error py-2">{pinterestError}</p>
      </div>
      <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="tiktok">
          {lang === "en" ? "tiktok" : "تيكتوك"}
        </label>
        <input
          onChange={handleTiktokChange}
          type="link"
          placeholder={
            lang === "en" ? "enter your tiktok link" : "ادخل لينك تيكتوك "
          }
          className="inp"
          id="tiktok"
        />
        <p className="error py-2">{tiktokError}</p>
      </div>
       <div className="mb-3">
        <label className="label d-block mb-1" htmlFor="location">
          {lang === "en" ? "location" : "عنوانك"}
        </label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder={lang === "en" ? "enter your location" : "ادخل عنوانك  "}
          className="inp"
          id="location"
        />
      </div>
*/
