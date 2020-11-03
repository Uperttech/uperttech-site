import { useEffect, useState } from 'react'
import * as S from './styles'
import Link from 'next/link'

const Header: React.FC = () => {
  const [toggleBackgroundHeader, setToggleBackgroundHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 300) {
        setToggleBackgroundHeader(true)
      } else {
        setToggleBackgroundHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      <S.Container toggleBackground={toggleBackgroundHeader}>
        <Link href="/#home" passHref>
          <S.Logo
            src="/images/logo.png"
            alt="Uperttech"
            width={220}
            height={20}
            priority
          />
        </Link>
        <S.Navigation>
          <Link href="/#about">
            <a>Quem somos</a>
          </Link>
          <Link href="/#services">
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
