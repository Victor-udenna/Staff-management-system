import styled from 'styled-components'

const ViewEmployeeStyle = styled.div`
  animation: show-bg 0.5s linear forwards;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  left: 0;
  position: absolute;
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  @keyframes show-bg {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.8);
    }
  }
  .modal-container {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 100vh;
  }
  .modal-content {
    position: relative;
    width: 605px;
    background: #fff;
    padding: 24px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.09);
    border-radius: 16px;
  }

  .modal__header .button__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: inherit;
      border: none;
      cursor: pointer;
    }
  }

  .header__container {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 20px 0px;
    color: white;
    position: relative;
  }

  .employee__img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: white;
  }

  .active_status_icon {
    width: 15px;
    height: 15px;
    background-color: #228b22;
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
  }

  .inactive_status_icon {
    width: 15px;
    height: 15px;
    border: 1px solid white;
    background-color: orange;
    border-radius: 50%;
    position: absolute;
    left: 65px;
    bottom: 27px;
  }

  .header__text {
    font-size: 16px;
    font-weight: 600;
  }

  .header__desc {
    font-size: 14px;
    color: grey;
    padding-bottom: 30px;
  }

  .modal__body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
  }

  .modal__input__container {
    display: flex;
    align-items: start;
    flex-direction: column;
    width: 270px;
    input {
      width: 100%;
      padding: 10px;
    }
    input:focus {
      outline: 1.4px solid #afe1af;
    }
  }

  label {
    font-size: 13px;
    font-weight: 500;
    padding-bottom: 6px;
    cursor: pointer;
  }

  .modal__footer {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .cancel__create__btn {
    width: 120px;
    border: 1px solid gray;
    color: black;
    background-color: white;
  }

  .create__employee__btn {
    width: 160px;
    border: none;
    background-color: #228b22;
    color: white;
  }
`

export default ViewEmployeeStyle
