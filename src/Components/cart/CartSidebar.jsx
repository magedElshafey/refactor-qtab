import React, { useRef, useEffect } from "react";
import style from "./cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "../../Redux/Cart.js";
import { AiOutlineClose } from "react-icons/ai";
import CartCounter from "./cartcounter/CartCounter";
import CartItems from "./cartItems/CartItems";
import CartEmpty from "./cartempty/CartEmpty";
import SubTotal from "./subTotal/SubTotal";
const CartSidebar = () => {
  const { cartItems, openCart } = useSelector((state) => state.Cart);
  const cartRef = useRef();
  const dispatch = useDispatch();
  const handleClickOutside = (e) => {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      dispatch(closeCart());
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const totalPrice = cartItems.reduce((acc, product) => {
    acc += +product.price * +product.quantity;
    return acc;
  }, 0);
  return (
    <div
      ref={cartRef}
      className={`${style.cartContainer} ${
        openCart ? style.show : style.hide
      } p-3`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <AiOutlineClose
          size={20}
          className={style.closeIcon}
          onClick={() => dispatch(closeCart())}
        />
        <CartCounter length={cartItems.length} />
      </div>
      {cartItems.length ? <CartItems items={cartItems} /> : <CartEmpty />}
      <SubTotal totalPrice={totalPrice} />
    </div>
  );
};

export default CartSidebar;
