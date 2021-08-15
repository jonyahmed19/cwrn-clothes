import React from "react";
import "./customButton.styles.scss";

const CustomButton = ({ label, isGoogleSignIn, ...otherAttrs }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherAttrs}
    >
      {label}
    </button>
  );
};

export default CustomButton;
