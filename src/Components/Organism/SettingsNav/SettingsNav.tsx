import Text from "../../atoms/Text/Text";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import { Button } from "../../atoms/Button/Button";
import { AiOutlineRight } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import SettingNavStyle from "./SettingsNavStyle";

const SettingsNav = () => {
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
          <div className="settings__menu__item menu_1">
            <div className="settings__menu__item__header">
              <div className="icon__wrapper">
                <CgProfile />
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

          <div className="settings__menu__item menu_2">
            <div className="settings__menu__item__header">
              <div className="icon__wrapper">
                <CgProfile />
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

          <div className="settings__menu__item menu_3">
            <div className="settings__menu__item__header">
              <div className="icon__wrapper">
                <CgProfile />
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
