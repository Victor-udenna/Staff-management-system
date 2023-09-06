import SideBar from "../../Organism/SideBar/Sidebar";
import SettingsStyle from "./SettingsStyle";
import { auth } from "../../Config/firebase-config";
import { CiWarning } from "react-icons/ci";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import SettingsNav from "../../Organism/SettingsNav/SettingsNav";


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

           <SettingsNav/> 
           
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
