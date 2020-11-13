/* eslint-disable multiline-ternary */
import { useEffect, useState, useCallback } from 'react'
import * as S from './styles'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { useRouter } from 'next/router'
import NavbarMobile from './NavbarMobile'

const Header: React.FC = () => {
  const { pathname } = useRouter()
  const [toggleBackgroundHeader, setToggleBackgroundHeader] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleToggleVisibleHeader = () => {
    setIsVisible(prevState => !prevState)
  }

  const handleSelectOptionNavBar = useCallback(() => {
    setIsVisible(false)
  }, [])

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
      if (window.scrollY > 50) {
        return setToggleBackgroundHeader(true)
      }

      return setToggleBackgroundHeader(false)
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <NavbarMobile handleSelectOptionNavBar={handleSelectOptionNavBar} />
      )}
      <S.Container toggleBackground={toggleBackgroundHeader}>
        <Link href="/" passHref>
          <S.Logo src="/logo.png" alt="Uperttech" />
        </Link>
        <S.Navigation>
          <Link href="/#quemsomos">
            <a>Quem somos</a>
          </Link>
          <Link href="/#servicos">
            <a>Serviços</a>
          </Link>
          <Link href="/#contato">
            <a>Contato</a>
          </Link>
          <Link href="https://cloud.uperttech.com" passHref>
            <S.NavigateToProducts>Soluções</S.NavigateToProducts>
          </Link>
        </S.Navigation>
        <S.ButtonMenu onClick={handleToggleVisibleHeader}>
          {isVisible ? (
            <FiX
              size={30}
              color={toggleBackgroundHeader ? '#4C71FB' : '#FFF'}
            />
          ) : (
            <FiMenu size={30} color="#4c71fb" />
          )}
        </S.ButtonMenu>
      </S.Container>
    </>
  )
}

export default Header
