import "./Login.scss";
import Input from "../../atoms/Input/Input";
import Image from "../../atoms/Image/Image";
import bgImg from "../../../assets/undraw_sign_in_re_o58h.svg";
import { Button } from "../../atoms/Button/Button";
import googleImg from "../../../assets/icons8-google.svg";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import { Link } from "react-router-dom";

const Login = () => {

  // const [userName, setUserNma]



  return (
<main  className="signin__container">
  <div className="signin__img__container">
<Image  className="signin__img" image={bgImg} alt="bg-image"/>
  </div>

  <div className="sign__in__form__container">
 <HeaderText  classname="log_in_header" value="Hello Again!"/>   
 <div className="header_text"><p>Welcome back, Enter your information to log into your</p>
 <p> account.</p></div>
<form className="sign__in__form">
<div className="sign_in_input_container">
  <p className="label">Email Adress</p>
  <Input type="email"/>
  </div>

  <div className="sign_in_input_container">
  <p className="label">Password</p>
  <Input type="password"/>
  </div>
  <Button classname="sign_in_button" value="Log in"/>
  <div className="log__in__link"><span>Don't have an account ?</span> <Link to="/signup"><span>Sign up here</span></Link></div>
</form>
<button className="google_btn"><Image alt="icon" className="" image={googleImg}/><span>Log in with google</span></button>
  </div>
</main>
  )
}

export default Login