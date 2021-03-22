import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

type CheckBoxProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

const CheckBox: React.FC<CheckBoxProps> = ({ label, ...props }) => {
  return (
    <S.Container>
      {label ? (
        <S.Label htmlFor={label}>
          <S.Input type="checkbox" id={label} {...props} />
          {label}
        </S.Label>
      ) : (
        <S.Input type="checkbox" id={label} {...props} />
      )}
    </S.Container>
  )
}

export const OtherCheckBox = ({ name, ...props }) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <S.Container>
      <S.Input
        type="checkbox"
        value="__other_option__"
        name={name}
        checked={enabled}
        onChange={el => setEnabled(el.target.checked)}
        {...props}
      />
      <S.OtherInput
        type="text"
        placeholder="Outro"
        name={name + '.other_option_response'}
        onChange={el => setEnabled(el.target.value !== '')}
      />
    </S.Container>
  )
}

export default CheckBox
