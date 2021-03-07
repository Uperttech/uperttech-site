import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: #6a6180;
`

export const Input = styled.input`
  margin-left: 15px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  padding: 5px 0px;
  border: 0;
  background: none;

  border-bottom: 1px solid #6a6180;

  background: none;
  height: 25px;
  width: 25px;
  flex-shrink: 0;
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
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const OtherInput = styled.input`
  border: none;
  background: none;
  border-bottom: #6a6180 solid 1px;
  font-size: 16px;

  ::placeholder {
    font-size: 16px;
    color: #6a6180;
  }
`
