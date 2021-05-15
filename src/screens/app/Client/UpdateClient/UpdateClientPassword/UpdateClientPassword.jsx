import Input from "components/UI/Input/Input";
import React from "react";
import useForm from "./useForm";

const UpdateClientPassword = () => {
  const {
    formState,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler,
    resetFormState,
  } = useForm();
  return (
    <>
      <div className="card">
        <div className="card-header border-0">
          <div className="container-fluid">
            <div className="container">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Password</label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password ..."
                    inputHasErrors={formState.inputHasErrors.password}
                    value={formState.inputValues.password}
                    onChange={(e) => {
                      inputChangeHandler(
                        "password",
                        e.target.value,
                        formState.inputHasErrors.password,
                        formState.inputVisited.password
                      );
                    }}
                    onBlur={() => {
                      inputBlurHandler("password");
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Confirmation password</label>
                  <Input
                    type="password"
                    id="password_confirm"
                    name="password_confirm"
                    placeholder="Confirmation password ..."
                    inputHasErrors={formState.inputHasErrors.password_confirm}
                    value={formState.inputValues.password_confirm}
                    onChange={(e) => {
                      inputChangeHandler(
                        "password_confirm",
                        e.target.value,
                        formState.inputHasErrors.password_confirm,
                        formState.inputVisited.password_confirm
                      );
                    }}
                    onBlur={() => {
                      inputBlurHandler("password_confirm");
                    }}
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
    </>
  );
};

export default UpdateClientPassword;
