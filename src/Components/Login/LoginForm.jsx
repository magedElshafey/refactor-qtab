import React, { useState } from "react";
import style from "./login.module.css";
import { useDispatch } from "react-redux";
import { addToken, dispatchLogin, addUserId } from "../../Redux/Auth";
import Swal from "sweetalert2";
const LoginForm = () => {
  const dispatch = useDispatch();
  // values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // error values
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // handle change values
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };
  // validate email
  function validateEmail(value) {
    if (value.trim() === "") {
      return "Email Is Required";
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return "Email is invalid";
    }
    return "";
  }

  // validate password
  function validatePassword(value) {
    if (value.trim() === "") {
      return "Password Is Required";
    }
    if (value.length < 8) {
      return "Password Is Too Short";
    }

    return "";
  }
  return (
    <form className={`px-4 pt-2 mt-5  col-12 col-md-6 ${style.mainForm}`}>
      <label htmlFor="mail" className="d-block label">
        Email Address
      </label>
      <input
        onChange={handleChangeEmail}
        id="mail"
        type="email"
        placeholder="enter your mail"
        className="mb-3  d-block p-2 inp"
      />
      <p className={`my-3 ${style.error}`}>{emailError}</p>
      <label htmlFor="Password" className="d-block label">
        Password
      </label>
      <input
        onChange={handleChangePassword}
        id="Password"
        type="password"
        placeholder="enter your password"
        className="mb-3  d-block p-2 inp"
      />
      <p className={`my-3 ${style.error}`}>{passwordError}</p>
      <button
        type="submit"
        className="d-flex justify-content-center align-items-center w-100 mx-auto btn"
      >
        Login
      </button>
      <div className="w-100 mt-4 d-flex justify-content-between align-items-center">
        <p className="text-black-50">Forget Password ?</p>
        <p className="text-black-50">Create New Account ? </p>
      </div>
    </form>
  );
};

export default LoginForm;
