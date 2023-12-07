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
      color: #228b22;
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
`

export default EmployeeAnalysisStyle
