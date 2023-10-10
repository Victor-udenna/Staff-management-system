import styled from "styled-components";

const SettingsStyle = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
  }

  .settings {
    margin-left: 18%;
    padding: 20px 0px 0px 20px;
    width: 100%;
    overflow: hidden;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile__photo__container {
    display: flex;
    align-items: flex-start;
    width: 70%;
    gap: 200px;
    border-bottom: 1px solid #9ca3af;
    padding: 40px 0px 30px 4px;
  }

  .profile__photo__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .section__header__text {
    font-weight: 500;
    font-size: 16px;
  }

  .user__img__container {
    position: relative;
  }

  .status__icon {
    width: 15px;
    height: 15px;
    background-color: #afe1af;
    border-radius: 50%;
    position: absolute;
    bottom: 8px;
    right: 5px;
  }

  .user__img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2.5px solid #afe1af;
  }

  .remove__picture__btn {
    background-color: white;
    border: 1px solid #000;
    color: #000;
    font-size: 12px;
    font-weight: bold;
    padding: 10px;
    border-radius: 7px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  .image__file__size__text {
    font-size: 12px;
    color: #9ca3af;
  }

  .personal__information__container {
    display: flex;
    align-items: flex-start;
    width: 70%;
    gap: 130px;
    border-bottom: 1px solid #9ca3af;
    padding: 40px 0px 40px 0px;
  }

  .input__container {
    display: flex;
    flex-direction: column;

    label {
      padding-bottom: 12px;
      font-size: 12px;
      font-weight: 600;
    }

    input {
      width: 400px;
      margin-bottom: 12px;
    }

    .change__password__container {
      display: flex;
      gap: 8px;
    }

    .change__password {
      width: 314px;
    }

    .change__password__button {
      background-color: #000;
      border: none;
      color: white;
      height: 40px;
      padding: 12px;
      border-radius: 7px;
      font-weight: 600;
      cursor: pointer;
    }
  }

  .recent__activity__container {
    display: flex;
    align-items: flex-start;
    width: 70%;
    gap: 240px;
    border-bottom: 1px solid #9ca3af;
    padding: 40px 0px 40px 0px;
  }

  .recent__activity__sub__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .recent__activity__wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 250px;
      padding-bottom: 22px;
    }

    #view__activity__btn {
      background-color: #e3fae3;
      color: #355e3b;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      height: 32px;
      gap: 2px;
      border: 1px solid #355e3b;
      width: 105px;
      border-radius: 7px;
      cursor: pointer;
      p {
        font-size: 14px;
      }
    }

    .recent__activity__title {
      font-size: 14px;
      font-weight: 600;
    }

    .recent__activity__text {
      font-size: 12px;
    }
  }

  .security__container {
    display: flex;
    align-items: flex-start;
    width: 70%;
    gap: 240px;
    border-bottom: 1px solid #9ca3af;
    padding: 40px 0px 40px 0px;
  }

  .confirm__changes__container {
    padding: 40px 0px;
    display: flex;
    align-items: center;
    justify-content: end;
    width: 70%;
    gap: 16px;

    .revert__changes__btn {
      background-color: white;
      border: 1px solid #355e3b;
      color: #355e3b;
      font-size: 13px;
      font-weight: bold;
      padding: 10px;
      border-radius: 7px;
      cursor: pointer;
    }

    .save__changes__btn {
      border: 1px solid #228b22;
      background-color: #228b22;
      color: white;
      font-size: 13px;
      font-weight: bold;
      padding: 10px;
      border-radius: 7px;
      cursor: pointer;
    }
  }


`;

export default SettingsStyle;
