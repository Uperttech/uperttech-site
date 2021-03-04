import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > input {
    margin-left: 15px;
    font-size: 16px;
    width: 100%;
    max-width: 300px;
    padding: 5px 0px;
    border: 0;
    background: none;

    border-bottom: 1px solid #6a6180;
  }

  > label {
    display: flex;
    align-items: center;
    color: #6a6180;
  }

  > label input {
    background: none;
    height: 25px;
    width: 25px;
    margin-right: 15px;
    border: 2px solid #6a6180;
    border-radius: 8px;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f00c';
      font-size: 14px;
      color: #fff;
      display: none;
    }
    transition: background 0.2s;
    &:hover {
      background: #dcdce6;
    }
    &:checked {
      background: #112b7d;
      border: none;
    }
    &:checked:after {
      display: block;
    }
  }
`
