import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import FormState from "helpers/form/FormState";
import axios from "helpers/AxiosInstance";
import Swal from "sweetalert2";
import { calculatePages } from "helpers/pagination";
const useForm = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState("");
  const history = useHistory();

  const attributes = [
    { name: "email", title: "Email", type: "text", order: true },
  ];

  const actions = {};

  useEffect(() => {
    setNumberOfPage(calculatePages(dataLength, limit));
  }, [dataLength]);

  const getAllnewsletters = () => {
    axios
      .post("/getNewsletter", {
        search: formState.inputValues.search,
        order: order,
        limit: 5,
        page: currentPage,
      })
      .then((response) => {
        setNewsletters(response.data.data);
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
  } = FormState(inputValues, getAllnewsletters);

  useEffect(() => {
    getAllnewsletters();
  }, [currentPage, order]);

  return {
    formState,
    submitHandler,
    inputBlurHandler,
    inputChangeHandler,
    inputErrorHandler,
    serverMessage,
    newsletters,
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
