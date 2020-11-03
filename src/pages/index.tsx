import { MdKeyboardArrowDown } from 'react-icons/md'
import Header from '~/components/Header'
import Link from 'next/link'

import * as S from '~/styles/pages/Home'

const Home: React.FC = () => {
  return (
    <S.Container id="home">
      <Header />
      <S.Background src="/images/background.svg" unsized />

      <S.MainContent>
        <S.WrapperMainContent>
          <h1>Soluções inteligentes para modernizar sua empresa</h1>
          <Link href="/budget" passHref>
            <S.NavigateToBudget>Solicitar orçamento</S.NavigateToBudget>
          </Link>
          <S.ArtImageBackground src="/images/art.svg" alt="background" />
        </S.WrapperMainContent>
      </S.MainContent>

      <S.About>
        <S.WrapperAbout>
          <S.HeaderAbout>
            <h3 id="about">Quem somos</h3>
            <p>
              Com o impulso de melhorar continuamente a UPERTTECH foi criada no
              ano de 2020, tendo como diretriz a entrega de soluções
              tecnológicas que buscam melhorar e otimizar os processos de nossos
              clientes.
            </p>
          </S.HeaderAbout>
          <S.Grid>
            <li>
              <h4>Missão</h4>
              <p>
                Criar produtos inovadores que supere as expectativas de nossos
                clientes e contribuam para a sociedade como um todo.
              </p>
            </li>
            <li>
              <h4>Valores</h4>
              <p>
                Pró-atividade.
                <br />
                Comprometimento.
                <br />
                Compromisso com os prazos.
                <br />
                Inovação.
                <br />
              </p>
            </li>
            <li>
              <h4>Visão</h4>
              <p>
                Ser uma referência de excelência em soluções, na área de
                tecnologia da informação e processos organizacionais.
              </p>
            </li>
          </S.Grid>
        </S.WrapperAbout>
      </S.About>

      <S.Services id="services">
        <S.WrapperServices>
          <S.DropdownServices>
            <div>
              <strong>Consultoria em Gestão de TI</strong>
              <MdKeyboardArrowDown size={20} color="#112B7D" />
            </div>
            <div>
              <strong>Mentoria em Organização Digital</strong>
              <MdKeyboardArrowDown size={20} color="#112B7D" />
            </div>
            <div>
              <strong>Consultoria em desenvolvimento de sistemas</strong>
              <MdKeyboardArrowDown size={20} color="#112B7D" />
            </div>
            <div>
              <strong>Consultoria em Governança Corporativa</strong>
              <MdKeyboardArrowDown size={20} color="#112B7D" />
            </div>
            <div>
              <strong> Serviço de apoio administrativo</strong>
              <MdKeyboardArrowDown size={20} color="#112B7D" />
            </div>
          </S.DropdownServices>
          <S.Description>
            <h2>Nossos serviços</h2>
            <p>
              São serviço focado em diagnósticos e processos com a finalidade de
              suprir necessidades específicas do cliente por meio de
              recomendações de ações e apontamento de soluções.
            </p>
          </S.Description>
        </S.WrapperServices>
      </S.Services>
    </S.Container>
  )
}

export default Home
