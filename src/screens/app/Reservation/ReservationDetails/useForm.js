import React, { useState, useEffect } from "react";
import axios from "helpers/AxiosInstance";
import FormState from "helpers/form/FormState";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const useForm = () => {
  let history = useHistory();
  let location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    if (location.params && location.params.id) {
      getReservation();
    } else {
      history.push("/reservations");
    }
  }, []);

  const getReservation = () => {
    axios
      .post("/getReservation", {
        id: location.params.id,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        history.push("/reservations");
      });
  };

  return { data };
};

export default useForm;
