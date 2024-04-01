import styled from 'styled-components'

const PayrollStyle = styled.div`
  * {
    padding: 0;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
  }

  .payroll {
    margin-left: 18%;
    padding: 20px;
    width: 100%;
    overflow: hidden;
    color: black;
  }

  .header_text {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.36px;
    color: #051226;
  }

  .payroll-button__container {
    margin: 30px 0px 40px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .transaction-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px;
    background-color: #fff;
    color: #228b22;
    border: 1px solid #228b22;
    border-radius: 4px;
    cursor: pointer;

    p {
      color: black;
      font-weight: 600;
      font-size: 13px;
    }
  }

  .transaction-button:hover{
    background-color: #e3fae3 ;
  }
`

export default PayrollStyle
