import React, { useState } from "react";
import Dashboardlayout from "../Components/Layouts/DahboardLayout/Dashboardlayout";
import BussinessForm from "../Components/createCard/bussinessForm/BussinessForm";

const CreateBussinessCard = () => {
  const lang = JSON.parse(window.localStorage.getItem("lang"));
  return (
    <div>
      <Dashboardlayout>
        <div
          dir={lang === "en" ? "ltr" : "rtl"}
          className="pt-5 row justify-content-center gap-5"
        >
          <div className="col-12 col-md-5">
            <BussinessForm lang={lang} />
          </div>
        </div>
      </Dashboardlayout>
    </div>
  );
};

export default CreateBussinessCard;
