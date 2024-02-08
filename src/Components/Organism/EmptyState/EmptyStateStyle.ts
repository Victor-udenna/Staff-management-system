import styled from 'styled-components'

const EmptyStateStyle = styled.div`
  .empty__state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px;
    gap: 50px;
  }

  .empty__state__header {
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }

  .empty__state__img {
    width: 250px;
    height: auto;
    margin-left: 60px;
  }

  .empty__state__decs {
    font-size: 16px;
    font-weight: 500;
    colot: #000;
  }
`

export default EmptyStateStyle
