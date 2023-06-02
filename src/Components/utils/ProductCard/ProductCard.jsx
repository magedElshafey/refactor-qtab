import React from "react";
import style from "./productCard.module.css";
import { HashLink } from "react-router-hash-link";
import AddToCartBtn from "../addToCartBtn/AddToCartBtn";
const ProductCard = ({ item }) => {
  return (
    <div
      className={`col-12  col-md-4 col-lg-3  mb-4 ${style.mainContainer}`}
      data-aos="zoom-in"
      data-aos-offset="100"
      data-aos-delay="300"
    >
      {/*img container*/}
      <div className={style.imgContainer}>
        <HashLink to={`/products/${item.id}`}>
          <img
            src={item.image}
            loading="lazy"
            alt="product/img"
            data-aos="zoom-in-right"
            data-aos-delay="300"
          />
        </HashLink>
      </div>

      <HashLink to={`/products/${item.id}`} className="link t-none">
        <p
          className={` text-white text-uppercase text-center my-3 ${style.title}`}
        >
          {item.title.substring(0, 10)}
        </p>
      </HashLink>
      <p className={`mb-3 text-white-50 ${style.desc}`}>
        {item.description.substring(0, 10)}...
      </p>
      <p className="text-white fw-bold mb-4">{item.price}</p>
      <AddToCartBtn item={item} />
    </div>
  );
};

export default ProductCard;
