import Text from "../../atoms/Text/Text";
import ViewActivityModalStyle from "./ViewActivityModalStyle";
import { VscCollapseAll } from "react-icons/vsc";
import {auth} from "../../../Config/firebase-config";


type ViewActicityModalType = {
  closeModal: any;
}

const ViewActivityModal = ({closeModal} : ViewActicityModalType) => {

  console.log(auth.currentUser);
  return (
    <ViewActivityModalStyle>
      <div className="modal__container">
        <div className="modal__title">
          <Text classname="" value="Activities" />
          <div onClick={closeModal} className="close-icon">
            <VscCollapseAll color="green" size={22} />
          </div>
        </div>

        <div className="modal__body">
          <div className="recent__activity__wrapper">
            <Text classname="recent__activity__title" value="Last Login" />
            <Text classname="recent__activity__text" value="2023-09-09T19" />
          </div>
          <div className="recent__activity__wrapper">
            <Text classname="recent__activity__title" value="Status" />
            <Text classname="recent__activity__text" value="2023-09-09T19" />
          </div>
          <div className="recent__activity__wrapper">
            <Text classname="recent__activity__title" value="Password Updated at" />
            <Text classname="recent__activity__text" value="2023-09-09T19" />
          </div>

          <div className="recent__activity__wrapper">
            <Text classname="recent__activity__title" value="Created at" />
            <Text classname="recent__activity__text" value="2023-09-09T19" />
          </div>

          <div className="recent__activity__wrapper">
            <Text classname="recent__activity__title" value="Last Refresh at" />
            <Text classname="recent__activity__text" value="2023-09-09T19" />
          </div>
        </div>
      </div>
    </ViewActivityModalStyle>
  );
};

export default ViewActivityModal;
