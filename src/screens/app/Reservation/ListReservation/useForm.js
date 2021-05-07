import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FormState from "helpers/form/FormState";
import axios from "helpers/AxiosInstance";
import Swal from "sweetalert2";
import { calculatePages } from "helpers/pagination";
const useForm = () => {
  const [reservations, setReservations] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState("");
  const history = useHistory();

  const attributes = [
    { name: "nom", title: "Nom", type: "text", order: true },
    { name: "prenom", title: "Prénom", type: "text", order: true },
    {
      name: "prix",
      title: "prix",
      type: "text",
      order: true,
    },
    { name: "duree", title: "duree", type: "text", order: true },
    {
      name: "date_reservation",
      title: "date_reservation",
      type: "date",
      order: true,
    },
    {
      name: "heure_reservation",
      title: "heure_reservation",
      type: "heure",
      order: true,
    },
    { name: "nombre_place", title: "nombre_place", type: "text", order: true },
    { name: "status", title: "status", type: "text", order: true },
    { name: "date_depart", title: "date_depart", type: "date", order: true },
    { name: "lieu_depart", title: "lieu_depart", type: "text", order: true },
    { name: "lieu_arrive", title: "lieu_arrive", type: "text", order: true },
    { name: "adresse", title: "Adresse", type: "text", order: true },
    { name: "max_place", title: "max_place", type: "text", order: true },
  ];

  const onDelete = (reservation_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("/deleteReservation", {
            reservation_id: reservation_id,
          })
          .then((response) => {
            getAllreservations();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const onUpdate = (user_id) => {
    history.push({
      pathname: "/update-client",
      params: {
        id: user_id,
      },
    });
  };

  const actions = {
    details: null,
    delete: onDelete,
    update: onUpdate,
  };

  useEffect(() => {
    setNumberOfPage(calculatePages(dataLength, limit));
  }, [dataLength]);

  const getAllreservations = () => {
    axios
      .post("/getAllreservations", {
        search: formState.inputValues.search,
        order: order,
        limit: 5,
        page: currentPage,
      })
      .then((response) => {
        setReservations(response.data.data);
        setDataLength(response.data.dataLength);
      })
      .catch((error) => {
        console.log(error);
      });
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
    loading,
  } = FormState(inputValues, getAllreservations);

  useEffect(() => {
    getAllreservations();
  }, [currentPage, order]);

  return {
    formState,
    submitHandler,
    inputBlurHandler,
    inputChangeHandler,
    inputErrorHandler,
    serverMessage,
    reservations,
    currentPage,
    setCurrentPage,
    numberOfPage,
    loading,
    order,
    setOrder,
    actions,
    attributes,
  };
};

export default useForm;
