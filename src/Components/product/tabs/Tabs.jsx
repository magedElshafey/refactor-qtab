import React, { useState } from "react";
import style from "./tabs.module.css";
import { Rating } from "react-simple-star-rating";
const Tabs = ({ desc, video }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [showVideow, setShowVidew] = useState(false);
  const [showRev, setShowRev] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  return (
    <div className="container ">
      <div
        className={` d-flex justify-content-center gap-4 ${style.mainContainer} py-2 mt-5`}
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
      <div className="py-2">
        {showDetails && <p className="text-white-50 ">{desc}</p>}
        {showVideow && (
          <div
            className="d-flex justify-content-center my-5"
            dangerouslySetInnerHTML={{ __html: video }}
          />
        )}
        {showRev && (
          <div>
            <p className="text-white m-0  mx-auto text-center">
              Write a reveiw
            </p>
            <div className="d-flex justify-content-center">
              <Rating
                className="text-center"
                ratingValue={rating}
                size={20}
                transition
                fillColor="gold"
                emptyColor="lightgray"
                onClick={(value) => setRating(value)}
              />
            </div>
            <div className="d-flex justify-content-center my-4">
              <textarea
                placeholder="Write A Comment"
                className={style.text}
                cols="60"
                rows="10"
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
            <button className={`d-block ${style.btn}`}>Submit Reveiw</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
