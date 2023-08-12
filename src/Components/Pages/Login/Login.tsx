import { useEffect, useState} from "react";
import './Login.scss';
import Input from "../../atoms/Input/Input";
import Image from "../../atoms/Image/Image";
import bgImg from "../../../assets/undraw_sign_in_re_o58h.svg";
import { Button } from "../../atoms/Button/Button";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import { Link } from "react-router-dom";
import GoogleButton from "../../atoms/GoogleButton/GoogleButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Config/firebase-config";
import ErrorPopup from "../../Molecule/ErrorPopup/ErrorPopup";
import SuccessPopup from "../../Molecule/SucessPopup/SuccessPopup";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iserrorPopup, setErrorPopUp] = useState<boolean>(false);
  const [isuccessPopup, setisSuccesspopUP] = useState<boolean>(false);


  let errorMessage;


  const loginFunction = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userdetails) =>{
      setisSuccesspopUP(true);
      const user = userdetails;
      localStorage.setItem("authState", JSON.stringify(auth.currentUser))
      setTimeout(()=>{navigate("/dashboard")}, 1000)
      user
    }).catch((error) => {
      errorMessage = error.message;
      // errorMessage && (
      //   setErrorPopUp(!false)
      // )
      if(errorMessage){
        setErrorPopUp(!false)
      } else {
        setisSuccesspopUP(!false)
      }
    
  });
  };

  const errorTimeout =()=>{
    setInterval(()=>{ setErrorPopUp(false)}, 3000)
  }

  const succesTimeout =()=>{
    setInterval(()=>{ setisSuccesspopUP(false)}, 2000)
  }

  useEffect(
    ()=>{
      errorTimeout()
    },
    [errorMessage]
  )

  useEffect(
    ()=>{
      succesTimeout()
    },
    [errorMessage]
  )

  return (
<main className="signin__container">

{ iserrorPopup && (
  <ErrorPopup/>
)}

{ isuccessPopup && 
(<SuccessPopup/>)}
  
      <div className="signin__img__container">
        <Image className="signin__img" image={bgImg} alt="bg-image" />
      </div>

      <div className="sign__in__form__container">
        <HeaderText classname="log_in_header" value="Hello Again!" />
        <div className="header_text">
          <p>Welcome back, Enter your information to log into your</p>
          <p> account.</p>
        </div>
        <form className="sign__in__form" onSubmit={loginFunction}>
          <div className="sign_in_input_container">
            <p className="label">Email Adress</p>
            <Input
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="sign_in_input_container">
            <p className="label">Password</p>
            <Input
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button classname="sign_in_button" value="Log in" />
          <div className="log__in__link">
            <span>Don't have an account ?</span>{" "}
            <Link to="/signup">
              <span>Sign up here</span>
            </Link>
          </div>
        </form>
        <GoogleButton value="Continue with Google" onclick={() => {}} />
      </div>
    </main>
  );
};

export default Login;
