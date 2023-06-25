import "./Signup.scss";
import Image from "../../atoms/Image/Image";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import Input from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import bgImg from "../../../assets/undraw_account_re_o7id.svg";
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <main  className="signup__container">
  <div className="signup__img__container">
<Image  className="signup__img" image={bgImg} alt="bg-image"/>
  </div>

  <div className="sign__up__form__container">
 <HeaderText  classname="sign_up_header" value="Hello!"/>   
 <div className="header_text"><p>Fill in the necesarry details below to create your</p>
 <p> account.</p></div>
<form className="sign__up__form">

<div className="sign_up_input_container">
  <p className="label">User name</p>
  <Input type="text"/>
  </div>

<div className="sign_up_input_container">
  <p className="label">Email Adress</p>
  <Input type="email"/>
  </div>

  <div className="sign_up_input_container">
  <p className="label">Phone Number</p>
  <Input type="password"/>
  </div>

  <div className="sign_up_input_container">
  <p className="label">Password</p>
  <Input type="password"/>
  </div>
  <Button classname="sign_up_button" value="Create Account"/>
  {/* <div className="log__in__link"><span>Don't have an account ?</span> <Link to="/signup"><span>Sign up here</span></Link></div> */}
</form>
  </div>
</main>
  )
}

export default Signup