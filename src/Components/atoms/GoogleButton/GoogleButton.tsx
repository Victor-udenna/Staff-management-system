import "./GoogleButton.scss";
import googleImg from "../../../assets/icons8-google.svg";

type googleButtonProp = {
    onclick: React.MouseEventHandler<HTMLButtonElement> | undefined
    value: string
}

const GoogleButton = ({onclick, value } : googleButtonProp) => {
  return (
    <button className="google_btn" onClick={onclick}><img alt="icon" className="" src={googleImg}/><span>{value}</span></button>
  )
}

export default GoogleButton