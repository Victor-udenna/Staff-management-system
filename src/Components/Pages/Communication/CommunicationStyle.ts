import styled from "styled-components";

const CommunicationStyle = styled.div`

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

  .header_text{
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.36px;  
    color: #051226; 
    font-size: 24px;
    padding: 8px 0px 28px 0px;
  }

  .communication {
    margin-left: 18%;
    padding: 20px;
    width: 100%;
    overflow: hidden;
    color: black;
  }

.communication_sub_container{
  display: grid;
  grid-template-columns: 1.31fr 2fr;
  gap: 20px;
}

`

export default CommunicationStyle