import styled from "styled-components";

const SettingsStyle = styled.div`
  * {
    padding: 0;
  }

  // 1 #6365EF
  // 2 #A5B4FD
  // 3 #E0E7FF

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
  }

  .settings {
    margin-left: 18%;
    padding: 20px;
    width: 100%;
    overflow: hidden;
    color: black;
  }

  .verify__email__status {
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    color: #a35c00;
    background-color: #fbf2cb;
    font-size: 13px;
    gap: 8px;
    margin-bottom: 24px;
    .user__email {
      font-weight: bold;
    }
  }

  .settings__sub__container {
    display: grid;
    grid-template-columns: 40% 60%;
    // gap: 20px
  }

  .settings__menu {
    background-color: white;
    border-right: 1px solid #546680;
  }

  .setting__details__container {
    background-color: honeydew;
    padding: 0px 0px 0px 20px;
  }

  .header__text {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
  }





`;

export default SettingsStyle;
