import React, { useState } from "react";
import style from "./website.module.css";
import logo from "../../../assets/white-logo.png";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useQuery } from "react-query";
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
import { BiStoreAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { openCart } from "../../../Redux/Cart";
import { dispatchLogout } from "../../../Redux/Auth.js";
import Swal from "sweetalert2";
import Spinner from "../../../Components/spinner/Spinner";
// fetcher function
const logout = (token) => {
  return axios.get("https://qtap-dashboard.qutap.co/api/user/logout", {
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
  });
};
// fetch footer details
const footerDetails = () => {
  return axios.get("https://qtap-dashboard.qutap.co/api/mainpage", {
    headers: {
      lang: "en",
    },
  });
};
const Website = ({ children }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const { isLogin, token } = useSelector((state) => state.Auth);

  const [showMenu, setShowMenu] = useState(false);

  // handle logout
  const { data, isLoading, refetch } = useQuery("logout", () => logout(token), {
    enabled: false,
  });
  // footer details
  const { data: footer, isLoading: loadingFooter } = useQuery(
    "footer",
    footerDetails,
    {
      cacheTime: 4800000,
      staleTime: 4800000,
    }
  );

  const currentYear = new Date().getFullYear();
  // const handleLogout = async () => {
  //   await fetch(`${api}/user/logout`, {
  //     method: "POST",
  //     headers: {},
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.status) {
  //         Swal.fire({
  //           position: "center",
  //           title: "You logged out successfully",
  //           icon: "success",
  //         });
  //         dispatch(dispatchLogout());
  //       } else {
  //         Swal.fire({
  //           position: "top-right",
  //           icon: "error",
  //           title: "Please try again",
  //         });
  //       }
  //     });
  // };
  return (
    <div>
      {isLoading || loadingFooter ? (
        <Spinner />
      ) : (
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
                      <HashLink
                        className="link fw-bold"
                        to={isLogin ? "/dashboard" : "/login"}
                      >
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
                    {isLogin ? (
                      <HashLink onClick={refetch} to="/" className="link">
                        log out
                      </HashLink>
                    ) : (
                      <HashLink to="/login" className="link">
                        log in
                      </HashLink>
                    )}
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
                {/*auth btn and carts*/}
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
              className={`p-2 ${style.mainSideBar} ${
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

              <ul className="px-2 mt-4">
                <li onClick={() => setShowMenu(false)}>
                  <HashLink
                    className="d-flex align-items-center gap-2 link"
                    to="/"
                  >
                    <AiFillHome size={20} />
                    <span> Home </span>
                  </HashLink>
                </li>
                <li onClick={() => setShowMenu(false)} className="my-4">
                  <HashLink
                    to="/#feat"
                    className="d-flex align-items-center gap-2 link"
                  >
                    <FaFeatherAlt size={20} />
                    <span>Featuers</span>
                  </HashLink>
                </li>
                <li onClick={() => setShowMenu(false)} className="my-4">
                  <HashLink
                    to="/#about"
                    className="d-flex align-items-center gap-2 link"
                  >
                    <MdRoundaboutRight size={20} />
                    <span>About</span>
                  </HashLink>
                </li>
                <li onClick={() => setShowMenu(false)} className="my-4">
                  <HashLink
                    to="/#store"
                    className="d-flex align-items-center gap-2 link"
                  >
                    <BiStoreAlt size={20} />
                    <span>Store</span>
                  </HashLink>
                </li>
                <li onClick={() => setShowMenu(false)} className="my-4">
                  <HashLink
                    className="d-flex align-items-center gap-2 link"
                    to="/products"
                  >
                    <FaProductHunt size={20} />
                    <span>Products</span>
                  </HashLink>
                </li>
                <li onClick={() => setShowMenu(false)}>
                  <HashLink
                    className="d-flex align-items-center gap-2 link"
                    to={isLogin ? "/dashboard" : "/login"}
                  >
                    <AiTwotoneDashboard size={20} />
                    <span> DashBoard</span>
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
          {/*end mobile view*/}
          {/*end navbar*/}
          <div className="webMain">{children}</div>
          {/*start footer*/}
          <div>
            <div className={style.footerContainer}>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 mb-5 mb-md-0 text-center">
                    <h3 className="fs-3 text-uppercase text-white text-center mb-2 p-3">
                      newesletter
                    </h3>
                    <input
                      type="email"
                      className={`d-block ${style.sub}`}
                      placeholder="E N T E R Y O U R E M A I L"
                    />
                    <button className={style.btn}>Subscribe</button>
                  </div>
                  <div className="col-12 col-md-6 mb-5 mb-md-0 text-white text-center ">
                    <h3 className="fs-3 text-uppercase text-white  mb-2 p-3">
                      Store information
                    </h3>
                    <p className="mb-2 ">Q-tab</p>
                    <p className="mb-2">
                      {footer?.data?.data?.contactus.address}
                    </p>
                    <p className="mb-2">
                      Call Us: {footer?.data?.data?.contactus.phone}
                    </p>
                    <p className="mb-2">
                      Email Us: {footer?.data?.data?.contactus.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center text-white ${style.copyRightContainer}`}
            >
              {" "}
              <p className={`fw-lighter p-3 ${style.info} `}>
                &copy; All CopyRights to Q tap {currentYear} | created by{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://technomasr.com/"
                  className={style.tech}
                >
                  Technomasr
                </a>
              </p>
            </div>
          </div>
          {/*end footer*/}
        </div>
      )}
    </div>
  );
};

export default Website;
