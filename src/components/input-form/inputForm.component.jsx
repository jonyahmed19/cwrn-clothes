import React from "react";
import "./inputForm.styles.scss";

const InputForm = ({ label, handleChange, ...OtherAttrs }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...OtherAttrs} />
      {label ? (
        <label
          className={`${
            OtherAttrs.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default InputForm;
