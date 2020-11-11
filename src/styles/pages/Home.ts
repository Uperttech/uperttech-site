import styled, { keyframes } from 'styled-components'

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
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
`

export const WrapperContainer = styled.div`
  width: 100%;
  margin: 30px auto;
`

export const Background = styled.img`
  position: fixed;
  z-index: -99;
`
export const MainContent = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  max-height: 1000px;
`
export const WrapperMainContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  > h1 {
    color: #112b7d;
    font-size: min(8vw, 60px);
    width: 100%;
    max-width: 750px;
    text-align: center;
    font-weight: 700;
    margin-top: 150px;
    animation: ${appearFromLeft} 1s;
  }
`

export const ArtImageBackground = styled.img`
  margin-top: -190px;
  opacity: 0.8;
  z-index: -1;
  width: 80%;

  @media (max-width: 1300px) {
    margin-top: -80px;
  }

  @media (max-width: 440px) {
    margin-bottom: 0;
    display: none;
  }
`
export const NavigateToBudget = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  height: 60px;
  padding: 15px 28px;
  max-width: min(50vw, 280px);
  width: 100%;
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

  padding: 100px 80px 0 80px;
  margin-top: -100px;
`
export const WrapperAbout = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  /* padding: 0 30px; */
`
export const HeaderAbout = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > h3 {
    color: #112b7d;
    font-size: min(7vw, 36px);
    font-weight: bold;
  }

  > p {
    text-align: center;
    margin-top: 14px;
    line-height: 30px;
    font-size: 20px;
    color: #8a8a8a;
  }

  @media (max-width: 1300px) {
    margin-top: 0;
  }
`

export const Grid = styled.ul`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const GridItem = styled.li`
  flex: 1;
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

  @media (max-width: 768px) {
    background: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08);
    border-radius: 4px;

    & + li {
      margin-top: 20px;
    }
  }
`

export const Services = styled.section`
  margin-top: 70px;
  width: 100%;
  height: 100%;
  padding: 0 30px;

  padding: 100px 30px 0 30px;
  margin-top: -100px;
`

export const WrapperServices = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  /* padding: 0 30px; */

  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const DropdownServices = styled.div`
  width: 100%;
  max-width: 530px;

  @media (max-width: 1024px) {
    margin-top: 32px;
  }
`

export const DropdownItem = styled.div`
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

  > svg {
    flex-shrink: 0;
    margin-left: 15px;
  }

  :hover {
    box-shadow: 1px 2px 8px rgba(76, 113, 251, 0.25);
  }
`

export const Description = styled.div`
  width: 100%;
  max-width: 596px;
  background-size: cover;
  background: url('/ellipse.svg') no-repeat center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    color: #112b7d;
    font-weight: bold;
    font-size: min(7vw, 36px);
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

  @media (max-width: 1024px) {
    background: none;
  }
`
