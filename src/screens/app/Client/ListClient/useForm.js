import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FormState from "helpers/form/FormState";
import axios from "helpers/AxiosInstance";
import Swal from "sweetalert2";
import { calculatePages } from "helpers/pagination";
const useForm = () => {
  const [clients, setClients] = useState([]);
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
      name: "date_naissance",
      title: "Date de naissance",
      type: "date",
      order: true,
    },
    { name: "email", title: "Email", type: "text", order: false },
    {
      name: "num_tel",
      title: "Numéro de téléphone",
      type: "text",
      order: true,
    },
    { name: "adresse", title: "Adresse", type: "text", order: true },
  ];

  const onDelete = (user_id) => {
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
          .post("/deleteUser", {
            user_id: user_id,
          })
          .then((response) => {
            getAllUsers();
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

  const getAllUsers = () => {
    axios
      .post("/getAllUsers", {
        search: formState.inputValues.search,
        order: order,
        limit: 5,
        page: currentPage,
      })
      .then((response) => {
        setClients(response.data.data);
        setDataLength(response.data.dataLength);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // formState is the data that we need
  const inputValues = {
    search: "",
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
  } = FormState(inputValues, getAllUsers);

  useEffect(() => {
    getAllUsers();
  }, [currentPage, order]);

  return {
    formState,
    submitHandler,
    inputBlurHandler,
    inputChangeHandler,
    inputErrorHandler,
    serverMessage,
    clients,
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
