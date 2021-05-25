import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import * as authActions from "store/auth/authAction";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormState from "helpers/form/FormState";

const useForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = () => {
    setServerMessage({});
    axios
      .post("/login", {
        email: formState.inputValues.email,
        password: formState.inputValues.password,
      })
      .then((response) => {
        setServerMessage({});
        console.log(response);
        resetFormState();
        // token
        dispatch(
          authActions.loginSuccess(
            response.access_token,
            response.expires_in,
            response.nom + " " + response.prenom
          )
        );
        history.push("/");
      })
      .catch((error) => {
        if (error.status === 422) {
          inputErrorHandler(error.data);
        } else {
          setServerMessage({ error: error.data });
        }
      });
  };

  // formState is the data that we need
  const inputValues = {
    email: "hichem.mebarki@outlook.fr",
    password: "123456",
  };

  // serverMessage is the messages coming from the server api
  const [serverMessage, setServerMessage] = useState({
    error: "",
    success: "",
  });

  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
  } = FormState(inputValues, login);

  return {
    formState,
    inputChangeHandler,
    submitHandler,
    inputBlurHandler,
    serverMessage,
  };
};

export default useForm;
