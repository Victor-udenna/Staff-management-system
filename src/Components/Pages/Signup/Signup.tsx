import {useState} from "react"
import "./Signup.scss";
import Image from "../../atoms/Image/Image";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import Input from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import bgImg from "../../../assets/undraw_account_re_o7id.svg";
import { Link } from "react-router-dom";
import GoogleButton from "../../atoms/GoogleButton/GoogleButton";


const Signup = () => {

const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

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
  <Input type="text" required={true}/>
  </div>
<div className="sign_up_input_container">
  <p className="label">Email Adress</p>
  <Input type="email" required={true}/>
  </div>
  <div className="sign_up_input_container">
  <p className="label">Password</p>
  <Input type="password" required={true}/>
  </div>
  <Button classname="sign_up_button" value="Create Account"/>
  <div className="log__in__link"><span>Already have an account yet ?</span> <Link to="/"><span>Log in here</span></Link></div>
</form>
<GoogleButton value="Sign up with Google" onclick={()=>{}}/>
  </div>
</main>
  )
}

export default Signup