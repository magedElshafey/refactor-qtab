import React, { useState } from "react";
import Dashboardlayout from "../Components/Layouts/DahboardLayout/Dashboardlayout";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Components/spinner/Spinner";
import Swal from "sweetalert2";
import EditForm from "../Components/editCard/EditForm";
import ThemeOne from "../Components/theme/bussinessThemes/themeOne/ThemeOne";
import ThemeTwo from "../Components/theme/bussinessThemes/themeTwo/ThemeTwo";
import ThemeThree from "../Components/theme/bussinessThemes/themeThree/ThemeThree";
const token = JSON.parse(window.localStorage.getItem("userToken"));
const editCard = (id) => {
  return axios.get(`https://qtap-dashboard.qutap.co/api/Dashboard/view/card`, {
    headers: {
      lang: "en",
      "X-CSRF-Token": document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
      "Access-Control-Allow-Credentials": "true",
      credentials: "include",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      card: id,
    },
  });
};
const EditCard = () => {
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
  const [theme, setTheme] = useState(null);

  //   errors
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
  const [id, setId] = useState("");

  const params = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ["edit-card", parseInt(params.id)],
    () => editCard(parseInt(params.id))
  );
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return Swal.fire({
      icon: "error",
      title: error.message,
    });
  }
  //
  return (
    <div>
      <Dashboardlayout>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 mb-4 mb-md-0">
              <EditForm
                id={id}
                lang={lang}
                name={data.data.data.name}
                whatsApp_number={data.data.data.whatsApp_number}
                personal_number={data.data.data.personal_number}
                business_number={data.data.data.business_number}
                email={data.data.data.email}
                bio={data.data.data.bio}
                job_title={data.data.data.job_title}
                photo={data.data.data.photo}
                theme={data.data.data.theme}
                Botim={data.data.data.Botim}
                facebook={data.data.data.facebook}
                instgram={data.data.data.instgram}
                linked_in={data.data.data.linked_in}
                portfolio={data.data.data.portfolio}
                school_account={data.data.data.school_account}
                website={data.data.data.website}
                twitter={data.data.data.twitter}
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
                setTheme={setTheme}
              />
            </div>
            <div className="col-12 col-md-7">
              {theme == 1 && (
                <ThemeOne
                  lang={lang}
                  name={name}
                  whatsApp_number={whatsApp_number}
                  personal_number={personal_number}
                  business_number={business_number}
                  email={email}
                  bio={bio}
                  job_title={job_title}
                  photo={photo}
                  theme={theme}
                  Botim={Botim}
                  facebook={facebook}
                  instgram={instgram}
                  linked_in={linked_in}
                  portfolio={portfolio}
                  school_account={school_account}
                  website={website}
                  twitter={twitter}
                />
              )}
              {theme == 2 && (
                <ThemeTwo
                  lang={lang}
                  name={name}
                  whatsApp_number={whatsApp_number}
                  personal_number={personal_number}
                  business_number={business_number}
                  email={email}
                  bio={bio}
                  job_title={job_title}
                  photo={photo}
                  theme={theme}
                  Botim={Botim}
                  facebook={facebook}
                  instgram={instgram}
                  linked_in={linked_in}
                  portfolio={portfolio}
                  school_account={school_account}
                  website={website}
                  twitter={twitter}
                />
              )}
              {theme == 3 && (
                <ThemeThree
                  lang={lang}
                  name={name}
                  whatsApp_number={whatsApp_number}
                  personal_number={personal_number}
                  business_number={business_number}
                  email={email}
                  bio={bio}
                  job_title={job_title}
                  photo={photo}
                  theme={theme}
                  Botim={Botim}
                  facebook={facebook}
                  instgram={instgram}
                  linked_in={linked_in}
                  portfolio={portfolio}
                  school_account={school_account}
                  website={website}
                  twitter={twitter}
                />
              )}
              {theme > 3 ||
                (theme < 1 && <div className="fw-bold fs-3">No Themes</div>)}
            </div>
          </div>
        </div>
      </Dashboardlayout>
    </div>
  );
};

export default EditCard;
