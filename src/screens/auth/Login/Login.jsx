import React from "react";
import { Link } from "react-router-dom";

import useForm from "./useForm";
import "./Login.css";

const Login = () => {
  const {
    formState,
    inputChangeHandler,
    submitHandler,
    inputBlurHandler,
    serverMessage,
  } = useForm();

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b>agencyyyyyyyyy
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Entrer an email"
                  inputHasErrors={formState.inputHasErrors.email}
                  value={formState.inputValues.email}
                  onChange={(e) => {
                    inputChangeHandler(
                      e.target.name,
                      e.target.value,
                      formState.inputHasErrors.email,
                      formState.inputVisited.email
                    );
                  }}
                  onBlur={() => {
                    inputBlurHandler("email");
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Entrer your password"
                  inputHasErrors={formState.inputHasErrors.password}
                  value={formState.inputValues.password}
                  onChange={(e) => {
                    inputChangeHandler(
                      e.target.name,
                      e.target.value,
                      formState.inputHasErrors.password,
                      formState.inputVisited.password
                    );
                  }}
                  onBlur={() => {
                    inputBlurHandler("password");
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="social-auth-links text-center mb-3">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={submitHandler}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
