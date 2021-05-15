import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";
import Swal from "sweetalert2";

import wilayas from "constants/wilayas";

const useForm = () => {
  const [agences, setAgences] = useState([]);
  const [moyen_transport_list, setMoyen_transport_list] = useState([
    { id: "avion", value: "Avion" },
    { id: "taxi", value: "Taxi" },
    { id: "train", value: "Train" },
    { id: "bus", value: "Bus" },
  ]);

  const getAgencesList = () => {
    axios
      .post("/getAgencesList")
      .then((response) => {
        setAgences(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAgencesList();
  }, []);

  const createVoyage = () => {
    axios
      .post("/createVoyage", {
        lieu_depart: formState.inputValues.lieu_depart,
        lieu_arrive: formState.inputValues.lieu_arrive,
        date_depart: formState.inputValues.date_depart,
        heure_depart: formState.inputValues.heure_depart,
        duree: formState.inputValues.duree,
        prix: formState.inputValues.prix,
        max_place: formState.inputValues.max_place,
        moyen_transport: formState.inputValues.moyen_transport,
        agence_id: formState.inputValues.agence_id,
      })
      .then((response) => {
        Swal.fire("Voyage ajouté", "", "success");
        resetFormState();
      })
      .catch((error) => {
        Swal.fire(error.data, "", "error");
      });
  };
  // formState is the data that we need
  const inputValues = {
    lieu_depart: "",
    lieu_arrive: "",
    date_depart: "",
    heure_depart: "",
    duree: "",
    prix: "",
    max_place: "",
    moyen_transport: "",
    agence_id: "",
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
  } = FormState(inputValues, createVoyage);

  return {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
    agences,
    moyen_transport_list,
    wilayas,
  };
};

export default useForm;
