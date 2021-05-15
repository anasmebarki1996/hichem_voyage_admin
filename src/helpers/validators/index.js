export const nameValidator = (inputIdentifier, value) => {
  if (!value || value.length <= 0) {
    if (inputIdentifier === "name") inputIdentifier = "nom";
    else if (inputIdentifier === "first_name") inputIdentifier = "nom";
    else if (inputIdentifier === "last_name") inputIdentifier = "prenom";
    else inputIdentifier = "Attribut";
    return inputIdentifier.concat(" ", " ne peut pas être vide.");
  }
  return "";
};
export const usernameValidator = (inputIdentifier, value) => {
  if (!value || value.length <= 0) return "Username ne peut pas être vide.";
  if (value.length < 3) return "Username ne peut pas être moins de 3 mots";
  return "";
};

export const emailValidator = (inputIdentifier, value) => {
  const re = /\S+@\S+\.\S+/;
  if (!value || value.length <= 0) return "Email ne peut pas être vide.";
  if (!re.test(value))
    return "Oups! Nous avons besoin d'une adresse e-mail valide.";
  return "";
};

export const passwordValidator = (inputIdentifier, value) => {
  if (inputIdentifier === "password") inputIdentifier = "Password";
  else inputIdentifier = "Password confirmation";

  if (!value || value.length <= 0)
    return inputIdentifier.concat(" ", "ne peut pas être vide.");
  if (value.length < 6)
    return inputIdentifier.concat(" ", "ne peut pas être inférieur à 6.");
  return "";
};

export const passwordConfirmationValidator = (value1, value2) => {
  if (value1 !== value2) {
    return "password non identique";
  }
  return "";
};

export const codeConfirmationValidator = (inputIdentifier, value) => {
  if (!value || value.length <= 0) return "Code ne peut pas être vide.";
  else if (value.length > 6) return "Code ne peut pas être plus de 6.";
  else if (value.length < 6) return "Code ne peut pas être inférieur à 6.";
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
    case "lieu_depart":
    case "lieu_arrive":
    case "date_depart":
    case "duree":
    case "prix":
    case "max_place":
    case "moyen_transport":
    case "agence_id":
    case "heure_depart":
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
  if (password1 !== password2) return "Password ne peut pas être vide.";
  return "";
};
