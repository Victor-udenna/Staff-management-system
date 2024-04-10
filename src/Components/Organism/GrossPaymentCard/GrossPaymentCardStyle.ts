import styled from 'styled-components'

const GrossPaymentCardStyle = styled.div`
  .gross-card {
    width: 320px;
    border-radius: 8px;
    border: 1px solid #dfe6df;
    padding: 16px;
  }

  .gross-card_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dfe6df;
    .card_avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .card-header_text {
      font-weight: 600;
      padding-bottom: 6px;
    }
    .card-header_desc {
      font-size: 12.5px;
      font-weight: 400;
    }
  }

  .gross-card_subheader {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .card__footer {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .card-amount-title {
      font-size: 13px;
      font-weight: 600;
    }

    .card-amount-value {
      font-size: 13px;
      font-weight: 400;
    }
  }

  .card-edit_button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #228b22;
    background-color: #e3fae3;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    top: 24px;
    right: 16px;
    cursor: pointer;
  }
`
export default GrossPaymentCardStyle
