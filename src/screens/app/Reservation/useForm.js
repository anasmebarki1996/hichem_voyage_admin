import React, { useState, useEffect } from "react";

import FormState from "helpers/form/FormState";
import axios from "helpers/AxiosInstance";
const useForm = () => {
  const [reservations, setReservations] = useState([]);
  const getAllReservation = () => {
    axios
      .post("/getAllReservation", {
        username: formState.inputValues.username,
        lieu_depart: formState.inputValues.lieu_depart,
        lieu_arrive: formState.inputValues.lieu_arrive,
        dateDepart: formState.inputValues.dateDepart,
      })
      .then((response) => {
        console.log(response.data.reservations);
        setReservations(response.data.reservations);
      })
      .catch((error) => {});
  };

  // formState is the data that we need
  const inputValues = {
    username: "",
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
  } = FormState(inputValues, getAllReservation);

  useEffect(() => {
    getAllReservation();
  }, []);

  return {
    formState,
    submitHandler,
    inputBlurHandler,
    inputChangeHandler,
    inputErrorHandler,
    serverMessage,
    reservations,
  };
};

export default useForm;
