import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 4;
  height: 100vh;
  width: 100vw;
  background: #4c71fb;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  > a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    padding: 20px;
    font-weight: 500;
  }
`
