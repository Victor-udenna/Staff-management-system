import styled from 'styled-components'

const EmployeeStyle = styled.div`
  * {
    padding: 0;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
  }

  .employee {
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
    font-size: 24px;
    padding: 0px 0px 28px 0px;
  }
`

export default EmployeeStyle
