import styled from 'styled-components'

const TransactionStyle = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow-y: hidden;
  }

  .transactions {
    margin-left: 18%;
    padding: 20px;
    width: 100%;
    overflow: hidden;
    color: black;
  }

  .header_container {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 40px;
  }

  .header_text {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.36px;
    color: #051226;
  }
`

export default TransactionStyle
