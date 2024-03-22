import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../input-form/input-form.component";
import "./sign-in-form.style.scss";
import Button from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};

const signInwithGoogle = async () => {
  await signInWithGooglePopup();
};

const SignInForm = () => {
  const [formField, setFormFeild] = useState(defaultFormField);
  const { email, password } = formField;

  const resetFormField = () => {
    setFormFeild(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormField();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("incorrect password or email");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeild({ ...formField, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span> Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit" childern={"Sign In"} />

          <Button
            type="button"
            buttonType="google"
            onClick={signInwithGoogle}
            childern={"Google Sign In"}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
