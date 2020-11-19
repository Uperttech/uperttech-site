/* eslint-disable multiline-ternary */
import * as S from './styles'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { useState } from 'react'

type DropdownItemProps = {
  title: string
  content: string
}

const DropdownItem: React.FC<DropdownItemProps> = ({ title, content }) => {
  const [isDropdownItemActive, setIsDropdownItemActive] = useState(false)

  const handleDropdownItemActive = () => {
    setIsDropdownItemActive(prevState => !prevState)
  }

  return (
    <S.Container isDropdownItemActive={isDropdownItemActive}>
      <button onClick={handleDropdownItemActive}>
        <strong>{title}</strong>
        {isDropdownItemActive ? (
          <MdKeyboardArrowDown size={20} color="#112B7D" />
        ) : (
          <MdKeyboardArrowRight size={20} color="#112B7D" />
        )}
      </button>

      <S.Content isDropdownItemActive={isDropdownItemActive}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </S.Content>
    </S.Container>
  )
}

export default DropdownItem
