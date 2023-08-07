import {useState} from "react"
import "./Signup.scss";
import Image from "../../atoms/Image/Image";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import Input from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import bgImg from "../../../assets/undraw_account_re_o7id.svg";
import { Link } from "react-router-dom";
import GoogleButton from "../../atoms/GoogleButton/GoogleButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Config/firebase-config"
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {

const [username, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

 const navigate = useNavigate();

const createUser = async (e: React.FormEvent)=>{
e.preventDefault()
if (username.length == 0) {
  alert("name cannot be empty");
} else {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  console.log(`User ${user.uid} created`)
  await updateProfile(user, {
    displayName: username
  });
  console.log("User profile updated")
  navigate("/");
}
}

console.log(auth.currentUser);

  return (
    <main  className="signup__container">
  <div className="signup__img__container">
<Image  className="signup__img" image={bgImg} alt="bg-image"/>
  </div>
  <div className="sign__up__form__container">
 <HeaderText  classname="sign_up_header" value="Hello!"/>   
 <div className="header_text"><p>Fill in the necesarry details below to create your</p>
 <p> account.</p></div>
<form className="sign__up__form" onSubmit={createUser}>
<div className="sign_up_input_container">
  <p className="label">User name</p>
  <Input type="text" required={true}
  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
    setUserName(e.target.value)
  }}/>
  </div>
<div className="sign_up_input_container">
  <p className="label">Email Adress</p>
  <Input type="email" required={true}
  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }}/>
  </div>
  <div className="sign_up_input_container">
  <p className="label">Password</p>
  <Input type="password" required={true}
  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }}/>
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