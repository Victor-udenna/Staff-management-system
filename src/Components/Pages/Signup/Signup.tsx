import { useState, useEffect } from "react";
import "./Signup.scss";
import Image from "../../atoms/Image/Image";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import Input from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import bgImg from "../../../assets/undraw_account_re_o7id.svg";
import { Link } from "react-router-dom";
import GoogleButton from "../../atoms/GoogleButton/GoogleButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/firebase-config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ErrorPopup from "../../Molecule/ErrorPopup/ErrorPopup";
import SuccessPopup from "../../Molecule/SucessPopup/SuccessPopup";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iserrorPopup, setErrorPopUp] = useState<boolean>(false);
  const [isuccessPopup, setisSuccesspopUP] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [isclicked, setisClicked] = useState<boolean>(false);

  const navigate = useNavigate();
  let errorMessage;

  const createUser = async (e: React.FormEvent) => {
    setisClicked(true)
    e.preventDefault();
    try {
      if (username.length == 0) {
        setErrorPopUp(!false);
        setErrorText("Username cannot be empty");
      } else {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(`User ${user.uid} created`);
        await updateProfile(user, {
          displayName: username,
        });
        console.log("User profile updated");
        setisSuccesspopUP(!false)
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error: any) {
      errorMessage = error.message as any;
    
      if (errorMessage) {
        if (
          errorMessage === "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setErrorText("Weak password");
        }
        if (errorMessage === "Firebase: Error (auth/network-request-failed).") {
          setErrorText("Network error, Try again");
        }
        setErrorPopUp(!false);
        setisClicked(!true);
      } else {
        setisSuccesspopUP(!false);
        setisClicked(!true);
      }

      console.log(errorMessage);
    }
  };

  const errorTimeout = () => {
    setInterval(() => {
      setErrorPopUp(false);
    }, 3000);
  };

  const succesTimeout = () => {
    setInterval(() => {
      setisSuccesspopUP(false);
    }, 2000);
  };

  useEffect(() => {
    errorTimeout();
  }, [errorMessage]);

  useEffect(() => {
    succesTimeout();
  }, [errorMessage]);


  return (
    <main className="signup__container">
      {iserrorPopup && <ErrorPopup text={errorText} />}
      {isuccessPopup && <SuccessPopup text={"Account created successfully"} />}
      <div className="signup__img__container">
        <Image className="signup__img" image={bgImg} alt="bg-image" />
      </div>
      <div className="sign__up__form__container">
        <HeaderText classname="sign_up_header" value="Hello!" />
        <div className="header_text">
          <p>Fill in the necesarry details below to create your</p>
          <p> account.</p>
        </div>
        <form className="sign__up__form" onSubmit={createUser}>
          <div className="sign_up_input_container">
            <p className="label">User name</p>
            <Input
              type="text"
              required={true}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="sign_up_input_container">
            <p className="label">Email Adress</p>
            <Input
              type="email"
              required={true}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="sign_up_input_container">
            <p className="label">Password</p>
            <Input
              type="password"
              required={true}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button classname="sign_up_button" isloading={isclicked} value="Create Account" />
          <div className="log__in__link">
            <span>Already have an account yet ?</span>{" "}
            <Link to="/">
              <span>Log in here</span>
            </Link>
          </div>
        </form>
        <GoogleButton value="Sign up with Google" onclick={() => {}} />
      </div>
    </main>
  );
};

export default Signup;
