import * as S from './styles'
import Link from 'next/link'

type NavBarProps = {
  handleSelectOptionNavBar: () => void
}

const NavbarMobile: React.FC<NavBarProps> = ({ handleSelectOptionNavBar }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <Link href="/#quemsomos">
          <a onClick={handleSelectOptionNavBar}>Quem somos</a>
        </Link>
        <Link href="/#servicos">
          <a onClick={handleSelectOptionNavBar}>Serviços</a>
        </Link>
        <Link href="/#contato">
          <a onClick={handleSelectOptionNavBar}>Contato</a>
        </Link>
        <Link href="/produtos">
          <a onClick={handleSelectOptionNavBar}>Soluções</a>
        </Link>
      </S.Wrapper>
    </S.Container>
  )
}

export default NavbarMobile
