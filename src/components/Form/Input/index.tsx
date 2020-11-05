import { InputHTMLAttributes, useState, useCallback } from 'react'
import * as S from './styles'

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlue = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <S.Container isFocused={isFocused}>
      <input onFocus={handleInputFocus} onBlur={handleInputBlue} {...props} />
    </S.Container>
  )
}

export default Input
