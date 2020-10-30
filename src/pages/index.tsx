import * as S from '~/styles/pages/Home'
import Header from '~/components/Header'

const Home: React.FC = () => {
  return (
    <>
      <S.Container src="/images/background.svg" unsized />
      <Header />
      {/* <MainContent /> */}
    </>
  )
}

export default Home
