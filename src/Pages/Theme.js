import React from "react";
import Dashboardlayout from "../Components/Layouts/DahboardLayout/Dashboardlayout";
import { useParams } from "react-router-dom";
import BussinessThemes from "../Components/theme/bussinessThemes/BussinessThemes";
import CarTheme from "../Components/theme/carTheme/CarTheme.jsx";
const Theme = () => {
  const { lang, type } = useParams();

  return (
    <div>
      <Dashboardlayout>
        {type === "bussienss" && <BussinessThemes />}
        {type === "car" && <CarTheme />}
      </Dashboardlayout>
    </div>
  );
};

export default Theme;
