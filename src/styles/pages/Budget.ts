import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  padding-bottom: 100px;
`

export const Background = styled(Image)`
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

  display: flex;
  align-items: center;
  flex-direction: column;

  > h1 {
    color: #112b7d;
    font-size: min(4vw, 60px);
    width: 750px;
    text-align: center;
    font-weight: 700;
    margin-top: 150px;
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

  > fieldset {
    border: 0;

    > legend {
      > h2 {
        color: #112b7d;
        font-size: 24px;
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

  > input {
    width: 100%;
    max-width: 545px;
    padding: 10px 20px;
    border: 1px solid #b4b4b4;
    color: #000;
    border-radius: 4px;
    font-size: 18px;

    ::placeholder {
      color: #b4b4b4;
    }
  }
  & + aside {
    margin-top: 20px;
  }
`
export const TextAreaGroup = styled.aside`
  width: 100%;

  > div + div {
    margin-top: 20px;
  }
`

export const SelectGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  > div {
    flex: 1;

    & + div {
      margin-left: 25px;
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

export const StyledErrorDialog = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fae5e5;
  color: red;
  font-size: 12px;
  margin-bottom: 20px;
  svg {
    margin-right: 5px;
  }
`
