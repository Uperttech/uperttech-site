import styled from 'styled-components'

export const Container = styled.div<{ isDropdownItemActive: boolean }>`
  & + div {
    margin-top: 15px;
  }

  > button {
    color: #112b7d;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    background: #fff;
    padding: 15px 20px 15px 30px;
    border: 0;
    border-radius: ${props =>
      props.isDropdownItemActive ? '8px 8px 0px 0px' : '8px'};
    cursor: pointer;
    transition: all 200ms ease-in-out;

    > svg {
      flex-shrink: 0;
      margin-left: 15px;
    }

    :hover {
      box-shadow: 1px 2px 8px rgba(76, 113, 251, 0.25);
      /* background: #f1f1f1; */
    }
  }
`

export const Content = styled.aside<{ isDropdownItemActive: boolean }>`
  background: #fff;
  overflow: hidden;
  transition: max-height 0.6s ease;
  max-height: ${props => (props.isDropdownItemActive ? '160px' : '0px')};

  > div {
    padding: 10px 25px 20px 25px;
    color: #112b7d;
    font-size: 16px;
    color: #8a8a8a;
  }
`
