import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import { dateFormat } from "helpers/format/dateFormat";
import HeaderBar from "components/layouts/HeaderBar/HeaderBar";
import Table from "components/Table/Table";

const Newsletter = () => {
  const {
    formState,
    loading,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler,
    newsletters,
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
        <HeaderBar title="Newsletter" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header border-0">
                    <div className="container-fluid">
                      <div className="row justify-content-center">
                        <div className="col-12 col-md-2">
                          <input
                            type="text"
                            className="form-control"
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
                    data={newsletters}
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

export default Newsletter;
