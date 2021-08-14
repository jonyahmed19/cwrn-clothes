import React from "react";
import "./customButton.styles.scss";

const CustomButton = ({ label, ...otherAttrs }) => {
  return (
    <button className="custom-button" {...otherAttrs}>
      {label}
    </button>
  );
};

export default CustomButton;
