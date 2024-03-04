import ChatStyle from './ChatStyle'
import EmptychatImg from '../../../assets/Message Empty state.svg'
import Image from '../../atoms/Image/Image'
import Text from '../../atoms/Text/Text'
import { RootStore } from '../../../Config/configstore'
import { useSelector } from 'react-redux'
import { RiHeadphoneFill } from 'react-icons/ri'
import { BsChevronDown } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import Gravatar from '../../atoms/Gravatar/Gravatar'
import { IoIosSend } from 'react-icons/io'
import { FaMicrophone } from 'react-icons/fa'
import { LuSmilePlus } from 'react-icons/lu'
import { GoPlus } from 'react-icons/go'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../Config/firebase-config'

interface UpdateData {
  createdById: string
  email: string
  employment_type: any
  first_name: string
  id: string
  is_active: boolean
  job_title: any
  last_name: string
  location: any
  phone_number: string
  status: string
}

const Chat = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [employeedata, setEmployeedata] = useState<UpdateData>()
  const employeeId = useSelector(
    (state: RootStore) => state.chatReducer.result.data.id
  )

  // const formatTime = (chatDate: string) => {
  //   const date = new Date(chatDate)
  //   const minutes = String(date.getHours()).padStart(2, '0')
  //   const seconds = String(date.getMinutes()).padStart(2, '0')
  //   const formattedTime = `${minutes}:${seconds}`
  //   return formattedTime
  // }

  const getEmployeeById = async (employeeId: string) => {
    try {
      const employeeDocRef = doc(db, 'Employees', employeeId)
      const docSnapshot = await getDoc(employeeDocRef)

      if (docSnapshot.exists()) {
        const employeeData = {
          id: docSnapshot.id,
          ...docSnapshot.data(),
        } as UpdateData
        setEmployeedata(employeeData)
      } else {
        console.log('No matching document found.')
      }
    } catch (err) {
      console.error('Error fetching employee by ID:', err)
    }
  }

  useEffect(() => {
    getEmployeeById(employeeId)
  }, [employeeId])

  const handleChange = (event: any) => {
    setInputValue(event.target.value)
    autoResize(event.target)
  }

  const autoResize = (element: any) => {
    element.style.height = '34px'
    element.style.height = element.scrollHeight + 'px'
  }

  return (
    <ChatStyle>
      <section className="chat_container">
        {employeeId == undefined ? (
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
                  <Gravatar
                    className="chat_avatar"
                    firstname={employeedata ? employeedata.first_name : ''}
                    lastname={employeedata ? employeedata.last_name : ''}
                    background="random"
                    size={1}
                  />
                </div>
                <div className="chat__profile__text">
                  <Text
                    classname="chat_name"
                    value={
                      employeedata
                        ? employeedata.first_name + ' ' + employeedata.last_name
                        : ' '
                    }
                  />
                  <Text
                    classname="company_role"
                    value={employeedata ? employeedata.job_title.value : ''}
                  />
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
              <Text
                classname="welcome__message"
                value={
                  employeedata
                    ? employeedata.first_name +
                      ' ' +
                      employeedata.last_name +
                      ' ' +
                      'joined this work space'
                    : ''
                }
              />

              {/* <div className="message_sub_container">
                {messages !== undefined && messages.length > 0
                  ? messages.map((message: any) => {
                      return (
                        <div className="message">
                          <div>
                            {chatdata && chatdata.image !== null ? (
                              <Image
                                alt=""
                                className=""
                                image={chatdata ? chatdata.image : ''}
                              />
                            ) : (
                              <Gravatar
                                className=""
                                firstname={chatdata ? chatdata.first_name : ''}
                                lastname={chatdata ? chatdata.last_name : ''}
                                background="random"
                                size={0.33}
                              />
                            )}
                          </div>
                          <div>
                            <div className="message_text_container">
                              <p className="message_name">
                                {chatdata.first_name + ' ' + chatdata.last_name}
                              </p>
                              <p className="message_time">
                                {formatTime(message.timestamp)}
                              </p>{' '}
                            </div>
                            <p className="message_content">{message.content}</p>
                          </div>
                        </div>
                      )
                    })
                  : ''}
              </div> */}
            </div>

            <div className="chat__input__container">
              <div className="message_action_button_container">
                <button>
                  <GoPlus />
                </button>
                <button>
                  <LuSmilePlus />
                </button>
              </div>
              <textarea
                style={{ height: '34px', overflow: 'hidden' }}
                value={inputValue}
                onChange={handleChange}
                className="auto-height message_box"
                placeholder="Type something..."
                autoFocus={true}
              />
              <div className="message_action_button_container_2">
                {inputValue ? (
                  <button className="send__message__btn">
                    <IoIosSend color={'#228B22'} />
                  </button>
                ) : (
                  <button className="send__voice__btn">
                    <FaMicrophone />
                  </button>
                )}
              </div>
            </div>
          </section>
        )}
      </section>
    </ChatStyle>
  )
}

export default Chat
