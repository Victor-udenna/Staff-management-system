import ChatStyle from "./ChatStyle";
import EmptychatImg from "../../../assets/Message Empty state.svg";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import { RootStore } from "../../../Config/configstore";
import { useSelector } from "react-redux";
import { RiHeadphoneFill } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import Chatlistdata from "../../../assets/data/Chatlistdata.json";
import { useEffect, useState } from "react";
import Gravatar from "../../atoms/Gravatar/Gravatar";

const Chat = () => {

  const [chatdata, setchatData] = useState<any>();
  const state = useSelector((state: RootStore) => state);

  let chatId = state.chatReducer.result.data.id;
  
  const getChatdata =()=>{
    Chatlistdata.map((item: any)=>{
    if(item.user_id == chatId){
      setchatData(item)
    } else{
      ""
    }
    })
  }

  useEffect(()=>{
  getChatdata()
  }, [chatId])
 console.log(chatdata)


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
          <section>
            <div className="chat__header">
              <div className="chat__profile">
                <div className="user_avatar_container">
                   {chatdata && chatdata.image !== null ? 
                                     <Image alt="" className="chat_avatar" image={ chatdata ? chatdata.image : ""} />
                  : 
                  <Gravatar className="chat_avatar" firstname={chatdata ? chatdata.first_name : ""} lastname={ chatdata ? chatdata.last_name: ""} background="random" size={0.33}/>
                  }

                </div>
                <div className="chat__profile__text">
                  <Text classname="chat_name" value={ chatdata  ? chatdata.first_name + " " + chatdata.last_name : " "} />
                  <Text classname="company_role" value={chatdata ? chatdata.job_title : ""} />
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


            <div className="message__container">
  <Text classname="welcome__message" value={chatdata ? chatdata.first_name + " " + chatdata.last_name + " " + "joined this work space" : ""} />
            </div>

          </section>
        )}
      </section>
    </ChatStyle>
  );
};

export default Chat;
