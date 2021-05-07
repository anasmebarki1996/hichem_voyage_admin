import HeaderBar from "components/layouts/HeaderBar/HeaderBar";
import Input from "components/UI/Input/Input";
import React from "react";
import useForm from "./useForm";

const UpdateClient = () => {
  const {
    formState,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler,
    resetFormState,
  } = useForm();
  return (
    <>
      <div class="content-wrapper">
        <HeaderBar title="Update Client" />
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header border-0">
                    <div className="container-fluid">
                      <div className="container">
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">nom</label>
                            <Input
                              type="text"
                              id="nom"
                              name="nom"
                              placeholder="Entrer an nom"
                              inputHasErrors={formState.inputHasErrors.nom}
                              value={formState.inputValues.nom}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "nom",
                                  e.target.value,
                                  formState.inputHasErrors.nom,
                                  formState.inputVisited.nom
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("nom");
                              }}
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">prenom</label>
                            <Input
                              type="text"
                              id="prenom"
                              name="prenom"
                              placeholder="Entrer an prenom"
                              inputHasErrors={formState.inputHasErrors.prenom}
                              value={formState.inputValues.prenom}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "prenom",
                                  e.target.value,
                                  formState.inputHasErrors.prenom,
                                  formState.inputVisited.prenom
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("prenom");
                              }}
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">email</label>
                            <Input
                              type="text"
                              id="email"
                              name="email"
                              placeholder="Entrer an email"
                              inputHasErrors={formState.inputHasErrors.email}
                              value={formState.inputValues.email}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "email",
                                  e.target.value,
                                  formState.inputHasErrors.email,
                                  formState.inputVisited.email
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("email");
                              }}
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">password</label>
                            <Input
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Entrer an password"
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
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">
                              password confirmation
                            </label>
                            <Input
                              type="password"
                              id="password_confirm"
                              name="password_confirm"
                              placeholder="Entrer an password confirmation"
                              inputHasErrors={
                                formState.inputHasErrors.password_confirm
                              }
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
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">date_naissance</label>
                            <Input
                              type="date"
                              id="date_naissance"
                              name="date_naissance"
                              placeholder="Entrer an password date de naissance"
                              inputHasErrors={
                                formState.inputHasErrors.date_naissance
                              }
                              value={formState.inputValues.date_naissance}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "date_naissance",
                                  e.target.value,
                                  formState.inputHasErrors.date_naissance,
                                  formState.inputVisited.date_naissance
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("date_naissance");
                              }}
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">num tel</label>
                            <Input
                              type="text"
                              id="num_tel"
                              name="num_tel"
                              placeholder="Entrer an password num_tel de num_tel"
                              inputHasErrors={formState.inputHasErrors.num_tel}
                              value={formState.inputValues.num_tel}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "num_tel",
                                  e.target.value,
                                  formState.inputHasErrors.num_tel,
                                  formState.inputVisited.num_tel
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("num_tel");
                              }}
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">adresse</label>

                            <Input
                              type="text"
                              id="adresse"
                              name="adresse"
                              placeholder="Entrer an password adresse de adresse"
                              inputHasErrors={formState.inputHasErrors.adresse}
                              value={formState.inputValues.adresse}
                              onChange={(e) => {
                                inputChangeHandler(
                                  "adresse",
                                  e.target.value,
                                  formState.inputHasErrors.adresse,
                                  formState.inputVisited.adresse
                                );
                              }}
                              onBlur={() => {
                                inputBlurHandler("adresse");
                              }}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-end">
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={submitHandler}
                          >
                            Ajouter
                          </button>
                          <button
                            type="button"
                            class="btn btn-light"
                            onClick={resetFormState}
                          >
                            Initialiser
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

export default UpdateClient;
