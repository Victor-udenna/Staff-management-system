import { styled } from "styled-components";

const SettingNavStyle = styled.div`
  .profile__card {
    background-color: #228b22;
    background-color: #355e3b;
    width: 380px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    margin-right: 20px;
  }

  .profile__percentage__container {
    width: 80px;
    height: 80px;
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
    padding: 12px 10px;
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

  .settings__menu__item {
    padding-top: 16px;
   color: #546680;     
  }

  .settings__menu__item__header {
    display: flex;
    align-items: center;
  }

  .icon__wrapper {
    margin-top: 2px;
    background-color: #f5f7fa;
    padding: 5px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #546680;
  }

  .icon__wrapper {
    margin-right: 20px;
  }

  .menu_1 {
    .icon__right__wrapper {
      margin-left: 190px;
      margin-top: 4.8px;
    }
  }

  .menu_2 {
    .icon__right__wrapper {
      margin-left: 260px;
      margin-top: 4.8px;
    }
  }

  .menu_3 {
    .icon__right__wrapper {
      margin-left: 195px;
      margin-top: 4.8px;
    }
  }

  .settings__menu__item__header__text {
    font-size: 15px;
  }
  .settings__menu__item__description {
    padding-left: 46px;
    padding-top: 5px;
    padding-bottom: 16px;
    font-size: 13px;
    border-bottom: 1px solid #546680;
  }


  .active.settings__menu__item{
    color: black;
    .settings__menu__item__description {
    border-bottom: 1px solid #228b22;    
    }


    .icon__wrapper {
    color: #228b22 ;
      }

    .settings__menu__item__header__text {
     font-weight: 600;
      }
  } 

`;

export default SettingNavStyle;
