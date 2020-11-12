import styled from 'styled-components'

export const Container = styled.div<{ toggleBackground?: boolean }>`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  padding: ${props => (props.toggleBackground ? '15px' : '25px')} 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ease-in-out 0.5s;
  background: ${props => (props.toggleBackground ? '#FFFFFF' : '')};
  box-shadow: ${props =>
    props.toggleBackground ? '0 2px 2px rgba(0, 0, 0, 0.08)' : ''};
`
export const Logo = styled.img`
  cursor: pointer;
  width: min(50vw, 220px);
`

export const Navigation = styled.nav`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: 0.2s ease;
    :not(:nth-child(3)) {
      opacity: 0.5;
    }

    :hover {
      opacity: 1;
    }
    & + a {
      margin-left: 30px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavigateToProducts = styled.a`
  background: #4c71fb;
  padding: 15px 28px;
  color: #f5feff !important;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s ease;

  :hover {
    box-shadow: 0 5px 20px rgb(76, 113, 251, 0.8);
  }
`

export const ButtonMenu = styled.button`
  display: none;
  background: none;
  border: 0;
  cursor: pointer;
  z-index: 5;

  @media (max-width: 768px) {
    display: unset;
  }
`
