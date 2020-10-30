import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 25px 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
