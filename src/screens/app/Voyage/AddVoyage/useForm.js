import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";

const useForm = () => {
  const register = () => {
    axios
      .post("/register", {
        nom: formState.inputValues.nom,
        prenom: formState.inputValues.prenom,
        email: formState.inputValues.email,
        password: formState.inputValues.password,
        date_naissance: formState.inputValues.date_naissance,
        num_tel: formState.inputValues.num_tel,
        adresse: formState.inputValues.adresse,
      })
      .then((response) => {
        resetFormState();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // formState is the data that we need
  const inputValues = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    password_confirm: "",
    date_naissance: "",
    num_tel: "",
    adresse: "",
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
  } = FormState(inputValues, register);

  return {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
  };
};

export default useForm;
