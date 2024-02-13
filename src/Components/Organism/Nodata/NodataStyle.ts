import styled from 'styled-components'

const NodataStyle = styled.div`
  .noData {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 100px;
    gap: 30px;
    .nodataImg {
      width: 200px;
      height: auto;
      margin-left: -20px;
    }

    .nodata_text__container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: inherit;
      border: none;
      padding: 2px;
      color: black;
      cursor: pointer;
      font-size: 15px;
      font-weight: 600;
    }
  }
`

export default NodataStyle
