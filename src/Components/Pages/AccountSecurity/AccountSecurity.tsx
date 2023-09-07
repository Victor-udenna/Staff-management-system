import SettingsNav from "../../Organism/SettingsNav/SettingsNav";
import SideBar from "../../Organism/SideBar/Sidebar";
import AccountSecurityStyle from "./AccountSecurityStyle";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import { CiWarning } from "react-icons/ci";
import { auth } from "../../Config/firebase-config"

const AccountSecurity = () => {
    let userEmail = auth.currentUser?.email;
    let isEmailVerified = auth.currentUser?.emailVerified;
  return (
    <AccountSecurityStyle>
      <main className="container">
        <SideBar />
        <section className="settings__security">

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
              <HeaderText classname="header__text" value="Account Security" />
              Lorem ipsum dolor sit amet
            </div>
          </section>
        </section>
      </main>
    </AccountSecurityStyle>
  );
};

export default AccountSecurity;
