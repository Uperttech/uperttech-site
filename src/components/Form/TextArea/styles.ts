import styled, { css } from 'styled-components'

export const Container = styled.div<{ isFocused: boolean }>`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #b4b4b4;
  padding: 5px;
  background: #fff;
  position: relative;
  ${props =>
    props.isFocused &&
    css`
      border-color: #4c71fb;
    `}

  textarea {
    resize: none;

    font-size: 18px;
    border: 0;
    background: transparent;

    color: #000;
    width: 100%;
    height: 100%;

    ::placeholder {
      color: #b4b4b4;
      font-size: 14px;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #4c71fb;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-track-piece {
      background: #ddd;
      border-radius: 4px;
    }
  }
`
