import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FormState from "helpers/form/FormState";
import AxiosInstance from "helpers/AxiosInstance";
import Swal from "sweetalert2";
import { calculatePages } from "helpers/pagination";
const useForm = () => {
  const [voyages, setVoyages] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState("");
  const history = useHistory();

  const attributes = [
    {
      name: "moyen_transport",
      title: "Moyen de transport",
      type: "text",
      order: true,
    },
    { name: "date_depart", title: "Date de départ", type: "date", order: true },
    {
      name: "heure_depart",
      title: "Heure de départ",
      type: "heure",
      order: true,
    },
    { name: "lieu_depart", title: "Lieu de départ", type: "text", order: true },
    {
      name: "lieu_arrive",
      title: "Lieu d'arrrivée",
      type: "text",
      order: true,
    },
    {
      name: "place_reserve",
      title: "Places réservés",
      type: "text",
      order: true,
    },
    { name: "max_place", title: "Max de place", type: "text", order: true },
  ];

  const onDelete = (voyage_id) => {
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
        AxiosInstance.post("/deleteVoyage", {
          voyage_id: voyage_id,
        })
          .then((response) => {
            getAllVoyages();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const onUpdate = (voyage_id) => {
    history.push({
      pathname: "/update-voyage",
      params: {
        id: voyage_id,
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

  const getAllVoyages = () => {
    AxiosInstance.post("/getAllVoyages", {
      lieu_depart: formState.inputValues.lieu_depart,
      lieu_arrive: formState.inputValues.lieu_arrive,
      dateDepart: formState.inputValues.dateDepart,
      order: order,
      limit: 5,
      page: currentPage,
    })
      .then((response) => {
        setVoyages(response.data.data);
        setDataLength(response.data.dataLength);
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
  } = FormState(inputValues, getAllVoyages);

  useEffect(() => {
    getAllVoyages();
  }, [currentPage, order]);

  return {
    formState,
    submitHandler,
    inputBlurHandler,
    inputChangeHandler,
    inputErrorHandler,
    serverMessage,
    voyages,
    currentPage,
    setCurrentPage,
    numberOfPage,
    order,
    setOrder,
    actions,
    attributes,
  };
};

export default useForm;
