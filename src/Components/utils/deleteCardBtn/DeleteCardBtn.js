import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { request } from "../axios-utils";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../Redux/Cards";
import Swal from "sweetalert2";
import style from "../../dashboard/cardDetails/cardDetails.module.css";
import Spinner from "../../spinner/Spinner";
const handleDelte = (id) => {
  return request({
    url: `/Dashboard/delete/cards/${id}`,
    method: "POST",
  });
};
const DeleteCardBtn = ({ item }) => {
  const query = useQueryClient();
  const dispatch = useDispatch();
  const { isLoading, mutate } = useMutation(() => handleDelte(item.id), {
    onSuccess: () => {
      query.invalidateQueries("get-cards");
    },
  });
  const handleClick = () => {
    if (isLoading) {
      return <Spinner />;
    } else {
      const body = null;
      mutate(body);
    }
  };
  return (
    <button onClick={handleClick} className={`${style.btn} ${style.delete}`}>
      Delete
    </button>
  );
};

export default DeleteCardBtn;
