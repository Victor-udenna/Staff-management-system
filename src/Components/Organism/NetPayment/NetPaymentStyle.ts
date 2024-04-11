import styled from 'styled-components'

const NetPaymentStyle = styled.div`
  margin-top: 40px;

  .netpayment-header_container {
    border: 1.5px solid #dfe6df;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    padding-bottom: 40px;
  }

  .netpayment-header {
    color: #000;
    font-weight: 600;
    font-size: 17px;
  }

  .net-card_container {
    display: grid;
    grid-template-columns: repeat(3, 4fr);
    margin-top: 24px;
    gap: 24px;
    width: 100%;
  }
`

export default NetPaymentStyle
