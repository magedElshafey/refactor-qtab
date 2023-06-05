import React from "react";
import { useQuery } from "react-query";
import { request } from "../axios-utils";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../Redux/Cards";
import Swal from "sweetalert2";
import style from "../../dashboard/cardDetails/cardDetails.module.css";
const handleDelte = (id) => {
  return request({
    url: `/Dashboard/delete/cards`,

    headers: {
      card: id,
    },
  });
};
const DeleteCardBtn = ({ item }) => {
  const dispatch = useDispatch();
  const { data, refetch } = useQuery(
    "delete-card",
    () => handleDelte(item.id),
    {
      onSuccess: (data) => {
        console.log(data);
        if (data?.data?.data?.status) {
          dispatch(deleteCard(item));
          refetch();
        }
      },
      onError: (data) => {
        console.log(data);
        Swal.fire({
          title: "there is an error please try again",
          icon: "error",
          position: "center",
        });
      },
      enabled: false,
    }
  );

  return (
    <button onClick={refetch} className={`${style.btn} ${style.delete}`}>
      Delete
    </button>
  );
};

export default DeleteCardBtn;
