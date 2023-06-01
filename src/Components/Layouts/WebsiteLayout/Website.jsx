import React, { useState } from "react";
import style from "./website.module.css";
import logo from "../../../assets/white-logo.png";
import { HashLink } from "react-router-hash-link";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHome,
  AiTwotoneDashboard,
} from "react-icons/ai";
import { FaFeatherAlt, FaProductHunt } from "react-icons/fa";
import { MdRoundaboutRight } from "react-icons/md";
import { BiStoreAlt } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { openCart } from "../../../Redux/Cart";
import { dispatchLogout } from "../../../Redux/Auth.js";
import Swal from "sweetalert2";
const Website = ({ childern }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const { isLogin, token } = useSelector((state) => state.Auth);

  const [showMenu, setShowMenu] = useState(false);
  const api = "https://qtap-dashboard.qutap.co/api";
  // handle logout
  const handleLogout = async () => {
    await fetch(`${api}/user/logout`, {
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
          Swal.fire({
            position: "center",
            title: "You logged out successfully",
            icon: "success",
          });
          dispatch(dispatchLogout());
        } else {
          Swal.fire({
            position: "top-right",
            icon: "error",
            title: "Please try again",
          });
        }
      });
  };
  return (
    <div>
      {/*start navbar*/}
      {/*start larg screen*/}
      <div className="d-none d-md-block">
        <div className={`py-4 ${style.nav}`}>
          <div className="container-fluid d-flex align-items-center justify-content-between">
            {/*logo and main links*/}
            <div className="d-flex align-items-center gap-2">
              {/*logo */}
              <img
                alt="logo/img"
                src={logo}
                className={style.logo}
                loading="lazy"
              />
              {/*main Links*/}
              <ul className="p-0  text-white d-flex align-items-center gap-4">
                <li>
                  <HashLink className="link fw-bold" to="/">
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink className="link fw-bold" to="/#feat">
                    Featuers
                  </HashLink>
                </li>
                <li>
                  <HashLink className="link fw-bold" to="/#about">
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink className="link fw-bold" to="/#store">
                    Store
                  </HashLink>
                </li>
                <li>
                  <HashLink className="link fw-bold" to="/products">
                    Products
                  </HashLink>
                </li>
                <li>
                  <HashLink className="link fw-bold" to="/">
                    dashboard
                  </HashLink>
                </li>
              </ul>
            </div>
            {/*search and auth btns*/}
            <div className="d-flex align-items-center gap-3">
              {/*search*/}
              <div className="position-relative">
                <input
                  dir="rtl"
                  type="text"
                  className={style.inp}
                  placeholder="Search for something"
                />
                <div className={style.searchContainer}>
                  <AiOutlineSearch />
                </div>
              </div>
              {/*auth btns*/}
              <button className={style.loginBtn}>
                <HashLink to="/login" className="link">
                  log in
                </HashLink>
              </button>
              <button className={style.regBtn}>
                <HashLink to="/reg" className="link">
                  sign up
                </HashLink>
              </button>
              <div className="position-relative">
                <AiOutlineShoppingCart
                  onClick={() => dispatch(openCart())}
                  size={30}
                  className={style.icon}
                />
                <span className={style.length}>{cartItems.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end larg screen*/}
      {/*start mobile view*/}
      <div className="d-md-none">
        <div className={`py-4 ${style.nav}`}>
          <div className="container-fluid d-flex justify-content-between align-items-center">
            {/*logo and icon*/}
            <div className="d-flex align-items-center">
              {/*icon*/}
              {!showMenu && (
                <AiOutlineMenu
                  size={30}
                  className={` ${style.mainIcon}`}
                  onClick={() => setShowMenu(true)}
                />
              )}
              <img
                alt="logo/img"
                src={logo}
                className={`m-0 p-0 ${style.logo}`}
                loading="lazy"
              />
            </div>
            <div className="d-flex align-items-center gap-3">
              <button className={style.loginBtn}>
                <HashLink to="/login" className="link">
                  log in
                </HashLink>
              </button>
              <button className={style.regBtn}>
                <HashLink to="/reg" className="link">
                  sign up
                </HashLink>
              </button>
              <div className="position-relative">
                <AiOutlineShoppingCart
                  onClick={() => dispatch(openCart())}
                  size={30}
                  className={style.icon}
                />
                <span className={style.length}>{cartItems.length}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.mainSideBar} ${
            showMenu ? style.show : style.hide
          }`}
        >
          <div className={style.closeIcon}>
            <AiOutlineClose
              onClick={() => setShowMenu(false)}
              size={30}
              className={style.mainIcon}
            />
          </div>

          <ul className="mt-5">
            <li onClick={() => setShowMenu(false)}>
              <HashLink
                className={`fs-5 d-flex align-items-center gap-2 links ${style.navLink}`}
                to="/"
              >
                <AiFillHome size={20} />
                <span> Home </span>
              </HashLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="my-4">
              <a
                href="/#feat"
                className={`d-flex align-items-center gap-2 fs-5 links ${style.navLink}`}
              >
                <FaFeatherAlt size={20} />
                <span>Featuers</span>
              </a>
            </li>
            <li onClick={() => setShowMenu(false)} className="my-4">
              <HashLink
                href="/#about"
                className={`fs-5 links d-flex align-items-center gap-2 ${style.navLink}`}
              >
                <MdRoundaboutRight size={20} />
                <span>About</span>
              </HashLink>
            </li>
            <li onClick={() => setShowMenu(false)} className="my-4">
              <a
                href="/#store"
                className={`d-flex align-items-center gap-2 fs-5 links ${style.navLink}`}
              >
                <BiStoreAlt size={20} />
                <span>Store</span>
              </a>
            </li>
            <li onClick={() => setShowMenu(false)} className="my-4">
              <HashLink
                className={`d-flex align-items-center gap-2 fs-5 links ${style.navLink}`}
                to="/products"
              >
                <FaProductHunt size={20} />
                <span>Products</span>
              </HashLink>
            </li>
            <li
              className={`fs-5 d-flex align-items-center gap-2 links my-4 ${style.navLink}`}
            >
              <AiTwotoneDashboard size={20} />
              <span>DashBoard</span>
            </li>
          </ul>
          <div className="mt-3 px-3 d-flex justify-content-between align-items-center">
            <button
              onClick={() => setShowMenu(false)}
              className={`${style.LoginBtn}`}
            >
              {isLogin ? (
                <p
                  onClick={handleLogout}
                  className={`m-0 p-0 fs-5 links ${style.navLink}`}
                >
                  Log Out
                </p>
              ) : (
                <HashLink to="/login" className={`fs-5 links ${style.navLink}`}>
                  log in
                </HashLink>
              )}
            </button>
            <button
              onClick={() => setShowMenu(false)}
              className={`${style.btn}`}
            >
              <HashLink to="/reg" className={`fs-5 links`}>
                Sign up
              </HashLink>
            </button>
          </div>
        </div>
      </div>
      {/*end mobile view*/}
      {/*end navbar*/}
    </div>
  );
};

export default Website;
