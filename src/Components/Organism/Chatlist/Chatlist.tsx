import { useState } from 'react'
import Input from '../../atoms/Input/Input'
import Chatliststyle from './ChatlistStyle'
import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'
import Chatlistdata from '../../../assets/data/Chatlistdata.json'
import Gravatar from '../../atoms/Gravatar/Gravatar'
import { HiMiniUserGroup } from 'react-icons/hi2'
import { IoFilter } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { TypedDispatch, RootStore } from '../../../Config/configstore'
import { saveChat } from '../../../redux/actions/ChatAction'

const Chatlist = () => {
  const [selectChat, setSelectedchat] = useState<string>('')
  const dispatch: TypedDispatch = useDispatch()

  const formatTime = (chatDate: string) => {
    const date = new Date(chatDate)
    const minutes = String(date.getHours()).padStart(2, '0')
    const seconds = String(date.getMinutes()).padStart(2, '0')
    const formattedTime = `${minutes}:${seconds}`
    return formattedTime
  }

  const handleChatselect = async (id: string) => {
    setSelectedchat(id)
    await dispatch(saveChat({ id: id }))
  }

  const formatMessagelength = (message: string) => {
    if (message.length > 35) {
      const formatedText = message.slice(0, 35) + ' ...'
      return formatedText
    } else {
      return message
    }
  }

  const state = useSelector((state: RootStore) => state)
  const chatId = state.chatReducer.result.data.id

  return (
    <Chatliststyle>
      <Text classname="header_text" value="Chats" />
      <div className="chat_list">
        <div className="chat__input_container">
          <Input
            className="search__input"
            placeholder="Search Work space"
            type="search"
          />
          <div className="create__space_btn">
            <HiMiniUserGroup color="228B22" />
          </div>
          <div className="filter_btn">
            <IoFilter color="228B22" />
          </div>
        </div>
        <div className="chat_item_container">
          {Chatlistdata.map((item: any, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  handleChatselect(item.user_id)
                }}
                className={`chat_item ${
                  selectChat == item.user_id || chatId == item.user_id
                    ? 'active'
                    : ''
                }`}
              >
                {item.image == null ? (
                  <Gravatar
                    className="chat_img"
                    firstname={item.first_name}
                    lastname={item.last_name}
                    background="random"
                    size={0.33}
                  />
                ) : (
                  <Image
                    className="chat_img"
                    image={item.image}
                    alt="user_img"
                  />
                )}
                <div
                  className={
                    item.active ? 'active_status_icon' : 'inactive_status_icon'
                  }
                ></div>
                <div>
                  <Text
                    classname="message_name"
                    value={item.first_name + ' ' + item.last_name}
                  />
                  <Text
                    classname="last_text"
                    value={
                      item.messages.length > 0
                        ? formatMessagelength(
                            item.messages[item.messages.length - 1].content
                          )
                        : item.first_name +
                          ' ' +
                          item.last_name +
                          ' ' +
                          'joined this work space'
                    }
                  />
                </div>
                {item.messages.length > 0 ? (
                  <div className="message_count">{item.messages.length}</div>
                ) : (
                  ''
                )}
                {item.messages.length > 0 ? (
                  <div className="message_time">
                    {formatTime(
                      item.messages[item.messages.length - 1].timestamp
                    )}
                  </div>
                ) : (
                  ''
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Chatliststyle>
  )
}

export default Chatlist
