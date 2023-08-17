import styled from "styled-components";

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
`;

export default PayrollStyle;
