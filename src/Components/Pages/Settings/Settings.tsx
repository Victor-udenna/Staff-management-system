import SideBar from "../../Organism/SideBar/Sidebar";
import SettingsStyle from "./SettingsStyle";
import { auth } from "../../Config/firebase-config";
import { CiWarning } from "react-icons/ci";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import Text from "../../atoms/Text/Text";
import { Button } from "../../atoms/Button/Button";

const Settings = () => {
  let userEmail = auth.currentUser?.email;
  console.log(auth.currentUser);

  let isEmailVerified = auth.currentUser?.emailVerified;

  return (
    <SettingsStyle>
      <main className="container">
        <SideBar />
        <section className="settings">
          {!isEmailVerified && (
            <div className="verify__email__status">
              <CiWarning size={23} />
              <div>
                <p className="verify__email__status__text">
                  Kindly <span>verify </span>
                  your email <span className="user__email">{userEmail}</span>
                </p>
              </div>
            </div>
          )}

          <section className="settings__sub__container">
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
            </div>

            <div className="setting__details__container">
              <HeaderText classname="header__text" value="Account Settings" />
              Lorem ipsum dolor sit amet 
            </div>
          </section>
        </section>
      </main>
    </SettingsStyle>
  );
};

export default Settings;
