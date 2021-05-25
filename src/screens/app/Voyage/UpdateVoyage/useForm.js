import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const useForm = () => {
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    console.log(location.params);
    if (location.params && location.params.id) {
      getVoyage();
    } else {
      history.push("/voyages");
    }
  }, []);
  const [agences, setAgences] = useState([]);
  const [moyen_transport_list, setMoyen_transport_list] = useState([
    { id: "avion", value: "Avion" },
    { id: "taxi", value: "Taxi" },
    { id: "train", value: "Train" },
    { id: "bus", value: "Bus" },
  ]);

  // const getAgencesList = () => {
  //   axios
  //     .post("/getAgencesList")
  //     .then((response) => {
  //       setAgences(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getAgencesList();
  // }, []);

  const getVoyage = () => {
    axios
      .post("/getVoyage", {
        id: location.params.id,
      })
      .then((response) => {
        let inputValues = {
          lieu_depart: response.data.data.lieu_depart,
          lieu_arrive: response.data.data.lieu_arrive,
          date_depart: response.data.data.date_depart,
          heure_depart: response.data.data.heure_depart,
          duree: response.data.data.duree,
          prix: response.data.data.prix,
          max_place: response.data.data.max_place,
          moyen_transport: response.data.data.moyen_transport,
          // agence_id: response.data.data.agence_id,
        };
        updateFormState(inputValues);
      })
      .catch((error) => {
        history.push("/voyages");
      });
  };

  const updateVoyage = () => {
    axios
      .post("/updateVoyage", {
        voyage_id: location.params.voyage_id,
        lieu_depart: formState.inputValues.lieu_depart,
        lieu_arrive: formState.inputValues.lieu_arrive,
        date_depart: formState.inputValues.date_depart,
        heure_depart: formState.inputValues.heure_depart,
        duree: formState.inputValues.duree,
        prix: formState.inputValues.prix,
        max_place: formState.inputValues.max_place,
        moyen_transport: formState.inputValues.moyen_transport,
        // agence_id: formState.inputValues.agence_id,
      })
      .then((response) => {
        Swal.fire("Voyage modifié", "", "success");
      })
      .catch((error) => {
        Swal.fire(error.data, "", "error");
      });
  };
  // formState is the data that we need
  let inputValues = {
    lieu_depart: "",
    lieu_arrive: "",
    date_depart: "",
    heure_depart: "",
    duree: "",
    prix: "",
    max_place: "",
    moyen_transport: "",
    // agence_id: "",
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
  } = FormState(inputValues, updateVoyage);

  return {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
    agences,
    moyen_transport_list,
  };
};

export default useForm;
