import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const useForm = () => {
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    if (location.params && location.params.id) {
      getUser();
    } else {
      history.push("/clients");
    }
  }, []);

  const getUser = () => {
    axios
      .post("/getUser", {
        id: location.params.id,
      })
      .then((response) => {
        let inputValues = {
          nom: response.data.data.nom,
          prenom: response.data.data.prenom,
          email: response.data.data.email,
          date_naissance: response.data.data.date_naissance,
          num_tel: response.data.data.num_tel,
          adresse: response.data.data.adresse,
        };
        updateFormState(inputValues);
      })
      .catch((error) => {
        history.push("/clients");
      });
  };
  const updateUser = () => {
    axios
      .post("/updateUser", {
        id: location.params.id,
        nom: formState.inputValues.nom,
        prenom: formState.inputValues.prenom,
        email: formState.inputValues.email,
        date_naissance: formState.inputValues.date_naissance,
        num_tel: formState.inputValues.num_tel,
        adresse: formState.inputValues.adresse,
      })
      .then((response) => {
        Swal.fire("Client modifié", "", "success");
      })
      .catch((error) => {
        Swal.fire(error.data, "", "error");
      });
  };
  // formState is the data that we need
  let inputValues = {
    nom: "",
    prenom: "",
    email: "",
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
    updateFormState,
  } = FormState(inputValues, updateUser);

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
