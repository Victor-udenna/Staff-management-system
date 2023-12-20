import styled from 'styled-components'

const EmployeeAnalysisStyle = styled.div`
  .employee_analysis {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .analysis_card {
    width: 100%;
    text-align: start;
    border: none;
    padding: 16px 12px;
    border-radius: 4px;
    display: flex;
    align-items: start;
    gap: 30px;
    border: 1px solid #dfe6df;
    cursor: pointer;
    background-color: white;
  }

  .analysis_header {
    padding-bottom: 11px;
    font-weight: 600;
    font-size: 16px;
  }

  .active,
  .inactive,
  .pending,
  .total {
    .count {
      font-size: 13px;
      font-weight: 600;
    }
  }

  .total {
    .count {
      color: #000000;
    }
  }

  .active {
    .count {
      color: #228b22;
    }
  }

  .inactive {
    .count {
      color: red;
    }
  }

  .pending {
    .count {
      color: orange;
    }
  }

  .analysis_card.total.is_active {
    border: 1px solid #dfe6df;
  }

  .analysis_card.active.is_active {
    border: 1.4px solid #228b22;
  }

  .analysis_card.inactive.is_active {
    border: 1.4px solid red;
  }

  .analysis_card.pending.is_active {
    border: 1.4px solid orange;
  }
`

export default EmployeeAnalysisStyle
