import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const useForm = () => {
  let history = useHistory();
  let location = useLocation();

  const updateUserPassword = () => {
    axios
      .post("/updateUserPassword", {
        user_id: location.params.id,
        password: formState.inputValues.password,
      })
      .then((response) => {
        Swal.fire("mot de passe modifié", "", "success");
      })
      .catch((error) => {
        Swal.fire(error.data, "", "error");
      });
  };
  // formState is the data that we need
  let inputValues = {
    password: "",
    password_confirm: "",
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
    updateFormState,
  } = FormState(inputValues, updateUserPassword);

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
