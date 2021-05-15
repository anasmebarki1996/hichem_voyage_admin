import HeaderBar from "components/layouts/HeaderBar/HeaderBar";
import Input from "components/UI/Input/Input";
import Select from "components/UI/Select/Select";
import React from "react";
import useForm from "./useForm";

const UpdateVoyage = () => {
  const {
    formState,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler,
    resetFormState,
    agences,
    moyen_transport_list,
  } = useForm();
  return (
    <>
      <div className="content-wrapper">
        <HeaderBar title="Update Voyage" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="container-fluid">
                      <div className="container">
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Lieu de départ</label>
                            <Input
                              type="text"
                              id="lieu_depart"
                              name="lieu_depart"
                              placeholder="Lieu de départ ..."
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
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Lieu d'arrivée</label>
                            <Input
                              type="text"
                              id="lieu_arrive"
                              name="lieu_arrive"
                              placeholder="Lieu d'arrivée ..."
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
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Date de départ</label>
                            <Input
                              type="date"
                              id="date_depart"
                              name="date_depart"
                              placeholder="Date de départ ..."
                              inputHasErrors={
                                formState.inputHasErrors.date_depart
                              }
                              value={formState.inputValues.date_depart}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "date_depart",
                                  e.target.value,
                                  formState.inputHasErrors.date_depart,
                                  formState.inputVisited.date_depart
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("date_depart");
                              }}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Heure de départ</label>
                            <Input
                              type="time"
                              id="heure_depart"
                              name="heure_depart"
                              placeholder="Heure de départ ..."
                              inputHasErrors={
                                formState.inputHasErrors.heure_depart
                              }
                              value={formState.inputValues.heure_depart}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "heure_depart",
                                  e.target.value,
                                  formState.inputHasErrors.heure_depart,
                                  formState.inputVisited.heure_depart
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("heure_depart");
                              }}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Durée</label>
                            <Input
                              type="number"
                              id="duree"
                              name="duree"
                              placeholder="Durée (min)..."
                              inputHasErrors={formState.inputHasErrors.duree}
                              value={formState.inputValues.duree}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "duree",
                                  e.target.value,
                                  formState.inputHasErrors.duree,
                                  formState.inputVisited.duree
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("duree");
                              }}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Prix</label>
                            <Input
                              type="number"
                              id="prix"
                              name="prix"
                              placeholder="Prix ..."
                              inputHasErrors={formState.inputHasErrors.prix}
                              value={formState.inputValues.prix}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "prix",
                                  e.target.value,
                                  formState.inputHasErrors.prix,
                                  formState.inputVisited.prix
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("prix");
                              }}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">
                              Maximum de place
                            </label>
                            <Input
                              type="number"
                              id="max_place"
                              name="max_place"
                              placeholder="Maximum de place ..."
                              inputHasErrors={
                                formState.inputHasErrors.max_place
                              }
                              value={formState.inputValues.max_place}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "max_place",
                                  e.target.value,
                                  formState.inputHasErrors.max_place,
                                  formState.inputVisited.max_place
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("max_place");
                              }}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">
                              Moyen de transport
                            </label>
                            <Select
                              type="text"
                              id="moyen_transport"
                              name="moyen_transport"
                              placeholder="Moyen de transport ..."
                              inputHasErrors={
                                formState.inputHasErrors.moyen_transport
                              }
                              value={formState.inputValues.moyen_transport}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "moyen_transport",
                                  e.target.value,
                                  formState.inputHasErrors.moyen_transport,
                                  formState.inputVisited.moyen_transport
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("moyen_transport");
                              }}
                              data={moyen_transport_list}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Agence</label>
                            <Select
                              type="text"
                              id="agence_id"
                              name="agence_id"
                              placeholder="Agence ..."
                              inputHasErrors={
                                formState.inputHasErrors.agence_id
                              }
                              value={formState.inputValues.agence_id}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "agence_id",
                                  e.target.value,
                                  formState.inputHasErrors.agence_id,
                                  formState.inputVisited.agence_id
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("agence_id");
                              }}
                              data={agences}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-end">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={submitHandler}
                          >
                            Modifier
                          </button>
                        </div>
                      </div>
                    </div>
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

export default UpdateVoyage;
