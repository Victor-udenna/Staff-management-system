import styled from 'styled-components'

const PopupNotificationStyle = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  animation-name: animatemodal;
  animation-duration: 0.4s;

  .pop_up {
    background-color: white;
    display: flex;
    align-items: center;
    padding: 18px;
    width: 280px;
    border-radius: 8px;
  }

  .success.pop_up {
    border-left: 1.5px solid #228b22;
  }

  .warning.pop_up {
    border-left: 1.5px solid orange;
  }

  .error.pop_up {
    border-left: 1.5px solid red;
  }

  .success.icon_container {
    color: #228b22;
  }

  .warning.icon_container {
    color: orange;
  }

  .error.icon_container {
    color: red;
  }

  .pop_up_text_container {
    padding-left: 12px;
  }

  .pop_up_headertext {
    color: black;
    font-weight: 600;
    font-size: 14px;
    padding-bottom: 5px;
  }

  .pop_up_text {
    font-size: 12px;
    color: #9ca3af;
  }

  @keyframes animatemodal {
    from {
      top: 0px;
      opacity: 0;
    }

    to {
      top: 20px;
      opacity: 1;
    }
  }
`

export default PopupNotificationStyle
