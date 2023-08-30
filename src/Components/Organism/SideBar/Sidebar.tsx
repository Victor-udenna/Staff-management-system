import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiHomeCircle, BiHelpCircle } from "react-icons/bi";
import { BsFileEarmarkText, BsGear, BsCheckCircle } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { GiOwl } from "react-icons/gi";
import { RxExit } from "react-icons/rx";
import {SideBarStyle} from "./SideBarStyle";;
import {auth} from "../../Config/firebase-config";
import { signOut } from "firebase/auth";
import LogoutModal from "../LogoutModal/LogoutModal";

const SideBar = () => {
  const [overview, setOverview] = useState(false);
  const [payroll, setPayroll] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [attendance, setAttendance] = useState(false);
  const [help, setHelp] = useState(false);
  const [settings, setSettings] = useState(false);
  const [islogoutopen, setislogoutOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  

  const getLocation = () => {
    if (location.pathname.includes("dashboard")) {
      setOverview(true);
      setPayroll(false);
      setEmployee(false);
      setAttendance(false);
      setHelp(false);
      setSettings(false);
    } else if (location.pathname.includes("payroll")) {
      setOverview(false);
      setPayroll(true);
      setEmployee(false);
      setAttendance(false);
      setHelp(false);
      setSettings(false);
    } else if (location.pathname.includes("employee")) {
      setOverview(false);
      setPayroll(false);
      setEmployee(true);
      setAttendance(false);
      setHelp(false);
      setSettings(false);
    } else if (location.pathname.includes("attendance")) {
      setOverview(false);
      setPayroll(false);
      setEmployee(false);
      setAttendance(true);
      setHelp(false);
      setSettings(false);
    } else if (location.pathname.includes("help")) {
      setOverview(false);
      setPayroll(false);
      setEmployee(false);
      setAttendance(false);
      setHelp(true);
      setSettings(false);
    } else if (location.pathname.includes("settings")) {
      setOverview(false);
      setPayroll(false);
      setEmployee(false);
      setAttendance(false);
      setHelp(false);
      setSettings(true);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const logoutFunction = async  ()=>{
  setLoader(true)
  try{
    setLoader(true)
    await signOut(auth)
    console.log("wow")
    sessionStorage.clear()
    setTimeout(()=>{
    navigate('/')
    }, 2000)
  } catch(err){
    console.error(err)
    setLoader(false)
  }
  }

  const openLogout =()=>{
  setislogoutOpen(true)  
  }

  const closeLogout =()=>{
    setislogoutOpen(false)
  }

  return (
    <SideBarStyle>
    {
      islogoutopen && (
        <LogoutModal
        isloading={loader}
        logoutFunc={logoutFunction}
         closeModal={closeLogout}/>
    )
    }

      <nav className="side__bar">
        <div className="general">
          <div className="logo_container">
            <p>
              <GiOwl size={35} />
            </p>
          </div>
          <div className={`nav__link ${overview ? "active" : ""} `}>

            <Link to="/dashboard">
            <div className="active_side_bar">
</div>
              <span className="icon">
                <BiHomeCircle size={17} />
              </span>{" "}
              <span className="link_text">Overview</span>
            </Link>
          </div>
          <div className={`nav__link ${payroll ? "active" : ""} `}>
            <Link to="/payroll">
            <div className="active_side_bar">
</div>
              <span className="icon">
                {" "}
                <BsFileEarmarkText size={17} />
              </span>{" "}
              <span className="link_text">Payroll</span>
            </Link>
          </div>
          <div className={`nav__link ${employee ? "active" : ""} `}>
            <Link to="/employee">
            <div className="active_side_bar">
</div>
              {" "}
              <span className="icon">
                <GoPeople size={17} />{" "}
              </span>
              <span className="link_text">Employee</span>
            </Link>
          </div>
          <div className={`nav__link ${attendance ? "active" : ""} `}>
            <Link to="/attendance">
            <div className="active_side_bar">
</div>
              {" "}
              <span className="icon">
                <BsCheckCircle size={17} />{" "}
              </span>
              <span className="link_text">Attendance</span>
            </Link>
          </div>
        </div>
        <div className="others">
<div>
<div className={`nav__link ${help ? "active" : ""} `}>
            <Link to="/help">
            <div className="active_side_bar">
</div>
              {" "}
              <span>
                <BiHelpCircle size={18} />{" "}
              </span>
              <span className="link_text">Help</span>
            </Link>
          </div>
          <div className={`nav__link ${settings ? "active" : ""} `}>
            <Link to="/settings">
            <div className="active_side_bar">
</div>
              {" "}
              <span>
                <BsGear size={18} />{" "}
              </span>{" "}
              <span className="link_text">Settings</span>
            </Link>
          </div>
</div>

          <div className="link_container logout_container">
            <button className="logout_btn" onClick={openLogout}>
              {" "}
              <span className="logout_icon">
                <RxExit color="red" />
              </span>{" "}
              <span className="logout_text">Logout</span>
            </button>
          </div>
        </div>
      </nav>
    </SideBarStyle>
  );
};

export default SideBar;
