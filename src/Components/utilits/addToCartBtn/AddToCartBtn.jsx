import React from "react";
import style from "./addToCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/Cart.js";
import { useQuery } from "react-query";
import axios from "axios";
const AddToCartBtn = ({ api }) => {
  const dispatch = useDispatch();
  const { isLogin, token } = useSelector((state) => state.Auth);

  return (
    <button  className={style.btn}>
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
