import Text from "../../atoms/Text/Text";
import { useState, useEffect } from "react";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import { Button } from "../../atoms/Button/Button";
import { AiOutlineRight } from "react-icons/ai";
import {BiSolidLockAlt} from "react-icons/bi";
import {PiBellSimpleFill} from "react-icons/pi";
import {MdAccountCircle} from "react-icons/md";
import SettingNavStyle from "./SettingsNavStyle";
import { useNavigate, useLocation } from "react-router-dom";

const SettingsNav = () => {

const [settings, setsettings] = useState<boolean>(false);
const [settingsSecurity, setsettingsSecurity] = useState<boolean>(false);
const [settingActivity, setSettingsActivity] = useState<boolean>(false); 


  const navigate = useNavigate();
  const location = useLocation();

const getLocation =()=>{
  if(location.pathname == "/settings"){
    setsettings(true);
    setsettingsSecurity(false)
    setSettingsActivity(false)
  } else if (location.pathname.includes("security")){
    setsettings(false);
    setsettingsSecurity(true)
    setSettingsActivity(false)
  } else if(location.pathname.includes("activity")){
    setsettings(false);
    setsettingsSecurity(false)
    setSettingsActivity(true)
  }
}

const gotoSettings =()=>{
navigate("/settings")
}

const gotosettingsSecurity =()=>{
  navigate("/settings/security")
  }

  const gotosettingsActivity =()=>{
    navigate("/settings/activity")
    }  


useEffect(() => {
  getLocation();
}, []);



  return (
    <SettingNavStyle>
      <div className="settings__menu">
        <HeaderText classname="header__text" value="Settings" />

        <div className="profile__card">
          <div className="profile__card__sub__container">
            <div className="profile__percentage__container">
              <Text classname="profile__percentage" value="50%" />
            </div>

            <div>
              <HeaderText
                classname="profile__card__header"
                value="Profile Information"
              />
              <Text
                classname="profile__card__text"
                value="Complete your profile to enable all features"
              />
            </div>
          </div>
          <Button
            classname="complete__profile__button"
            value="Complete my Profile"
          />
        </div>

        <div className="settings__menu__container">
        <div onClick={gotoSettings} className={`settings__menu__item menu_1 ${settings ? "active" : ""}`}>
            <div className="settings__menu__item__header">
              <div className="icon__wrapper">
                <MdAccountCircle />
              </div>
              <Text
                classname="settings__menu__item__header__text"
                value="Account Settings"
              />
              <div className="icon__right__wrapper">
                <AiOutlineRight />
              </div>
            </div>
            <Text
              classname="settings__menu__item__description"
              value="Personal Information, Email"
            />
          </div>

          <div onClick={gotosettingsSecurity} className={`settings__menu__item menu_2 ${settingsSecurity ? "active" : ""}`}>
            <div className="settings__menu__item__header">
              <div className="icon__wrapper">
                <BiSolidLockAlt />
              </div>
              <Text
                classname="settings__menu__item__header__text"
                value="Security"
              />
              <div className="icon__right__wrapper">
                <AiOutlineRight />
              </div>
            </div>
            <Text
              classname="settings__menu__item__description"
              value="Password, verify email"
            />
          </div>

          <div onClick={gotosettingsActivity} className={`settings__menu__item menu_3 ${settingActivity ? "active" : ""}`}>
            <div className="settings__menu__item__header">
              <div className="icon__wrapper">
                <PiBellSimpleFill />
              </div>
              <Text
                classname="settings__menu__item__header__text"
                value="Account Activity"
              />
              <div className="icon__right__wrapper">
                <AiOutlineRight />
              </div>
            </div>
            <Text
              classname="settings__menu__item__description"
              value="Date created, Last Login"
            />
          </div>
        </div>
      </div>
    </SettingNavStyle>
  );
};

export default SettingsNav;
