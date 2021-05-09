import React from "react";
import moment from "moment";

const Text = ({ text, type }) => {
  if (text) {
    if (type === "date") {
      text = moment(text).format("DD/MM/YYYY");
    } else if (type === "heure") {
      text = moment(text).format("hh:mm");
    }
  } else text = "-";

  return <> {text}</>;
};

export default Text;
