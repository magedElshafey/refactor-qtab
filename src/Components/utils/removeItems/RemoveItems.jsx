import React from "react";
import { request } from "../axios-utils";
import { useMutation } from "react-query";
import style from "../../cart/cart.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../Redux/Cart.js";
import Swal from "sweetalert2";

const remove = (id, data) => {
  return request({ url: `/removeItem/${id}`, method: "POST", data });
};
const RemoveItems = ({ isIcon, item }) => {
  const dispatch = useDispatch();

  const { mutate } = useMutation(() => remove(item.id), {
    onSuccess: (data) => {
      if (data.data.status) {
        dispatch(removeFromCart(item));
      }
    },
    onError: (data) => {
      Swal.fire({
        icon: "error",
        title: data.data.message,
        position: "top-center",
        timer: 1500,
        showConfirmButton: false,
      });
    },
  });
  const handleClick = () => {
    const body = null;
    mutate(body);
  };
  return (
    <div>
      {isIcon && (
        <AiOutlineCloseCircle
          onClick={handleClick}
          size={20}
          className={style.removeBtn}
        />
      )}
    </div>
  );
};

export default RemoveItems;
/*
     const handleRemoveFromCart = async (item) => {
    if (isLogin) {
      await fetch(`${api}/removeItem/${item.id}`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
          "Access-Control-Allow-Credentials": "true",
          credentials: "include",
          "Content-Type": "application/json",
          lang: "en",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status) {
          
          } else {
            
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "you need to login first",
        position: "center",
        showConfirmButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          dispatch(closeCart());
          dispatch(openForm());
        }
      });
    }
  };
*/
