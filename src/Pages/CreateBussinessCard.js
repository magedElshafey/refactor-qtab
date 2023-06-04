import React, { useState } from "react";
import Dashboardlayout from "../Components/Layouts/DahboardLayout/Dashboardlayout";
import BussinessForm from "../Components/createCard/bussinessForm/BussinessForm";
import { useParams } from "react-router-dom";
import ThemeOne from "../Components/theme/bussinessThemes/themeOne/ThemeOne";
import ThemeTwo from "../Components/theme/bussinessThemes/themeTwo/ThemeTwo";
import ThemeThree from "../Components/theme/bussinessThemes/themeThree/ThemeThree";
const CreateBussinessCard = () => {
  const lang = JSON.parse(window.localStorage.getItem("lang"));
  const [name, setName] = useState("");
  const [personal_number, setPersonalNumber] = useState("");
  const [whatsApp_number, setWhatsNum] = useState("");
  const [business_number, setBussinessNum] = useState("");
  const [email, setEmail] = useState("");
  const [job_title, setJobTitle] = useState("");
  const [website, setWebsite] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [facebook, setFaceBook] = useState("");
  const [instgram, setInsta] = useState("");
  const [linked_in, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [Botim, setBotim] = useState("");
  const [school_account, setSchollAccount] = useState("");
  const [tender, setTender] = useState("");
  const [snap, setSnap] = useState("");
  const [tiktok, setTikTok] = useState("");
  const [pinterest, setPinterest] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [qr, setQr] = useState("");

  // errors
  const [nameError, setNameError] = useState("");
  const [personalNumError, setPersonalNumError] = useState("");
  const [whatsNumError, setWhatsNumError] = useState("");
  const [bessinessError, setBessinessError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [jobTitleError, setJobTitleError] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [portfolioError, setPortfolioError] = useState("");
  const [faceBookError, setFacebookError] = useState("");
  const [botimError, setBotimError] = useState("");
  const [instaError, setInstaError] = useState("");
  const [linkedinError, setLinkedinError] = useState("");
  const [twitterError, setTwitterError] = useState("");
  const [schollAccountError, setSchoolAccountError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [tenderError, setTenderError] = useState("");
  const [snapError, setSnapError] = useState("");
  const [tiktokError, setTiktokError] = useState("");
  const [pinterestError, setPinterestError] = useState("");
  const params = useParams();
  return (
    <div>
      <Dashboardlayout>
        <div
          dir={lang === "en" ? "ltr" : "rtl"}
          className="py-5 row justify-content-center gap-5"
        >
          <div className="col-12 col-md-7">
            <BussinessForm
              lang={lang}
              setName={setName}
              setPersonalNumber={setPersonalNumber}
              setWhatsNum={setWhatsNum}
              setBussinessNum={setBussinessNum}
              setEmail={setEmail}
              setJobTitle={setJobTitle}
              setWebsite={setWebsite}
              setPortfolio={setPortfolio}
              setFaceBook={setFaceBook}
              setInsta={setInsta}
              setLinkedin={setLinkedin}
              setTwitter={setTwitter}
              setBotim={setBotim}
              setSchollAccount={setSchollAccount}
              setBio={setBio}
              setPhoto={setPhoto}
              setQr={setQr}
              setNameError={setNameError}
              setWhatsNumError={setWhatsNumError}
              setPersonalNumError={setPersonalNumError}
              setBessinessError={setBessinessError}
              setEmailError={setEmailError}
              setJobTitleError={setJobTitleError}
              setPortfolioError={setPortfolioError}
              setWebsiteError={setWebsiteError}
              setFacebookError={setFacebookError}
              setInstaError={setInstaError}
              setLinkedinError={setLinkedinError}
              setBotimError={setBotimError}
              setTwitterError={setTwitterError}
              setSchoolAccountError={setSchoolAccountError}
              setPhotoError={setPhotoError}
              name={name}
              personal_number={personal_number}
              whatsApp_number={whatsApp_number}
              business_number={business_number}
              job_title={job_title}
              email={email}
              website={website}
              portfolio={portfolio}
              facebook={facebook}
              instgram={instgram}
              linked_in={linked_in}
              Botim={Botim}
              twitter={twitter}
              school_account={school_account}
              photo={photo}
              bio={bio}
              theme_id={parseInt(params.id)}
              qr={qr}
              nameError={nameError}
              whatsNumError={whatsNumError}
              personalNumError={personalNumError}
              bessinessError={bessinessError}
              emailError={emailError}
              jobTitleError={jobTitleError}
              faceBookError={faceBookError}
              instaError={instaError}
              linkedinError={linkedinError}
              botimError={botimError}
              schollAccountError={schollAccountError}
              photoError={photoError}
              websiteError={websiteError}
              portfolioError={portfolioError}
              twitterError={twitterError}
              location={location}
              setLocation={setLocation}
              tender={tender}
              setTender={setTender}
              tenderError={tenderError}
              setTenderError={setTenderError}
              snap={snap}
              setSnap={setSnap}
              snapError={snapError}
              setSnapError={setSnapError}
              tiktok={tiktok}
              setTikTok={setTikTok}
              tiktokError={tiktokError}
              setTiktokError={setTiktokError}
              pinterest={pinterest}
              setPinterest={setPinterest}
              pinterestError={pinterestError}
              setPinterestError={setPinterestError}
            />
          </div>
          <div className="col-12 col-md-4">
            {parseInt(params.id) === 1 && (
              <ThemeOne
                name={name}
                personal_number={personal_number}
                whatsApp_number={whatsApp_number}
                business_number={business_number}
                job_title={job_title}
                email={email}
                website={website}
                portfolio={portfolio}
                facebook={facebook}
                instgram={instgram}
                linked_in={linked_in}
                Botim={Botim}
                twitter={twitter}
                school_account={school_account}
                photo={photo}
                bio={bio}
                location={location}
                lang={lang}
                tender={tender}
                snap={snap}
                tiktok={tiktok}
                pinterest={pinterest}
              />
            )}
            {parseInt(params.id) === 2 && (
              <ThemeTwo
                name={name}
                personal_number={personal_number}
                whatsApp_number={whatsApp_number}
                business_number={business_number}
                job_title={job_title}
                email={email}
                website={website}
                portfolio={portfolio}
                facebook={facebook}
                instgram={instgram}
                linked_in={linked_in}
                Botim={Botim}
                twitter={twitter}
                school_account={school_account}
                photo={photo}
                bio={bio}
                location={location}
                lang={lang}
                tender={tender}
                snap={snap}
                tiktok={tiktok}
                pinterest={pinterest}
              />
            )}
            {parseInt(params.id) === 3 && (
              <ThemeThree
                name={name}
                personal_number={personal_number}
                whatsApp_number={whatsApp_number}
                business_number={business_number}
                job_title={job_title}
                email={email}
                website={website}
                portfolio={portfolio}
                facebook={facebook}
                instgram={instgram}
                linked_in={linked_in}
                Botim={Botim}
                twitter={twitter}
                school_account={school_account}
                photo={photo}
                bio={bio}
                location={location}
                lang={lang}
                tender={tender}
                snap={snap}
                tiktok={tiktok}
                pinterest={pinterest}
              />
            )}
          </div>
        </div>
      </Dashboardlayout>
    </div>
  );
};

export default CreateBussinessCard;
