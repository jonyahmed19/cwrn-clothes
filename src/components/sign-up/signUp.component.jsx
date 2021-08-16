import React from "react";
import "./signUp.styles.scss";
import InputForm from "../input-form/inputForm.component";
import CustomButton from "../custom-button/customButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  onSubmitChange = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account!</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={this.onSubmitChange} className="sign-up-form">
          <InputForm
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.onHandleChange}
            label="Display Name"
            required
          />
          <InputForm
            type="email"
            name="email"
            value={email}
            onChange={this.onHandleChange}
            label="Email"
            required
          />
          <InputForm
            type="password"
            name="password"
            value={password}
            onChange={this.onHandleChange}
            label="Password"
            required
          />
          <InputForm
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.onHandleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit" label="SIGN UP" />
        </form>
      </div>
    );
  }
}

export default SignUp;
