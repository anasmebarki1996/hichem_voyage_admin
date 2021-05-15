import React from "react";
import HeaderBar from "components/layouts/HeaderBar/HeaderBar";
import HeaderCards from "./Cards/HeaderCards";
import MoyentTransportMostUsed from "./Cards/MoyentTransportMostUsed";
import ReservationByMonths from "./Cards/ReservationByMonths";
import TrajetMostReserved from "./Cards/TrajetMostReserved";
import UserMostReserved from "./Cards/UserMostReserved";
import VilleMostVisited from "./Cards/VilleMostVisited";
import VoyageMostExist from "./Cards/VoyageMostExist";
import useForm from "./useForm";

const Dashboard = () => {
  const {
    nombreStat,
    voyageMostReserved,
    voyageMostExist,
    reservationsPerMonth,
    moyenTransportMostUsed,
    userMostReserved,
    villeMostVisited,
  } = useForm();
  return (
    <>
      <div className="content-wrapper">
        <HeaderBar title="Dashboard" />

        <div className="content">
          <div className="container-fluid">
            <HeaderCards data={nombreStat} />
            <div className="row ">
              <div className="col-lg-6 d-flex align-items-stretch">
                <TrajetMostReserved data={voyageMostReserved} />
              </div>
              <div className="col-lg-6 d-flex align-items-stretch">
                <VoyageMostExist data={voyageMostExist} />
              </div>
              <div className="col-lg-6 d-flex align-items-stretch">
                <ReservationByMonths data={reservationsPerMonth} />
              </div>
              <div className="col-lg-6 d-flex align-items-stretch">
                <MoyentTransportMostUsed data={moyenTransportMostUsed} />
              </div>
              <div className="col-lg-6 d-flex align-items-stretch">
                <UserMostReserved data={userMostReserved} />
              </div>
              <div className="col-lg-6 d-flex align-items-stretch">
                <VilleMostVisited data={villeMostVisited} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
