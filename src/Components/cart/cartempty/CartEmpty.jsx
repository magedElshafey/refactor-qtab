import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeCart } from "../../../Redux/Cart";
import { BsFillCartCheckFill } from "react-icons/bs";
import MainBtn from "../../utils/mainBtn/MainBtn";
const CartEmpty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBackToQtap = () => {
    dispatch(closeCart());
    navigate("/");
  };
  return (
    <div className="h-50 d-flex justify-content-center align-items-center">
      <div>
        <BsFillCartCheckFill size={60} className="d-block mx-auto mb-5" />
        <MainBtn width="w-100" action={handleBackToQtap}>
          Back to Q-tap
        </MainBtn>
      </div>
    </div>
  );
};

export default CartEmpty;
