import React, { useState } from "react";
import style from "./bussiness.module.css";
import { useQuery } from "react-query";
import { request } from "../../utils/axios-utils";
import Spinner from "../../spinner/Spinner";
import { useNavigate } from "react-router-dom";
const getTheme = () => {
  return request({
    url: "/Dashboard/templates",
    headers: {
      type: "busseniss",
    },
  });
};
const BussinessThemes = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    if (!selectedIndex) {
      return;
    } else {
      navigate(`/bussiness/create/${selectedIndex}`);
    }
  };
  const { isLoading, isError, error, data } = useQuery(
    "bussiness-theme",
    getTheme,
    {
      cacheTime: 1800000,
      staleTime: 18000000,
    }
  );
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className="d-flex gap-3 flex-wrap justify-content-center">
      {data?.data?.data.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setSelectedIndex(index + 1);
            handleClick();
          }}
          className=" col-12 col-md-3"
        >
          <img
            src={item}
            className={`${style.mainImg} ${
              index + 1 === selectedIndex ? style.border : null
            }`}
            alt="theme/img"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default BussinessThemes;
