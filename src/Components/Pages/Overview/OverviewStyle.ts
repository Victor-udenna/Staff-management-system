import styled from "styled-components";

const OverviewStyle = styled.div`
  * {
    padding: 0;
  }

  // 1 #6365EF
  // 2 #A5B4FD
  // 3 #E0E7FF

  .Dashboard_container {
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
  }

  .overview{
    margin-left: 200px;
    padding: 20px;
    width: 100%;
    overflow: hidden;
  }
`;

export default OverviewStyle;
