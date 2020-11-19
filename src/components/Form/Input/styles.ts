import styled, { css } from 'styled-components'

export const Container = styled.div<{ isFocused: boolean }>`
  width: 100%;
  /* max-width: 545px;   */
  padding: 10px 20px;
  background: #fff;
  border: 0;
  color: #000;
  border-radius: 4px;
  position: relative;
  transition: all ease-in-out 0.2s;
  ${props =>
    props.isFocused &&
    css`
      border-color: #4c71fb;
    `}

  > input {
    font-size: 18px;
    width: 100%;
    background: transparent;
    border: 0;
    color: #000;
    ::placeholder {
      color: #b4b4b4;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    :not(:nth-child(1)) {
      margin-top: 20px;
    }
    max-width: 100%;
  }
`
