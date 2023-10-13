import ChatStyle from "./ChatStyle"
import EmptychatImg from "../../../assets/Message Empty state.svg";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";


const Chat = () => {
  return (
<ChatStyle>
<section className="chat_container">
<div className="chat__empty_state">
<Image className="empty_chat_img" image={EmptychatImg} alt="" />
<Text classname="empty_chat_text" value="No chat selected, select chat."/>
</div>
</section>
</ChatStyle>
  )
}

export default Chat