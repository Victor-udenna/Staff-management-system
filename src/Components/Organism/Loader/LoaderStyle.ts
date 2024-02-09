import styled from 'styled-components'

const LoaderStyle = styled.div`
  .loader {
    background-color: rgba(225, 225, 225, 0.1);
    z-index: 4000;
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: montserrat;
    
  }
`

export default LoaderStyle
