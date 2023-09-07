import SettingsNav from "../../Organism/SettingsNav/SettingsNav";
import SideBar from "../../Organism/SideBar/Sidebar";
import AccountActivityyStyle from "./AccountActivityStyle";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import { CiWarning } from "react-icons/ci";
import { auth } from "../../Config/firebase-config"

const AccountActivity = () => {
    let userEmail = auth.currentUser?.email;
    let isEmailVerified = auth.currentUser?.emailVerified;

  return (
    <AccountActivityyStyle>
      <main className="container">
        <SideBar />
        <section className="settings__activity">

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
            <SettingsNav />
            <div className="setting__details__container">
              <HeaderText classname="header__text" value="Account Activity" />
              Lorem ipsum dolor sit amet
            </div>
          </section>
        </section>
      </main>
    </AccountActivityyStyle>
  );
};

export default AccountActivity;
