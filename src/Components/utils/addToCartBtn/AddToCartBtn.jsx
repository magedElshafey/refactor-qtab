import React from "react";
import style from "./addToCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/Cart.js";
import { useMutation } from "react-query";
import { request } from "../axios-utils";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const addProduct = (data) => {
  return request({ url: "/add", method: "POST", data });
};

const AddToCartBtn = ({ item }) => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const { isLoading, mutate } = useMutation(addProduct, {
    onSuccess: (data) => {
      if (data?.data.status) {
        dispatch(addToCart(item));
      }
    },
    onError: (data) => {
      Swal.fire({
        icon: "error",
        title: data.data.message,
        position: "top-center",
      });
    },
  });

  const { isLogin } = useSelector((state) => state.Auth);
  const handleClick = () => {
    if (isLogin) {
      mutate({
        product_id: item.id,
        price: item.price,
        quantity: 1,
      });
    } else {
      Swal.fire({
        title: "You need to login first ",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          naviagte("/login");
        }
      });
    }
  };
  return (
    <button onClick={handleClick} disabled={isLoading} className={style.btn}>
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
