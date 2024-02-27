import styled from 'styled-components'

const ChatStyle = styled.div`
  .chat_container {
    border-left: 1px solid #dfe6df;
    height: 100vh;
    overflow-x: scroll;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
  }

  .chat_container::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }

  .chat__empty_state {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .empty_chat_img {
    width: 30%;
  }

  .empty_chat_text {
    color: #5a616c;
    width: 50%;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding-top: 10px;
  }

  .chat__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dfe6df;
    border-right: 0px;
    border-left: 0px;
    padding: 8px;
    margin-right: -40px;
    position: sticky;
    top: 0px;
    z-index: 1;
    background-color: #fff;
    width: 100%;
  }

  .chat__profile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #dfe6df;
    cursor: pointer;
  }

  .user_avatar_container {
    width: 45px;
    height: 40px;
  }

  .chat_avatar {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    border-radius: 50%;
  }

  .chat_name {
    font-size: 13px;
    font-weight: bold;
  }

  .company_role {
    font-size: 11px;
    padding-top: 3px;
    font-weight: 600;
    color: #228b22;
  }

  .arrow_down {
    padding-top: 3px;
    margin-left: 2px;
  }

  .call__container {
    width: 15%;
    height: 34px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #afe1af;
    cursor: pointer;
    padding: 1px;

    button {
      background-color: #fff;
      border: none;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .call_button {
      border-right: 1px solid #afe1af;
    }
    button:hover {
      background-color: honeydew;
    }
  }

  .message__container {
    padding: 16px;

    .message_sub_container {
      padding-top: 30px;
    }

    .welcome__message {
      text-align: center;
      margin: 28px auto 0px auto;
      font-size: 12px;
      width: fit-content;
      background-color: honeydew;
      color: #000;
      padding: 8px;
      border-radius: 4px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
  }

  .message {
    display: flex;
    gap: 16px;
    align-items: start;
    padding-bottom: 16px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 8px;
    }
    .message_text_container {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-bottom: 3px;
      p {
        font-size: 12px;
      }

      .message_time {
        color: grey;
      }

      .message_name {
        font-weight: bold;
      }
    }

    .message_content {
      font-size: 14px;
    }
  }

  .chat__input__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 8px 0px;
    margin-right: -40px;
    position: fixed;
    bottom: 0px;
    z-index: 1;
    border-top: 1.4px solid #dfe6df;
    width: 48%;

    .message_action_container {
      width: 15%;
      height: 37px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      border: 1px solid #afe1af;
      cursor: pointer;
      padding: 1px;

      button {
        background-color: #fff;
        border: none;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    .message_box {
      width: 90%;
      height: 100%;
      padding: 10px;
      max-width: 90%;
      height: auto;
      overflow-x: none;
      resize: none;
      max-height: 200px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      background-color: inherit;
      border: 0px;
      outline: 0px;
      color: grey;
    }

   .message_box ::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}


    .message_box:focus{
 border: 0px ;
 outline: 0px;
    }

 .message_action_button_container{
  display: flex;
  button{
  border: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 height: 34px;
 padding: 0px 10px 0px 16px;
 background-color: inherit;
 font-size: 18px;
 color: grey;
  }
 }
 
 .message_action_button_container_2{
 button{
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 0px 16px 0px 16px;
  background-color: inherit;
  font-size: 17px;
  color: grey;
 } 
 }
  }
`

export default ChatStyle
