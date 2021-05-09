import Input from "components/UI/Input/Input";
import React from "react";
import useForm from "./useForm";

const UpdateClientInformations = () => {
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
                  <label for="inputEmail4">Nom</label>
                  <Input
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Nom ..."
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
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Prenom</label>
                  <Input
                    type="text"
                    id="prenom"
                    name="prenom"
                    placeholder="Prénom ..."
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
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email ..."
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

                <div className="form-group col-md-6">
                  <label for="inputEmail4">Date de naissance</label>
                  <Input
                    type="date"
                    id="date_naissance"
                    name="date_naissance"
                    placeholder="Date de naissance ..."
                    inputHasErrors={formState.inputHasErrors.date_naissance}
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
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Numéro de téléphone</label>
                  <Input
                    type="text"
                    id="num_tel"
                    name="num_tel"
                    placeholder="Numéro de téléphone ..."
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
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Adresse</label>

                  <Input
                    type="text"
                    id="adresse"
                    name="adresse"
                    placeholder="Adresse ..."
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

export default UpdateClientInformations;
