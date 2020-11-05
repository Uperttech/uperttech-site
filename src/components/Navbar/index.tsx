import { useEffect, useState } from 'react'
import * as S from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const { pathname } = useRouter()
  const [toggleBackgroundHeader, setToggleBackgroundHeader] = useState(false)

  useEffect(() => {
    if (pathname === '/orcamento') {
      const scrollListener = () => {
        if (window.scrollY > 100) {
          setToggleBackgroundHeader(true)
        } else {
          setToggleBackgroundHeader(false)
        }
      }
      window.addEventListener('scroll', scrollListener)
      return () => {
        window.removeEventListener('scroll', scrollListener)
      }
    }
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
        <Link href="#" passHref>
          <S.Logo
            src="/images/logo.png"
            alt="Uperttech"
            width={220}
            height={20}
            priority
          />
        </Link>
        <S.Navigation>
          <Link href="/#quemsomos">
            <a>Quem somos</a>
          </Link>
          <Link href="/#servicos">
            <a>Serviços</a>
          </Link>
          <Link href="/produtos" passHref>
            <S.NavigateToProducts>Soluções</S.NavigateToProducts>
          </Link>
        </S.Navigation>
      </S.Container>
    </>
  )
}

export default Header
