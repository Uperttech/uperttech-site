import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
    font-weight: 600;
    margin-top: 150px;
    animation: ${appearFromLeft} 1s;
  }
`

export const ArtImageBackground = styled.img`
  margin-top: -210px;
  opacity: 0.8;
  z-index: -1;
  width: 80%;
`
export const NavigateToBudget = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 60px;
  padding: 15px 28px;
  margin-top: 40px;
  background: #4c71fb;
  box-shadow: 0 5px 20px rgb(76, 113, 251, 0.8);
  font-size: 18px;
  font-weight: 500;
  color: #f5feff;
  animation: ${appearFromTop} 1s;
  transition: all 200ms ease-in-out;
  :hover {
    transform: scale(1.02);
  }
`

export const About = styled.section`
  width: 100%;
  height: 100%;
`
export const WrapperAbout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 30px;
`
export const HeaderAbout = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > h3 {
    color: #112b7d;
    font-size: 36px;
    font-weight: bold;
  }

  > p {
    text-align: center;
    margin-top: 14px;
    line-height: 30px;
    font-size: 20px;
    color: #8a8a8a;
  }
`

export const Grid = styled.ul`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 0 100px;
  > li {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;

    > h4 {
      font-size: 28px;
      color: #112b7d;
      font-weight: bold;
    }

    > p {
      margin-top: 16px;
      color: #8a8a8a;
      font-size: 18px;
      text-align: center;
      line-height: 24px;
    }
  }
`

export const Services = styled.section`
  margin-top: 70px;
  width: 100%;
  height: 100%;
`

export const WrapperServices = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
`
export const DropdownServices = styled.div`
  width: 100%;
  max-width: 530px;
  padding: 0 20px;

  > div {
    color: #112b7d;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 15px 20px 15px 30px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    & + div {
      margin-top: 20px;
    }

    :hover {
      box-shadow: 1px 2px 8px rgba(76, 113, 251, 0.25);
    }
  }
`

export const Description = styled.div`
  width: 100%;
  max-width: 596px;
  background-size: cover;
  background: url('/images/ellipse.svg') no-repeat center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    color: #112b7d;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
  }

  > p {
    width: 100%;
    max-width: 450px;
    margin-top: 30px;

    line-height: 24px;
    text-align: center;
    color: #8a8a8a;
  }
`
