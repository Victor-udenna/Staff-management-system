import styled from 'styled-components'

const FetchMoreStyle = styled.div`
  .fetchmore {
    width: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0px 0px 0px;
    border-top: 1px solid green;
  }

  .count__text__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .currentdata {
    color: #000;
    font-weight: 600;
  }

  .totaldata {
    color: grey;
    font-weight: 600;
  }

  .fetch_button {
    height: 35px;
    width: 100px;
    border: 1px solid #228b22;
    color: #228b22;
    padding: 10px;
    font-weight: bold;
    width: fit-content;
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
  }
`

export default FetchMoreStyle
