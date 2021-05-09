import React, { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import "./style.css";
const Select = ({
  type,
  id,
  name,
  placeholder,
  inputHasErrors,
  value,
  onChange,
  onBlur,
  required,
  disabled,
  data,
}) => {
  const className = () => {
    return !inputHasErrors
      ? "form-control input_form_control"
      : "form-control input_form_control is-invalid input_is_invalid";
  };

  const showPassword = (value) => {
    if (value) {
      setNewType("text");
    } else setNewType("password");
  };

  const [newType, setNewType] = useState(type);

  return (
    <div className="input_container">
      <select
        id={id}
        name={name}
        class={className()}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {placeholder && <option disabled>{placeholder}</option>}
        {data.map((item) => {
          return <option value={item.id}>{item.value}</option>;
        })}
      </select>
      <div className="invalid-feedback">{inputHasErrors}</div>
    </div>
  );
};

export default Select;
