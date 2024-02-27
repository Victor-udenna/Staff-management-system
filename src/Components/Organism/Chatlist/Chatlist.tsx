import { useState, useEffect } from 'react'
import Input from '../../atoms/Input/Input'
import Chatliststyle from './ChatlistStyle'
import Text from '../../atoms/Text/Text'
import Gravatar from '../../atoms/Gravatar/Gravatar'
import { HiMiniUserGroup } from 'react-icons/hi2'
import { IoFilter } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { TypedDispatch, RootStore } from '../../../Config/configstore'
import { saveChat } from '../../../redux/actions/ChatAction'
import { fetchEmployeeList } from '../../../redux/actions/EmployeeAction'

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

  // const formatMessagelength = (message: string) => {
  //   if (message.length > 35) {
  //     const formatedText = message.slice(0, 35) + ' ...'
  //     return formatedText
  //   } else {
  //     return message
  //   }
  // }

  const chatId = useSelector(
    (state: RootStore) => state.chatReducer.result.data.id
  )
  const userId = useSelector(
    (state: RootStore) => state.saveAuthReducer.result.data.uid
  )

  const { isLoading, data: employeeData } = useSelector(
    (state: RootStore) => state.employeeReducer
  )

  useEffect(() => {
    const getChatlist = async () => {
      await dispatch(fetchEmployeeList(userId))
    }
    getChatlist()
  }, [dispatch, userId])

  console.log(employeeData, isLoading)
  console.log(chatId)

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

        {employeeData.length > 0 ? (
          <>
            {' '}
            <div className="chat_item_container">
              {employeeData.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      handleChatselect(item.id)
                    }}
                    className={`chat_item ${
                      selectChat == item.id || chatId == item.id ? 'active' : ''
                    }`}
                  >
                    <Gravatar
                      className="chat_img"
                      firstname={item.first_name}
                      lastname={item.last_name}
                      background="random"
                      size={0.33}
                    />
                    {/* {item.image == null ? (
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
                )} */}
                    <div
                      className={
                        item.is_active
                          ? 'active_status_icon'
                          : 'inactive_status_icon'
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
                          // item.messages.length > 0
                          //   ? formatMessagelength(
                          //       item.messages[item.messages.length - 1].content
                          //     )
                          //   :
                          item.first_name +
                          ' ' +
                          item.last_name +
                          ' ' +
                          'joined this work space'
                        }
                      />
                    </div>
                    {item.message && item.messages.length > 0 ? (
                      <div className="message_count">
                        {item.messages.length}
                      </div>
                    ) : (
                      ''
                    )}
                    {item.message && item.messages.length > 0 ? (
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
          </>
        ) : (
          <>
            <div className='no__chatlist__container'>
              <Text classname="no_chatlist" value={'No chat found'} />
              <Text
                classname="no_chatlist_desc"
                value={`Seems you have not added an employee to this system, If you wish to comminacate, navigate to Employee to add an employee to this system`}
              />
            </div>
          </>
        )}
      </div>
    </Chatliststyle>
  )
}

export default Chatlist
