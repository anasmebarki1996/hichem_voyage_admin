import React from "react";
import { Link } from "react-router-dom";

import useForm from "./useForm";
import "./Login.css";
import Input from "components/UI/Input/Input";

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
          <b>Admin</b>Voyage
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Veuillez introduire vos données</p>

            <div>
              <Input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email ..."
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
              <Input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password ..."
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

              <div className="social-auth-links text-center mb-3">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={submitHandler}
                >
                  Connexion
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
