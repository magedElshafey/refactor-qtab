import React from "react";
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
import { useSelector } from "react-redux";
const Dashboardlayout = ({ childern }) => {
  const { cartItems } = useSelector((state) => state.Cart);
  return (
    <div className="d-flex justify-content-between">
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
            <HashLink className="dash-link d-flex gap-1 align-items-center">
              <AiOutlineFolderAdd size={15} />
              <span>Add card</span>
            </HashLink>
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
      <div
        className={`d-flex justify-content-end align-items-center px-2 ${style.nav}`}
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
    </div>
  );
};

export default Dashboardlayout;
