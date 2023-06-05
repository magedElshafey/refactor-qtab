import React, { useState, useRef, useEffect } from "react";
import style from "./dashlayout.module.css";
import logo from "../../../assets/white-logo.png";
import { HashLink } from "react-router-hash-link";
import {
  AiOutlineDashboard,
  AiOutlineMessage,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineFolderAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import avatar from "../../../assets/pexels-photo-941693.jpeg";
import { MdNotificationsNone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../Redux/Cards";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Dashboardlayout = ({ children }) => {
  const [showSidebar, setShowSideBar] = useState(false);
  const { cartItems } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const sideRef = useRef();
  const handleShowSidebar = (e) => {
    if (sideRef.current && !sideRef.current.contains(e.target)) {
      setShowSideBar(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleShowSidebar);
    return () => {
      document.removeEventListener("mousedown", handleShowSidebar);
    };
  }, []);
  return (
    <>
      <div className="d-none d-md-block">
        <div className="d-flex">
          {/*sidebar*/}
          <div className={`${style.sidebar}`}>
            <div className={style.logoContainer}>
              <img
                alt="logo/img"
                src={logo}
                loading="lazy"
                className={style.logo}
              />
            </div>
            <ul className="p-0 m-0 mt-4 px-2">
              <li className="mb-3">
                <HashLink
                  to="/dashboard"
                  className="dash-link d-flex gap-1 align-items-center"
                >
                  <AiOutlineDashboard size={15} />
                  <span>Dashboard</span>
                </HashLink>
              </li>
              <li className="mb-3">
                <HashLink
                  to="/leads"
                  className="dash-link d-flex gap-1 align-items-center"
                >
                  <AiOutlineMessage size={15} />
                  <span>leades</span>
                </HashLink>
              </li>
              <li className="mb-3">
                <HashLink
                  to="/cards"
                  className="dash-link d-flex gap-1 align-items-center"
                >
                  <BsCardImage size={15} />
                  <span>Cards</span>
                </HashLink>
              </li>
              <li className="mb-3">
                <p
                  onClick={() => dispatch(openModal())}
                  className="pointer m-0 p-0 dash-link d-flex gap-1 align-items-center"
                >
                  <AiOutlineFolderAdd size={15} />
                  <span>Add card</span>
                </p>
              </li>
              <li className="mb-3">
                <HashLink
                  to="/"
                  className="dash-link d-flex gap-1 align-items-center"
                >
                  <AiOutlineHome size={15} />
                  <span>return to home</span>
                </HashLink>
              </li>
              <li className="mb-3">
                <HashLink className="dash-link d-flex gap-1 align-items-center">
                  <AiOutlineLogout size={15} />
                  <span>Logout</span>
                </HashLink>
              </li>
            </ul>
          </div>
          <div className={`w-100  d-flex flex-wrap`}>
            <div
              className={`w-100 d-flex justify-content-end align-items-center px-2 ${style.nav}`}
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  alt="avatar/img"
                  className={style.av}
                  loading="lazy"
                  src={avatar}
                />
                {/*cart container*/}
                <div className="position-relative pointer">
                  <AiOutlineShoppingCart size={30} className="text-white" />
                  <span className={style.length}>{cartItems.length}</span>
                </div>
                {/*notify*/}
                <div className="position-relative pointer">
                  <MdNotificationsNone size={30} className="text-white" />
                  <span className={style.length}>0</span>
                </div>
              </div>
            </div>
            <div className="w-100 main-dash">
              <div className="container pt-2">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div className={style.navContainer}>
          <div className="container d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center ">
              <div>
                <AiOutlineMenu
                  onClick={() => setShowSideBar(true)}
                  className={style.mainIcon}
                />
              </div>
              <img
                loading="lazy"
                alt="logo/img"
                src={logo}
                className={style.logoMob}
              />
            </div>
            <div className="d-flex align-items-center gap-3">
              <img
                alt="avatar/img"
                className={style.av}
                loading="lazy"
                src={avatar}
              />
              {/*cart container*/}
              <div className="position-relative pointer">
                <AiOutlineShoppingCart size={30} className="text-white" />
                <span className={style.length}>{cartItems.length}</span>
              </div>
              {/*notify*/}
              <div className="position-relative pointer">
                <MdNotificationsNone size={30} className="text-white" />
                <span className={style.length}>0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-dash-mob mt-5 pt-5">
          <div className="container pt-2">{children}</div>
        </div>
        <div
          ref={sideRef}
          className={`p-3 ${style.mobBar} ${
            showSidebar ? style.show : style.hide
          }`}
        >
          <AiOutlineClose
            size={20}
            className={style.closeIcon}
            onClick={() => setShowSideBar(false)}
          />
          <ul className="p-0 m-0 mt-4">
            <li onClick={() => setShowSideBar(false)} className="mb-3">
              <HashLink
                to="/dashboard"
                className="dash-link text-white d-flex gap-1 align-items-center"
              >
                <AiOutlineDashboard size={15} />
                <span>Dashboard</span>
              </HashLink>
            </li>
            <li onClick={() => setShowSideBar(false)} className="mb-3">
              <HashLink
                to="/leads"
                className="dash-link text-white d-flex gap-1 align-items-center"
              >
                <AiOutlineMessage size={15} />
                <span>leades</span>
              </HashLink>
            </li>
            <li onClick={() => setShowSideBar(false)} className="mb-3">
              <HashLink
                to="/cards"
                className="dash-link text-white d-flex gap-1 align-items-center"
              >
                <BsCardImage size={15} />
                <span>Cards</span>
              </HashLink>
            </li>
            <li onClick={() => setShowSideBar(false)} className="mb-3">
              <p
                onClick={() => dispatch(openModal())}
                className="dash-link text-white d-flex gap-1 align-items-center"
              >
                <AiOutlineFolderAdd size={15} />
                <span>Add card</span>
              </p>
            </li>
            <li onClick={() => setShowSideBar(false)} className="mb-3">
              <HashLink
                to="/"
                className="dash-link text-white d-flex gap-1 align-items-center"
              >
                <AiOutlineHome size={15} />
                <span>return to home</span>
              </HashLink>
            </li>
            <li onClick={() => setShowSideBar(false)} className="mb-3">
              <HashLink className="dash-link text-white d-flex gap-1 align-items-center">
                <AiOutlineLogout size={15} />
                <span>Logout</span>
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboardlayout;
