import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <>
      <S.Container>
        <Image
          src="/images/logo.png"
          alt="Uperttech"
          width={220}
          height={20}
          priority
        />
        <S.Navigation>
          <Link href="/">
            <a>Quem somos</a>
          </Link>
          <Link href="/tdetdte">
            <a>Serviços</a>
          </Link>
          <Link href="/products" passHref>
            <S.NavigateToProducts>Soluções</S.NavigateToProducts>
          </Link>
        </S.Navigation>
      </S.Container>
    </>
  )
}

export default Header
