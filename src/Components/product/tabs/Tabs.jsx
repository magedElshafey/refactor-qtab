import React, { useState } from "react";
import style from "./tabs.module.css";
const Tabs = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [showVideow, setShowVidew] = useState(false);
  const [showRev, setShowRev] = useState(false);
  return (
    <div
      className={`container d-flex justify-content-center gap-4 ${style.mainContainer} py-2 mt-5`}
    >
      <button
        onClick={() => {
          setShowDetails(true);
          setShowRev(false);
          setShowVidew(false);
        }}
        className={`pb-2 ${style.btn} ${showDetails ? style.active : null}`}
      >
        Details
      </button>
      <button
        onClick={() => {
          setShowDetails(false);
          setShowRev(false);
          setShowVidew(true);
        }}
        className={`pb-2 ${style.btn} ${showVideow ? style.active : null}`}
      >
        Videos
      </button>
      <button
        onClick={() => {
          setShowDetails(false);
          setShowRev(true);
          setShowVidew(false);
        }}
        className={`pb-2 ${style.btn} ${showRev ? style.active : null}`}
      >
        Write a Reveiw
      </button>
    </div>
  );
};

export default Tabs;
