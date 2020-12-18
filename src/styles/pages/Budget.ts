import { CSSProperties } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 100px;
`

export const Background = styled.img`
  position: fixed;
  z-index: -99;
`
export const MainContent = styled.section`
  width: 100%;
  height: 100%;
  max-height: 1000px;
`
export const WrapperMainContent = styled.div`
  width: 100%;
  /* max-width: 1600px; */
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  align-items: center;
  flex-direction: column;

  > h1 {
    color: #112b7d;
    font-size: min(7vw, 60px);
    width: 100%;
    max-width: 750px;
    text-align: center;
    font-weight: 700;
    margin-top: 150px;
  }

  > h4 {
    color: #8a8a8a;
    font-size: min(7vw, 20px);
    text-align: center;
    margin-top: 20px;
  }
`

export const SectionForm = styled.form`
  width: 100%;
  height: 100%;
`

export const WrapperSectionForm = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  > fieldset {
    border: 0;
    width: 100%;

    > legend {
      > h2 {
        color: #112b7d;
        font-size: min(4vw, 24px);
        font-weight: 600;
      }
    }

    & + fieldset {
      margin-top: 20px;
    }
  }
`
export const InputGroup = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  /* Input do Telefone */
  > input {
    width: 100%;
    max-width: 545px;
    padding: 10px 20px;
    border: 0;
    color: #000;
    border-radius: 4px;
    font-size: 18px;
    margin-right: 20px;

    ::placeholder {
      color: #b4b4b4;
      font-size: 14px;
    }
  }
  & + aside {
    margin-top: 20px;
  }

  > div + div {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > input {
      margin-right: 0;
      max-width: 100%;
    }

    > div + div {
      margin-left: 0px;
    }
  }
`
export const TextAreaGroup = styled.aside`
  width: 100%;

  > div + div {
    margin-top: 20px;
  }
`
export const StylesSelect = {
  placeholder: (defaultStyles: CSSProperties) => {
    return {
      ...defaultStyles,
      color: '#b4b4b4',
      fontSize: '14px'
    }
  },
  control: (defaultStyles: CSSProperties) => {
    return {
      ...defaultStyles,
      border: 0,
      padding: 5
    }
  }
}

export const SelectGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  > div {
    width: 100%;

    & + div {
      margin-left: 25px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div + div {
      margin-left: 0px;
      margin-top: 25px;
    }
  }
`

export const WrapperRecaptchaAndButton = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > button {
    margin-top: 25px;
  }
`
