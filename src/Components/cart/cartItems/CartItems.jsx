import React from "react";
import style from "../cart.module.css";
import RemoveItems from "../../utils/removeItems/RemoveItems";
import HandleProductQuantity from "../../utils/handleProductQuantity/HandleProductQuantity";

const CartItems = ({ items }) => {
  return (
    <div className="mt-5">
      {items.map((item, index) => (
        <div
          key={index}
          className={`w-100 mx-auto mb-4 position-relative ${style.itemContainer}`}
        >
          <RemoveItems isIcon={true} item={item} />
          <div className="p-2 row justify-content-center align-items-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center">
              <img
                src={item.image}
                alt="cartItem/img"
                loading="lazy"
                className={`mb-2 ${style.mainImg}`}
              />
              <HandleProductQuantity item={item} />
            </div>
            <div className="col-12 col-md-6 mb-4 mb-md-0 mt-2 text-center">
              <p className="fw-bold fs-5 mb-3">
                {item.title} * {item.quantity}
              </p>
              <p className=" text-black-50 mb-5">{item.price}</p>
              <p className="text-black-50 fw-bold">
                Total Price : {item.price * item.quantity}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
