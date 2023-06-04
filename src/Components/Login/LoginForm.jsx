import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToken, dispatchLogin, addUserId } from "../../Redux/Auth";
import { useMutation } from "react-query";
import { request } from "../utils/axios-utils";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import Swal from "sweetalert2";
import * as animationData from "../../lotties/93385-login.json";
import Lottie from "react-lottie";
import { HashLink } from "react-router-hash-link";
const LoginForm = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const login = (data) => {
    return request({ url: "/user/login", method: "post", data });
  };
  const { isLoading, mutate } = useMutation(login, {
    onSuccess: (data) => {
      if (data?.data.status) {
        Swal.fire({
          position: "center",
          title: `Welcome ${data.data.user.name} You Login Successfully`,
          icon: "success",
        });
        dispatch(addToken(data.data.token));
        dispatch(addUserId(data.data.user.id));
        dispatch(dispatchLogin());
        navigate("/");
      }
    },
    onError: (data) => {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: data?.data.message,
      });
      setEmail("");
      setPassword("");
    },
  });
  const handleClick = (e) => {
    e.preventDefault();

    const mailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setEmailError(mailError);
    setPasswordError(passwordError);
    if (mailError || passwordError) {
      return;
    } else {
      const userData = { email, password };
      mutate(userData);
    }
  };

  return (
    <div className="container mt-5 py-5">
      <div className="row gap-5 align-items-center justify-content-center">
        <div className="col-12 col-md-4">
          {isLoading ? (
            <Spinner />
          ) : (
            <form className="px-4 py-2   mainForm">
              <p className="text-black-50 mb-3 text-center fw-bold fs-4">
                login
              </p>
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
              <p className="my-3 error ">{emailError}</p>
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
              <p className="my-3 error ">{passwordError}</p>
              <button
                onClick={handleClick}
                type="submit"
                className="d-flex justify-content-center align-items-center w-100 mx-auto btn"
              >
                Login
              </button>
              <div className="w-100 mt-4 d-flex justify-content-between align-items-center">
                <HashLink to="/forget" className="t-none text-black-50">
                  Forget Password ?
                </HashLink>
                <HashLink to="/reg" className="t-none text-black-50">
                  Create New Account ?{" "}
                </HashLink>
              </div>
            </form>
          )}
        </div>
        <div className="col-12 col-md-6">
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

export default LoginForm;
