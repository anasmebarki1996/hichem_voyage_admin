import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import { dateFormat } from "helpers/format/dateFormat";
import HeaderBar from "components/layouts/HeaderBar/HeaderBar";
import Table from "components/Table/Table";
import Input from "components/UI/Input/Input";

const ListVoyage = () => {
  const {
    formState,
    loading,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler,
    voyages,
    currentPage,
    numberOfPage,
    setCurrentPage,
    setOrder,
    order,
    actions,
    attributes,
  } = useForm();

  return (
    <>
      <div className="content-wrapper">
        <HeaderBar title="Voyages" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="container-fluid">
                      <div className="row justify-content-center">
                        <div className="col-12 col-md-2">
                          <Input
                            type="text"
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
                          <Input
                            type="text"
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
                          <Input
                            type="date"
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
                        <div className="col-12 col-md-2 button_center">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={submitHandler}
                          >
                            Rechercher
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Table
                    attributes={attributes}
                    actions={actions}
                    data={voyages}
                    loading={loading}
                    search={submitHandler}
                    numberOfPage={numberOfPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setOrder={setOrder}
                    order={order}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListVoyage;
