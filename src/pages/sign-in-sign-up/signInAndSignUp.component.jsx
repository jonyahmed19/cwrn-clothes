import React from "react";
import SignIn from "../../components/sign-in/signIn.component";
import SignUp from "../../components/sign-up/signUp.component";
import "./signInAndSignUp.styles.scss";

const SignInAndSingUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSingUp;
