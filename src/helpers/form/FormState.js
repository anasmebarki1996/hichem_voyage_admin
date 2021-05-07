import React, { useState, useEffect } from "react";
import {
  inputValidator,
  passwordConfirmationValidator,
} from "helpers/validators";

const FormState = (form, submitFunction) => {
  const initForm = (form) => {
    let inputValues = { ...form };
    let inputHasErrors = { ...form };
    let inputVisited = { ...form };

    for (let key in form) {
      inputHasErrors = {
        ...inputHasErrors,
        [key]: form[key] ? inputValidator(key, form[key]) : "",
      };
      inputVisited = { ...inputHasErrors, [key]: form[key] ? true : false };
    }

    return {
      inputValues: { ...inputValues },
      inputHasErrors: { ...inputHasErrors },
      inputVisited: { ...inputVisited },
      formIsValid: false,
    };
  };

  // formState is the data that we need
  const [formState, setFormState] = useState(initForm(form));
  // isSubmitting changes when we click on submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  // isSubmitting changes when we click on submit
  const [loading, setLoading] = useState(false);

  // inputChangeHandler activate when we type on input
  const inputChangeHandler = (inputIdentifier, value, hasError, visited) => {
    const updatedValues = {
      ...formState.inputValues,
      [inputIdentifier]: value,
    };

    if (visited) {
      hasError = inputValidator(inputIdentifier, value);
      console.log("has error : " + hasError);
      if (inputIdentifier === "password_confirm" && !hasError) {
        hasError = passwordConfirmationValidator(
          value,
          formState.inputValues.password
        );
      }
    }

    const updateHasErrors = {
      ...formState.inputHasErrors,
      [inputIdentifier]: hasError,
    };

    const updateVisited = {
      ...formState.inputVisited,
      [inputIdentifier]: visited,
    };

    let updatedFormIsValid = true;
    for (const key in updateHasErrors) {
      updatedFormIsValid = updatedFormIsValid && !updateHasErrors[key];
    }

    setFormState({
      inputValues: updatedValues,
      inputHasErrors: updateHasErrors,
      inputVisited: updateVisited,
      formIsValid: updatedFormIsValid,
    });
  };

  // inputChangeHandler activate when we exit the input to validate the data inserted
  const inputBlurHandler = (inputIdentifier) => {
    const value = formState.inputValues[inputIdentifier];
    const hasError = formState.inputHasErrors[inputIdentifier];
    inputChangeHandler(inputIdentifier, value, hasError, true);
  };

  // to check email and password validities if they are saved
  const formVerifyHandler = () => {
    const values = { ...formState.inputValues };
    let errors = {},
      errorText;

    for (const key in values) {
      errorText = inputValidator(key, values[key]);
      if (key === "password_confirm" && !errorText) {
        errorText = passwordConfirmationValidator(values[key], values.password);
      }
      if (errorText) errors = { ...errors, [key]: errorText };
    }

    setFormState({
      ...formState,
      inputHasErrors: errors,
      formIsValid: Object.keys(errors).length ? false : true,
    });
  };

  // submit form
  const submitHandler = () => {
    setIsSubmitting(true);
    formVerifyHandler();
  };

  const inputErrorHandler = (errors) => {
    setFormState((prevState) => {
      return { ...prevState, ...errors };
    });
  };

  const resetFormState = () => {
    let updatedValues = {};
    let updateHasErrors = {};
    let updateVisited = {};

    for (let key in form) {
      updatedValues = { ...updatedValues, [key]: "" };
      updateHasErrors = { ...updateHasErrors, [key]: "" };
      updateVisited = { ...updateVisited, [key]: false };
    }

    setFormState({
      inputValues: updatedValues,
      inputHasErrors: updateHasErrors,
      inputVisited: updateVisited,
      formIsValid: false,
    });
  };

  useEffect(() => {
    if (isSubmitting === true && formState.formIsValid) {
      submitFunction();
      setIsSubmitting(false);
    } else {
      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  const updateFormState = (dataObject) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        inputValues: dataObject,
      };
    });
  };

  return {
    formState,
    loading,
    inputChangeHandler,
    inputBlurHandler,
    submitHandler,
    inputErrorHandler,
    resetFormState,
    updateFormState,
  };
};

export default FormState;
