import React, { useEffect, useState } from "react";
import AxiosInstance from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";
import { dateFormat } from "helpers/format/dateFormat";

const useForm = () => {
  const [nombreStat, setNombreStat] = useState({});
  const [voyageMostReserved, setVoyageMostReserved] = useState([]);
  const [voyageMostExist, setVoyageMostExist] = useState([]);
  const [reservationsPerMonth, setReservationsPerMonth] = useState([]);
  const [moyenTransportMostUsed, setMoyenTransportMostUsed] = useState([]);
  const [userMostReserved, setUserMostReserved] = useState([]);
  const [villeMostVisited, setVilleMostVisited] = useState([]);
  const [genreReservationCercle, setGenreReservationCercle] = useState([]);
  const [genreReservationsPerMonth, setGenreReservationsPerMonth] = useState(
    {}
  );

  const getState = () => {
    AxiosInstance.post("/stat", {
      date_start: formState.inputValues.date_start
        ? dateFormat(formState.inputValues.date_start)
        : null,
      date_finish: formState.inputValues.date_finish
        ? dateFormat(formState.inputValues.date_finish)
        : null,
    })
      .then((response) => {
        setNombreStat(response.data.nombreStat);
        setVoyageMostReserved(response.data.voyageMostReserved);
        setVoyageMostExist(response.data.voyageMostExist);
        setReservationsPerMonth(response.data.reservationsPerMonth);
        setMoyenTransportMostUsed(response.data.moyenTransportMostUsed);
        setUserMostReserved(response.data.userMostReserved);
        setVilleMostVisited(response.data.villeMostVisited);
        setGenreReservationCercle(response.data.genreReservationCercle);
        setGenreReservationsPerMonth(response.data.genreReservationsPerMonth);
      })
      .catch(() => {
        // alert("error");
      });
  };
  // formState is the data that we need
  const inputValues = {
    date_start: "",
    date_finish: "",
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
  } = FormState(inputValues, getState);

  useEffect(() => {
    getState();
  }, []);

  return {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
    voyageMostReserved,
    voyageMostExist,
    nombreStat,
    reservationsPerMonth,
    moyenTransportMostUsed,
    userMostReserved,
    villeMostVisited,
    genreReservationCercle,
    genreReservationsPerMonth,
  };
};

export default useForm;
