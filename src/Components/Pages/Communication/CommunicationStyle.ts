import styled from "styled-components";

const CommunicationStyle = styled.div`
  * {
    padding: 0;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100vh;
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

  .communication {
    margin-left: 18%;
    padding: 20px 0px 20px 20px;
    width: 100%;
    overflow: hidden;
    color: black;
    display: grid;
    grid-template-columns: 1.31fr 2fr;
    gap: 20px;
  }

  // .communication_sub_container{

  // }
`;

export default CommunicationStyle;
