import React, { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import "./style.css";
const Input = ({
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
      <input
        type={newType}
        id={id}
        name={name}
        class={className()}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
      />
      {type === "password" && (
        <div class="input_field_icon">
          {newType === "text" ? (
            <AiOutlineEyeInvisible
              size={18}
              onClick={() => showPassword(false)}
            />
          ) : (
            <AiOutlineEye size={18} onClick={() => showPassword(true)} />
          )}
        </div>
      )}
      <div className="invalid-feedback">{inputHasErrors}</div>
    </div>
  );
};

export default Input;
