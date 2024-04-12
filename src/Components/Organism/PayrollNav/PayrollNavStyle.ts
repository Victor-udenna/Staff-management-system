import styled from 'styled-components'

const PayrollNavStyle = styled.div`
  .payroll-nav {
    width: 100%;
  }

  .payroll-nav_container {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .payroll-nav_button {
    border: 1px solid #dfe6df;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .payroll-nav_button.active {
    border: 1px solid #228b22;
  }
`

export default PayrollNavStyle
