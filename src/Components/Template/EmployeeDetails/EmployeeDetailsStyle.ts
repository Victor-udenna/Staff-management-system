import styled from 'styled-components'

const EmployeeDetailsStyle = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100vh;
  }

  .employee__details {
    margin-left: 18%;
    padding: 20px 20px 20px 20px;
    width: 100%;
    color: black;
    gap: 20px;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 28px;
  }

  .navlink {
    cursor: pointer;
  }

  .header_text {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.36px;
    color: #051226;
    font-size: 24px;
  }

  .username {
    color: #9ca3af;
  }

  .banner {
    width: 100%;
    height: 200px;
    background-color: #228b22;
    border-radius: 4px;
  }

  .employee__img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-top: -35px;
    border: 2px solid white;
  }

  .sub__header {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  .text__container {
    padding-top: 20px;
    .name {
      font-size: 17px;
      font-weight: 600;
    }

    .email {
      padding-top: 10px;
    }
  }
`

export default EmployeeDetailsStyle
