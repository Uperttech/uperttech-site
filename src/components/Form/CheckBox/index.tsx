import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type CheckBoxProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const CheckBox: React.FC<CheckBoxProps> = ({ label, ...props }) => {
  return (
    <S.Container>
      <label htmlFor={label}>
        <input type="checkbox" id={label} {...props} />
        {label}
      </label>
    </S.Container>
  )
}

export default CheckBox
