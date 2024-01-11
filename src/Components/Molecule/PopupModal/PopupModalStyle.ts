import styled from 'styled-components'

const PopupModalStyle = styled.div`
  .modal.open{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s ease;
    z-index: 3000;
  }

  .modal.open {
    opacity: 1;
    pointer-events: auto;
  }

  .modal-content {
    width: 400px;
    height: 300px;
    background: #fff;
    padding: 24px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.09);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 16px;
    text-align: center;
  }

  .success__header__text{
  font-weight: 600;
  font-size: 24px;
  color: green;
  padding-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`

export default PopupModalStyle
