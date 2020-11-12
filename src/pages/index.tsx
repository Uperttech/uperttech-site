import { MdKeyboardArrowDown } from 'react-icons/md'
import Navbar from '~/components/Navbar'
import Link from 'next/link'

import * as S from '~/styles/pages/Home'
import SEO from '~/components/SEO'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Home: React.FC = () => {
  return (
    <S.Container id="home">
      <SEO
        title="Uperttech | Soluções inteligentes para modernizar sua empresa"
        shouldExcludeTitleSuffix
        image="logo.png"
      />
      <Navbar />
      <S.Background src={`${BASE_PATH}/background.svg`} />
      <S.WrapperContainer>
        <S.MainContent>
          <S.WrapperMainContent>
            <h1>Soluções inteligentes para modernizar sua empresa</h1>
            <Link href="/orcamento" passHref>
              <S.NavigateToBudget>Solicitar orçamento</S.NavigateToBudget>
            </Link>
            <S.ArtImageBackground
              src={`${BASE_PATH}/art.svg`}
              alt="background"
            />
          </S.WrapperMainContent>
        </S.MainContent>

        <S.About id="quemsomos">
          <S.WrapperAbout>
            <S.HeaderAbout>
              <h3>Quem somos</h3>
              <p>
                Com o impulso de melhorar continuamente a UPERTTECH foi criada
                no ano de 2020, tendo como diretriz a entrega de soluções
                tecnológicas que buscam melhorar e otimizar os processos de
                nossos clientes.
              </p>
            </S.HeaderAbout>
            <S.Grid>
              <GridItem title="Missão">
                Criar produtos inovadores que superem as expectativas de nossos
                clientes e contribuam para a sociedade como um todo.
              </GridItem>
              <GridItem title="Valores">
                Pró-atividade.
                <br />
                Comprometimento.
                <br />
                Compromisso com os prazos.
                <br />
                Inovação.
                <br />
              </GridItem>
              <GridItem title="Visão">
                Ser uma referência de excelência em soluções, na área de
                tecnologia da informação e processos organizacionais.
              </GridItem>
            </S.Grid>
          </S.WrapperAbout>
        </S.About>

        <S.Services id="servicos">
          <S.WrapperServices>
            <S.DropdownServices>
              <DropdownItem>Consultoria em Gestão de TI</DropdownItem>
              <DropdownItem>Mentoria em Organização Digital</DropdownItem>
              <DropdownItem>
                Consultoria em desenvolvimento de sistemas
              </DropdownItem>
              <DropdownItem>Consultoria em Governança Corporativa</DropdownItem>
              <DropdownItem>Serviço de apoio administrativo</DropdownItem>
            </S.DropdownServices>
            <S.Description>
              <h2>Nossos serviços</h2>
              <p>
                São serviço focado em diagnósticos e processos com a finalidade
                de suprir necessidades específicas do cliente por meio de
                recomendações de ações e apontamento de soluções.
              </p>
            </S.Description>
          </S.WrapperServices>
        </S.Services>
      </S.WrapperContainer>
    </S.Container>
  )
}

const DropdownItem: React.FC = ({ children }) => (
  <S.DropdownItem>
    <strong>{children}</strong>
    <MdKeyboardArrowDown size={20} color="#112B7D" />
  </S.DropdownItem>
)

const GridItem: React.FC<{ title: string }> = ({ title, children }) => (
  <S.GridItem>
    <h4>{title}</h4>
    <p>{children}</p>
  </S.GridItem>
)

export default Home
