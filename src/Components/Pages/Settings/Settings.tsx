import { useState} from "react";
import SideBar from "../../Organism/SideBar/Sidebar";
import SettingsStyle from "./SettingsStyle";
import Text from "../../atoms/Text/Text";
import { Button } from "../../atoms/Button/Button";
import Image from "../../atoms/Image/Image";
import Input from "../../atoms/Input/Input";
import { VscMultipleWindows } from "react-icons/vsc";
import EmailVerification from "../../Molecule/EmailVerification/EmailVerification";
import ViewActivityModal from "../../Organism/ViewActivityModal/ViewActivityModal";
import { auth } from "../../Config/firebase-config";

const Settings = () => {

const [isActivityModal, setActivityModal] = useState(false);
const userName = auth.currentUser?.displayName;

const openActivityModal =()=>{
  setActivityModal(true)
}

const closeActivityModal =()=>{
  setActivityModal(false)
}

const userImg = `https://ui-avatars.com/api/?name=${userName}+${""}&background=${"228B22"}&color=fff&font-size=${0.33}&bold=${true}`;


  return (
    <SettingsStyle>

      {isActivityModal && (
   <ViewActivityModal
   closeModal={closeActivityModal}/>
        )
      }

      <main className="container">
        <SideBar />
        <section className="settings">
          <div className="profile__photo__container">
            <Text classname="section__header__text" value="Profile Photo" />
            <div className="profile__photo__wrapper">
              <div className="user__img__container">
                <Image className="user__img" alt="" image={userImg} />
                <div className="status__icon"></div>
              </div>
              <div>
                <Button value="Remove" classname="remove__picture__btn" />
                <Text
                  classname="image__file__size__text"
                  value="Max size of 10MB."
                />
              </div>
            </div>
          </div>

          <div className="personal__information__container">
            <Text
              classname="section__header__text"
              value="Personal Information"
            />

         <form>
         <div className="personal__information__wrapper">
              <div className="input__container">
                <label htmlFor="display__name">First Name</label>
                <Input id="displa__name" type="text" />
              </div>
              <div className="input__container">
                <label htmlFor="email">Last Name</label>
                <Input className="email" type="text" />
              </div>
              <div className="input__container">
                <label htmlFor="">Change Email</label>
                <div className="change__password__container">
                  <Input className="change__password" type="email" />
                  <Button value="Update" classname="change__password__button" />
                </div>
                {<EmailVerification/>}
              </div>
            </div>
         </form>
          </div>

          <div className="recent__activity__container">
            <Text classname="section__header__text" value="Activity" />
            <div className="recent__activity__sub__container">
              <div className="recent__activity__wrapper">
                <Text classname="recent__activity__title" value="Last Login" />
                <Text
                  classname="recent__activity__text"
                  value="2023-09-09T19"
                />
              </div>
              <div className="recent__activity__wrapper">
                <Text
                  classname="recent__activity__title"
                  value="Password Updated at"
                />
                <Text
                  classname="recent__activity__text"
                  value="2023-09-09T19"
                />
              </div>
              <div className="recent__activity__wrapper">
                <Text classname="recent__activity__title" value="Status" />
                <Text classname="recent__activity__text" value="Active" />
              </div>

              <button id="view__activity__btn" onClick={openActivityModal}>
                <Text classname="" value="view all" />
                <VscMultipleWindows size={20} />
              </button>
            </div>
            <div></div>
          </div>
<form>
  
<div className="security__container">
            <Text classname="section__header__text" value="Security" />
            <div className="personal__information__wrapper">
              <div className="input__container">
                <label htmlFor="display__name">Old password</label>
                <Input id="displa__name" type="text" />
              </div>
              <div className="input__container">
                <label htmlFor="email">New password</label>
                <Input className="email" type="text" />
              </div>
              <div className="input__container">
                <label htmlFor="">Confirm New Password</label>

                <div className="change__password__container">
                  <Input className="change__password" type="email" />
                  <Button value="Update" classname="change__password__button" />
                </div>
              </div>
            </div>
          </div>
</form>

          <div className="confirm__changes__container">
            <Button classname="revert__changes__btn" value="Revert Changes" />
            <Button classname="save__changes__btn" value="Save" />
          </div>
        </section>
      </main>
    </SettingsStyle>
  );
};

export default Settings;
