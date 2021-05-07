export const nameValidator = (inputIdentifier, value) => {
  if (!value || value.length <= 0) {
    if (inputIdentifier === "name") inputIdentifier = "Name";
    else if (inputIdentifier === "first_name") inputIdentifier = "First name";
    else if (inputIdentifier === "last_name") inputIdentifier = "Last name";
    else inputIdentifier = "Attribute";
    return inputIdentifier.concat(" ", " can't be empty.");
  }
  return "";
};
export const usernameValidator = (inputIdentifier, value) => {
  if (!value || value.length <= 0) return "Username can't be empty.";
  if (value.length < 3) return "Username can't be empty less then 3 words";
  return "";
};

export const emailValidator = (inputIdentifier, value) => {
  const re = /\S+@\S+\.\S+/;
  if (!value || value.length <= 0) return "Email can't be empty.";
  if (!re.test(value)) return "Ooops! We need a valid email address.";
  return "";
};

export const passwordValidator = (inputIdentifier, value) => {
  if (inputIdentifier === "password") inputIdentifier = "Password";
  else inputIdentifier = "Password confirmation";

  if (!value || value.length <= 0)
    return inputIdentifier.concat(" ", "can't be empty.");
  if (value.length < 6)
    return inputIdentifier.concat(" ", "can't be less then 6.");
  return "";
};

export const passwordConfirmationValidator = (value1, value2) => {
  console.log("value 1 : " + value1);
  console.log("value 2 : " + value2);
  if (value1 !== value2) {
    return "password not identique";
  }
  return "";
};

export const codeConfirmationValidator = (inputIdentifier, value) => {
  if (!value || value.length <= 0) return "Code can't be empty.";
  else if (value.length > 6) return "Code can't be more than 6.";
  else if (value.length < 6) return "Code can't be less than 6.";
  return "";
};

export const inputValidator = (inputIdentifier, value) => {
  switch (inputIdentifier) {
    case "username":
      return usernameValidator(inputIdentifier, value);
    case "name":
    case "first_name":
    case "last_name":
    case "nom":
    case "prenom":
    case "numTel":
    case "adresse":
      return nameValidator(inputIdentifier, value);
    case "email":
      return emailValidator(inputIdentifier, value);
    case "password":
      return passwordValidator(inputIdentifier, value);
    case "password_confirm":
      return passwordValidator(inputIdentifier, value);
    case "verify_code":
      return codeConfirmationValidator(inputIdentifier, value);
    default:
      return "";
  }
};

export const checkPasswordEquality = (password1, password2) => {
  if (password1 !== password2) return "Password can't be empty.";
  return "";
};
