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

  .profile__card {
    background-color: #228b22;
    background-color: #355e3b;
    width: fit-content;
    padding: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    margin-right: 20px;
  }

  .profile__percentage__container {
    width: 82px;
    height: 82px;
    padding: 3px;
    border: 3px solid #fff;
    background-color: #228b22;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 18px;
    font-weight: 600;
  }

  .profile__card__header {
    font-weight: 600;
    color: #fff;
    font-size: 15px;
    padding-bottom: 8px;
  }

  .profile__card__text {
    font-size: 12px;
    color: #fff;
  }

  .profile__card__sub__container {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  .complete__profile__button {
    width: 100%;
    padding: 10px;
    font-size: 13px;
    background-color: white;
    font-weight: 600;
    border: none;
    border-radius: 16px;
    margin-top: 22px;
    color: #228b22;
    cursor: pointer;
  }

  .complete__profile__button:hover {
    background-color: honeydew;
  }
`;

export default SettingsStyle;
