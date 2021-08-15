import React from "react";
import "./signIn.styles.scss";
import InputForm from "../input-form/inputForm.component";
import CustomButton from "../custom-button/customButton.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <InputForm
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            required
          />
          <InputForm
            handleChange={this.handleChange}
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            required
          />
          <CustomButton type={"submit"} label={"Sign In"} />
          <CustomButton
            onClick={signInWithGoogle}
            label={"Sign In with Google"}
            isGoogleSignIn={true}
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
