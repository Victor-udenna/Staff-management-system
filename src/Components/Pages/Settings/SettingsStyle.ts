import styled from "styled-components";

const SettingsStyle = styled.div`
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

  .settings {
    margin-left: 200px;
    padding: 20px;
    width: 100%;
    overflow: hidden;
    color: black;
  }
`;

export default SettingsStyle;
