import styled, { css, keyframes } from 'styled-components'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type ActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean
  loading?: boolean
  text: string
}

export const ActionButton: React.FC<ActionButtonProps> = props => (
  <StyledActionButton type="button" {...props}>
    {props.loading ? <AiOutlineLoading3Quarters size={20} color="#FFF" /> : ''}
    {props.loading ? '' : props.text}
  </StyledActionButton>
)

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const StyledActionButton = styled.button<ActionButtonProps>`
  background-color: ${props => (props.primary ? '#4C71FB' : '#c2c2c2')};
  display: block;
  color: #fff;
  font-weight: 500;
  font-family: inherit;
  border: 0;
  padding: 15px 25px;
  width: 100%;
  /* max-width: 420px; */
  height: 50px;
  text-align: center;
  font-size: 17px;
  border-radius: 3px;
  cursor: pointer;
  opacity: 0.9;
  transition: all ease-in-out 0.2s;

  :hover {
    opacity: 1;
  }

  ${props =>
    props.loading &&
    css`
      cursor: not-allowed;
      opacity: 0.8;
      > svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`
