import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import { dateFormat } from "helpers/format/dateFormat";
import HeaderBar from "components/layouts/HeaderBar/HeaderBar";
import Table from "components/Table/Table";

const ListClient = () => {
  const {
    formState,
    loading,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler,
    clients,
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
      <div class="content-wrapper">
        <HeaderBar title="Clients" />
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
                            id="search"
                            name="search"
                            placeholder="Rechercher"
                            inputHasErrors={formState.inputHasErrors.search}
                            value={formState.inputValues.search}
                            onChange={(e) => {
                              inputChangeHandler(
                                "search",
                                e.target.value,
                                formState.inputHasErrors.search,
                                formState.inputVisited.search
                              );
                            }}
                            onBlur={() => {
                              inputBlurHandler("search");
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-2">
                          <button
                            type="button"
                            class="btn btn-primary"
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
                    data={clients}
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

export default ListClient;
