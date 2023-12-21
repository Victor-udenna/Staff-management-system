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
  }

  tbody tr:hover {
    background-color: rgb(245, 247, 250);
  }
`

export default EmployeeTableStyle
