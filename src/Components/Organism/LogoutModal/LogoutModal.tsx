import HeaderText from "../../atoms/HeaderText/HeaderText";
import LogoutModalStyle from "./LogoutModalStyle";
import Text from "../../atoms/Text/Text";
import { Button } from "../../atoms/Button/Button";

type LogoutModal = {
  closeModal: any;
  logoutFunc: any;
  isloading: boolean;
};

const LogoutModal = ({ closeModal, logoutFunc, isloading }: LogoutModal) => {
  return (
    <LogoutModalStyle>
      <div className="modal-container">
        <div className="modal-content">
          <HeaderText
            classname="modal__title"
            value="Are you sure you want to Logout"
          />
          <Text
            classname="modal__text"
            value="Ensure to all changes made has been saved"
          />
          <div className="btn__container">
            <Button
              onclick={closeModal}
              classname="modal__close__btn"
              value="Cancel"
            />
            <Button
              isloading={isloading}
              onclick={logoutFunc}
              classname="logout__action__btn"
              value="Log out"
            />
          </div>
        </div>
      </div>
    </LogoutModalStyle>
  );
};

export default LogoutModal;
