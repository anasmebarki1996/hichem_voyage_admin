import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import { dateFormat } from "helpers/format/dateFormat";

const Reservation = () => {
  const {
    formState,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler,
    reservations,
  } = useForm();
  return (
    <>
      <div class="content-wrapper">
        <HeaderBar title="Reservation" />
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header border-0">
                    <div className="container-fluid">
                      <div className="row justify-content-center">
                        <div className="col-12 col-md-2">
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            name="username"
                            placeholder="Entrer an username"
                            inputHasErrors={formState.inputHasErrors.username}
                            value={formState.inputValues.username}
                            onChange={(e) => {
                              inputChangeHandler(
                                "username",
                                e.target.value,
                                formState.inputHasErrors.username,
                                formState.inputVisited.username
                              );
                            }}
                            onBlur={() => {
                              inputBlurHandler("username");
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-2">
                          <input
                            type="text"
                            class="form-control"
                            id="lieu_depart"
                            name="lieu_depart"
                            placeholder="Entrer an lieu_depart"
                            inputHasErrors={
                              formState.inputHasErrors.lieu_depart
                            }
                            value={formState.inputValues.lieu_depart}
                            onChange={(e) => {
                              inputChangeHandler(
                                "lieu_depart",
                                e.target.value,
                                formState.inputHasErrors.lieu_depart,
                                formState.inputVisited.lieu_depart
                              );
                            }}
                            onBlur={() => {
                              inputBlurHandler("lieu_depart");
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-2">
                          <input
                            type="text"
                            class="form-control"
                            id="lieu_arrive"
                            name="lieu_arrive"
                            placeholder="Entrer an lieu_arrive"
                            inputHasErrors={
                              formState.inputHasErrors.lieu_arrive
                            }
                            value={formState.inputValues.lieu_arrive}
                            onChange={(e) => {
                              inputChangeHandler(
                                "lieu_arrive",
                                e.target.value,
                                formState.inputHasErrors.lieu_arrive,
                                formState.inputVisited.lieu_arrive
                              );
                            }}
                            onBlur={() => {
                              inputBlurHandler("lieu_arrive");
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-2">
                          <input
                            type="date"
                            class="form-control"
                            id="dateDepart"
                            name="dateDepart"
                            placeholder="Entrer an dateDepart"
                            inputHasErrors={formState.inputHasErrors.dateDepart}
                            value={formState.inputValues.dateDepart}
                            onChange={(e) => {
                              inputChangeHandler(
                                "dateDepart",
                                e.target.value,
                                formState.inputHasErrors.dateDepart,
                                formState.inputVisited.dateDepart
                              );
                            }}
                            onBlur={() => {
                              inputBlurHandler("dateDepart");
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-2">
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={submitHandler}
                          >
                            Confirm identity
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body table-responsive p-0">
                    <table class="table table-striped table-valign-middle">
                      <thead>
                        <tr>
                          <th>Adhérent</th>
                          <th>moyen de transport</th>
                          <th>Date départ</th>
                          <th>Heure départ</th>
                          <th>Ville départ</th>
                          <th>Ville d'arrivée</th>
                          <th>Nombre de place </th>
                          <th>Prix </th>
                        </tr>
                      </thead>
                      <tbody>
                        {reservations.map((reservation) => {
                          return (
                            <tr key={reservation.id}>
                              <td>
                                {reservation.nom} {reservation.prenom}
                              </td>
                              <td>{reservation.moyen_transport}</td>
                              <td>{dateFormat(reservation.date_depart)}</td>
                              <td>{reservation.heure_depart}</td>
                              <td>{reservation.lieu_depart}</td>
                              <td>{reservation.lieu_arrive}</td>
                              <td>{reservation.nombre_place}</td>
                              <td>{reservation.prix} DA</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {reservations.length === 0 && (
                      <div className="justify-content-center w-100">
                        <h1 className="text-center">
                          aucune reservation disponible
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
