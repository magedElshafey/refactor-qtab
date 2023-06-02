import React, { useState } from "react";
import style from "./reg.module.css";
import * as animationData from "../../lotties/93385-login.json";
import Lottie from "react-lottie";
import { useMutation } from "react-query";
import { request } from "../utils/axios-utils";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dispatchLogin, addToken } from "../../Redux/Auth";
import Spinner from "../spinner/Spinner";

const RegForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // errors
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [mailError, setMailError] = useState("");

  // handle values
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(validateName(e.target.value));
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError(validateConfirmPassword(e.target.value));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMailError(validateEmail(e.target.value));
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  // validation
  function validateName(v) {
    if (v.trim() === "") {
      return "Name Is Required";
    }
    return "";
  }
  function validatePassword(v) {
    if (v.trim() === "") {
      return "Password Is Required";
    }
    if (v.length < 8) {
      return "Password Is Too Short";
    }
    return "";
  }
  function validateConfirmPassword(v) {
    if (v.trim() === "") {
      return "confirm password is required";
    }
    if (v !== password) {
      return "Password Does not match";
    }
    return "";
  }
  function validateEmail(v) {
    if (v.trim() === "") {
      return "Email Is Required";
    }
    if (!/\S+@\S+\.\S+/.test(v)) {
      return "Email is invalid";
    }
    return "";
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const createAccount = (data) => {
    return request({ url: "/user/register", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(createAccount, {
    onSuccess: (data) => {
      if (data?.data.status) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome ${data.data.user.name}, your account was created successfully`,
        });
        dispatch(addToken(data.data.token));
        dispatch(dispatchLogin());
        navigate("/");
      }
    },
  });
  const handleClick = (e) => {
    e.preventDefault();
    const nameError = validateName(name);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);
    const emailError = validateEmail(email);
    setMailError(emailError);
    setNameError(nameError);
    setPasswordError(passwordError);
    if (nameError || passwordError || confirmPasswordError || emailError) {
      return;
    } else {
      const body = {
        name,
        email,
        password,
        phone,
        confirm_password: confirmPassword,
      };
      mutate(body);
    }
  };
  return (
    <div className="container py-5 mt-5">
      <div className="row align-items-center justify-content-center gap-5">
        {isLoading ? (
          <Spinner />
        ) : (
          <form className="col-12 col-md-4  mainForm py-3 px-2">
            <p className="text-black-50 fw-bold mb-3 fs-3 text-center">
              Create Account
            </p>
            <div className="mb-3">
              <label className="d-block label mb-1" htmlFor="Name">
                Name
              </label>
              <input onChange={handleNameChange} type="text" className="inp" />
              <p className="my-2 error">{nameError}</p>
            </div>
            <div className="mb-3">
              <label className="d-block label mb-1" htmlFor="">
                email
              </label>
              <input
                onChange={handleEmailChange}
                type="email"
                id="email"
                className="inp"
              />
              <p className="my-2 error">{mailError}</p>
            </div>
            <div className="mb-3">
              <label className="d-block label mb-1" htmlFor="password">
                password
              </label>
              <input
                onChange={handlePasswordChange}
                type="password"
                id="password"
                className="inp"
              />
              <p className="my-2 error">{passwordError}</p>
            </div>
            <div className="mb-3">
              <label className="d-block label mb-1" htmlFor="confirm">
                confirm password
              </label>
              <input
                onChange={handleConfirmPasswordChange}
                type="password"
                id="confirm"
                className="inp"
              />
              <p className="my-2 error">{confirmPasswordError}</p>
            </div>
            <div className="mb-3">
              <label className="d-block label mb-1" htmlFor="phone">
                phone
              </label>
              <input
                onChange={handlePhoneChange}
                type="number"
                id="phone"
                className="inp"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button onClick={(e) => handleClick(e)} className="btn">
                Create Account
              </button>
            </div>
          </form>
        )}

        <div className={`${style.imgContainer} col-12 col-md-6`}>
          <Lottie
            isClickToPauseDisabled
            options={defaultOptions}
            height="550px"
            width="80%"
          />
        </div>
      </div>
    </div>
  );
};

export default RegForm;
