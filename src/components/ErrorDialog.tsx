import styled from 'styled-components'
import { MdError } from 'react-icons/md'

export const ErrorDialog: React.FC<{ message: string }> = ({ message }) => {
  return (
    <StyledErrorDialog>
      <MdError size={20} />
      {message}
    </StyledErrorDialog>
  )
}

const StyledErrorDialog = styled.div`
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
