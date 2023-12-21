import styled from 'styled-components'

const EmployeeTableStyle = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 40px;
  }

  th,
  td {
    text-align: left;
  }

  th {
    border-bottom: 1px solid #dfe6df;
    padding: 16px 10px;
  }

  td {
    padding: 12px 10px;
  }

  .header__input {
    visibility: hidden;
  }

  .employee__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  td {
    font-size: 14px;
  }

  .employee__name__container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .employee__name {
    font-weight: 600;
  }

  td input[type='checkbox'] {
    margin-right: 4px;
  }

  .more__header {
    text-align: left;
    visibility: hidden;
  }

  .more__icon {
    text-align: end;
  }

  tbody tr {
    transition: background-color 0.3s ease;
    cursor: pointer;
    position: relative;
  }

  tbody tr:hover {
    background-color: rgb(245, 247, 250);
  }

  .popup__btn {
    background-color: inherit;
    border: none;
    position: relative;
    z-index: 0px;
    cursor: pointer;
  }

  .pop__up {
    position: absolute;
    top: 40px;
    background-color: white;
    animation: show-bg 0.2s linear forwards;
    z-index: 100;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 3px 0 rgba(0, 0, 0, 0.06);
    width: 120px;
    right: 0px;
    border-radius: 4px;
    padding: 4px;

    @keyframes show-bg {
      0% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }

    button {
      padding: 10px;
      border: none;
      border-radius: 4px;
      background-color: inherit;
      cursor: pointer;
      width: 100%;
    }

    button:hover {
      background-color: #f5f7fa;
    }
  }
`

export default EmployeeTableStyle
