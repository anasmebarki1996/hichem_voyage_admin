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
import Input from "components/UI/Input/Input";
import GenreReservationsPerMonth from "./Cards/GenreReservationsPerMonth";
import GenreReservationCercle from "./Cards/GenreReservationCercle";

const Dashboard = () => {
  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    inputErrorHandler,
    submitHandler,
    resetFormState,
    nombreStat,
    voyageMostReserved,
    voyageMostExist,
    reservationsPerMonth,
    moyenTransportMostUsed,
    userMostReserved,
    villeMostVisited,
    genreReservationCercle,
    genreReservationsPerMonth,
  } = useForm();
  return (
    <>
      <div className="content-wrapper">
        <HeaderBar title="Dashboard" />
        <div className="content">
          <div className="container-fluid">
            <HeaderCards data={nombreStat} />
            <div className="row ">
              <div className="container">
                <div className="row ">
                  <div className="col-md-4">
                    <Input
                      type="date"
                      id="date_start"
                      name="date_start"
                      inputHasErrors={formState.inputHasErrors.date_start}
                      value={formState.inputValues.date_start}
                      onChange={(e) => {
                        inputChangeHandler(
                          "date_start",
                          e.target.value,
                          formState.inputHasErrors.date_start,
                          formState.inputVisited.date_start
                        );
                      }}
                      onBlur={() => {
                        inputBlurHandler("date_start");
                      }}
                    />
                  </div>
                  <div className="col-md-4">
                    <Input
                      type="date"
                      id="date_finish"
                      name="date_finish"
                      inputHasErrors={formState.inputHasErrors.date_finish}
                      value={formState.inputValues.date_finish}
                      onChange={(e) => {
                        inputChangeHandler(
                          "date_finish",
                          e.target.value,
                          formState.inputHasErrors.date_finish,
                          formState.inputVisited.date_finish
                        );
                      }}
                      onBlur={() => {
                        inputBlurHandler("date_finish");
                      }}
                    />
                  </div>
                  <div className="col-md-4 d-flex justify-content-end align-items-center">
                    <button
                      className="btn btn-success w-50 mr-2"
                      type="button"
                      onClick={submitHandler}
                    >
                      Rechercher
                    </button>
                    <button
                      className="btn btn-info w-50 mr-2"
                      type="button"
                      onClick={resetFormState}
                    >
                      Reinstalliser
                    </button>
                  </div>
                </div>
              </div>

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
              <div className="col-lg-6 d-flex align-items-stretch">
                <GenreReservationsPerMonth data={genreReservationsPerMonth} />
              </div>
              <div className="col-lg-6 d-flex align-items-stretch">
                <GenreReservationCercle data={genreReservationCercle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
