import React from "react";

const SubTotal = ({ totalPrice }) => {
  return (
    <div className="d-flex justify-content-between align-items-center pt-5 mt-3">
      <p className="fw-bold">total price : </p>
      <p>{totalPrice} L.E</p>
    </div>
  );
};

export default SubTotal;
