import styled from 'styled-components'

const GrossPaymentStyle = styled.div`
  margin-top: 40px;

  .gross-header_container {
    border: 1.5px solid #dfe6df;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    padding-bottom: 40px;
  }

  .gross-header {
    color: #000;
    font-weight: 600;
    font-size: 17px;
  }

  .gross-card_container{
    margin-top: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }
`

export default GrossPaymentStyle
