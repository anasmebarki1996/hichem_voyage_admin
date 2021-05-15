import React, { useEffect, useState } from "react";
import AxiosInstance from "helpers/AxiosInstance";

const useForm = () => {
  const [nombreStat, setNombreStat] = useState({});
  const [voyageMostReserved, setVoyageMostReserved] = useState([]);
  const [voyageMostExist, setVoyageMostExist] = useState([]);
  const [reservationsPerMonth, setReservationsPerMonth] = useState([]);
  const [moyenTransportMostUsed, setMoyenTransportMostUsed] = useState([]);
  const [userMostReserved, setUserMostReserved] = useState([]);
  const [villeMostVisited, setVilleMostVisited] = useState([]);

  useEffect(() => {
    getState();
  }, []);

  const getState = () => {
    AxiosInstance.get("/stat")
      .then((response) => {
        setNombreStat(response.data.nombreStat);
        setVoyageMostReserved(response.data.voyageMostReserved);
        setVoyageMostExist(response.data.voyageMostExist);
        setReservationsPerMonth(response.data.reservationsPerMonth);
        setMoyenTransportMostUsed(response.data.moyenTransportMostUsed);
        setUserMostReserved(response.data.userMostReserved);
        setVilleMostVisited(response.data.villeMostVisited);
      })
      .catch(() => {
        alert("error");
      });
  };
  return {
    voyageMostReserved,
    voyageMostExist,
    nombreStat,
    reservationsPerMonth,
    moyenTransportMostUsed,
    userMostReserved,
    villeMostVisited,
  };
};

export default useForm;
