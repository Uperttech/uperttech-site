import { TextareaHTMLAttributes, useState, useCallback } from 'react'
import * as S from './styles'

const TextArea: React.FC<TextareaHTMLAttributes<
  HTMLTextAreaElement
>> = props => {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlue = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <S.Container isFocused={isFocused}>
      <textarea
        onFocus={handleInputFocus}
        onBlur={handleInputBlue}
        {...props}
      />
    </S.Container>
  )
}

export default TextArea
