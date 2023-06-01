import React from "react";
import Website from "../Components/Layouts/WebsiteLayout/Website.jsx";
import LoginForm from "../Components/Login/LoginForm.jsx";
const Login = ({ api }) => {
  return (
    <div>
      <Website>
        <div className="row justify-content-center pt-5">
          {" "}
          <LoginForm api={api} />
        </div>
      </Website>
    </div>
  );
};

export default Login;
