import React from "react";
import { request } from "../axios-utils";
import style from "../../cart/cart.module.css";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { increaseQTY, decreaseQTY } from "../../../Redux/Cart";
import Swal from "sweetalert2";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const increase = (id, data) => {
  return request({
    url: `/updateCart/${id}?action=increase`,
    method: "POST",
    data,
  });
};
const decrease = (id, data) => {
  return request({
    url: `/updateCart/${id}?action=decrease`,
    method: "POST",
    data,
  });
};
const HandleProductQuantity = ({ item }) => {
  const dispatch = useDispatch();
  const { mutate } = useMutation(() => increase(item.id), {
    onSuccess: (data) => {
      if (data?.data.status) {
        dispatch(increaseQTY(item));
      }
    },
    onError: (data) => {
      Swal.fire({
        icon: "error",
        position: "top-center",
        timer: 1500,
        title: data?.data.message,
      });
    },
  });
  const { mutate: muteDec } = useMutation(() => decrease(item.id), {
    onSuccess: (data) => {
      if (data?.data.status) {
        dispatch(decreaseQTY(item));
      }
    },
    onError: (data) => {
      Swal.fire({
        icon: "error",
        position: "top-center",
        timer: 1500,
        title: data?.data.message,
      });
    },
  });
  const handleIncrease = () => {
    const body = null;
    mutate(body);
  };
  const handleDecrease = () => {
    const body = null;
    muteDec(body);
  };
  return (
    <div className="d-flex align-items-center gap-3">
      <div onClick={handleIncrease} className={style.box}>
        <AiOutlinePlus size={20} className={style.qtyIcon} />
      </div>
      <div className={style.box}>
        <span>{item.quantity}</span>
      </div>
      <div onClick={handleDecrease} className={style.box}>
        <AiOutlineMinus size={20} className={style.qtyIcon} />
      </div>
    </div>
  );
};

export default HandleProductQuantity;
