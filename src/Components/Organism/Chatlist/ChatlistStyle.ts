import styled from 'styled-components'

const Chatliststyle = styled.div`
  .chat_list {
    height: 85vh;
    overflow-x: scroll;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
  }

  .chat_list::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }

  .chat__input_container {
    position: sticky;
    top: 0px;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    padding: 7px 0px;
  }

  .search__input {
    width: 70%;
    border-radius: 4px;
    height: 34px;
    border: 1.4px solid #dfe6df;
    font-size: 12px;
    padding: 8px 12px;
    color: grey;
    margin: 2px 2px 0px 2px;
  }

  input[type='search']:focus {
    outline: 1.4px solid #afe1af;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  .create__space_btn {
    background-color: #fff;
    width: 15%;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #afe1af;
    cursor: pointer;
  }

  .filter_btn {
    background-color: #fff;
    width: 15%;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #afe1af;
    cursor: pointer;
  }

  .filter_btn:hover,
  .create__space_btn:hover {
    background-color: honeydew;
  }

  .chat_item {
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 12px;
    margin: 12px 2px;
    border-bottom: 1px solid #dfe6df;
    position: relative;
    cursor: context-menu;
    .message_name {
      font-size: 10px;
      padding-bottom: 4px;
    }

    .last_text {
      font-size: 11px;
    }
  }

  .chat_item.active {
    width: 99%;
    border-left: 2px solid #228b22;
    .message_name {
      font-weight: 600;
    }
  }

  .chat_img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .active_status_icon {
    width: 13px;
    height: 13px;
    background-color: #228b22;
    border-radius: 50%;
    position: absolute;
    left: 45px;
    bottom: 10px;
  }

  .inactive_status_icon {
    width: 13px;
    height: 13px;
    background-color: orange;
    border-radius: 50%;
    position: absolute;
    left: 45px;
    bottom: 10px;
  }

  .message_count {
    background-color: #228b22;
    color: white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    padding: 2px;
    position: absolute;
    right: 4px;
    top: 20px;
  }

  .message_time {
    font-size: 11px;
    color: #228b22;
    position: absolute;
    right: 0px;
    top: 40px;
  }

  .no__chatlist__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .no_chatlist {
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.36px;
    color: #051226;
    font-size: 24px;
    padding: 28px 0px;
  }

  .no_chatlist_desc {
    font-size: 14px !important;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    line-height: 160%;
    letter-spacing: -0.36px;
    color: #051226;
    font-size: 24px;
    padding: 28px 0px;
  }
`

export default Chatliststyle
