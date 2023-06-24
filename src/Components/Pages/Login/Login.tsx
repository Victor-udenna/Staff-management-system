import "./Login.scss";
import Input from "../../atoms/Input/Input";
import Image from "../../atoms/Image/Image";
import bgImg from "../../../assets/undraw_sign_in_re_o58h.svg";
import { Button } from "../../atoms/Button/Button";
import googleImg from "../../../assets/icons8-google.svg";

const Login = () => {
  return (
<main  className="signin__container">
  <div className="signin__img__container">
<Image  className="signin__img" image={bgImg} alt="bg-image"/>
  </div>

  <div className="sign__in__form__container">
<form className="sign__in__form">
  <div>
  <p>Email</p>
  <Input type="email"/>
  </div>

  <div>
  <p>Password</p>
  <Input type="password"/>
  </div>
  <Button classname="sign_in_button" value="Log in"/>
</form>
<button><Image alt="icon" className="" image={googleImg}/><span>Log in with google</span></button>
  </div>
</main>
  )
}

export default Login