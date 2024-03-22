import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import "./authantication.style.scss";

const Authantication = () => {
  return (
    <div className="authantication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authantication;
