import ChatStyle from "./ChatStyle";
import EmptychatImg from "../../../assets/Message Empty state.svg";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import { RootStore } from "../../../Config/configstore";
import { useSelector } from "react-redux";
import userImg from "../../../assets/user.jpeg";
import { RiHeadphoneFill } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";

const Chat = () => {
  const state = useSelector((state: RootStore) => state);
  console.log(state);

  let chatId = state.chatReducer.result.data.id;
  console.log(chatId);

  return (
    <ChatStyle>
      <section className="chat_container">
        {chatId == undefined ? (
          <div className="chat__empty_state">
            <Image className="empty_chat_img" image={EmptychatImg} alt="" />
            <Text
              classname="empty_chat_text"
              value="No chat selected, select chat."
            />
          </div>
        ) : (
          <div>
            <div className="chat__header">
              <div className="chat__profile">
                <div className="user_avatar_container">
                  <Image alt="" className="chat_avatar" image={userImg} />
                </div>
                <div className="chat__profile__text">
                  <Text classname="chat_name" value={"Sanni emmanuel"} />
                  <Text classname="company_role" value={"product designer"} />
                </div>

                <div className="arrow_down">
                  <BsChevronDown color="228b22" />
                </div>
              </div>
              <div className="call__container">
                <button className="call_button">
                  <RiHeadphoneFill color="228B22" />
                </button>

                <button>
                  <BsChevronDown color="228b22" />
                </button>
              </div>
            </div>

            <div>

            </div>
          </div>
        )}
      </section>
    </ChatStyle>
  );
};

export default Chat;
