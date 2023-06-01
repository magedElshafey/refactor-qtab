import React from "react";
import style from "./hero.module.css";
import { HashLink } from "react-router-hash-link";
const HeroProducts = () => {
  return (
    <>
      <div className={`${style.heroContainer} pt-5 mt-5`}>
        <div className="container d-flex justify-content-between align-items-center">
          <p className="fw-bold fs-5 text-uppercase text-white">collection</p>
          <p className="text-uppercase text-white">
            <HashLink to="/" className="link fw-bold fs-6">
              home
            </HashLink>
            / collection
          </p>
        </div>
      </div>
      <div className="container pt-2">
        <div className={`mb-5 ${style.imgContainer}`}>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="hero/img"
            loading="lazy"
          />
          <div className="overlay"></div>
        </div>
        <div className="pb-5">
          <p className="fw-bold text-uppercase text-white mb-3 fs-4">
            BIGGEST DEALS ON TOP BRANDS
          </p>
          <p className="text-white-50">
            The trick to choosing the best wear for yourself is to keep in mind
            your body type, individual style, occasion and also the time of day
            or weather. In addition to eye-catching products from top brands, we
            also offer an easy 30-day return and exchange policy, free and fast
            shipping across all pin codes, cash or card on delivery option,
            deals and discounts, among other perks. So, sign up now and shop for
            westarn wear to your heart’s content on Multikart.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroProducts;
