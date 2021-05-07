import React, { useState, useEffect } from "react";

import FormState from "helpers/form/FormState";
import axios from "helpers/AxiosInstance";
const useForm = () => {
  const [voyages, setVoyages] = useState([]);
  const getAllVoyage = () => {
    axios
      .post("/getAllVoyages", {
        lieu_depart: formState.inputValues.lieu_depart,
        lieu_arrive: formState.inputValues.lieu_arrive,
        dateDepart: formState.inputValues.dateDepart,
      })
      .then((response) => {
        console.log(response.data.voyages);
        setVoyages(response.data.voyages);
      })
      .catch((error) => {});
  };

  // formState is the data that we need
  const inputValues = {
    lieu_depart: "",
    lieu_arrive: "",
    dateDepart: "",
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
  } = FormState(inputValues, getAllVoyage);

  useEffect(() => {
    getAllVoyage();
  }, []);

  return {
    formState,
    submitHandler,
    inputBlurHandler,
    inputChangeHandler,
    inputErrorHandler,
    serverMessage,
    voyages,
  };
};

export default useForm;
