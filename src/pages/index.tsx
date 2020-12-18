import Navbar from '~/components/Navbar'
import Link from 'next/link'

import * as S from '~/styles/pages/Home'
import SEO from '~/components/SEO'
import { TextArea, Input } from '~/components/Form'
import { ActionButton } from '~/components/ActionButton'
import { useState, FormEvent, useEffect } from 'react'
import { useApp } from '~/providers/AppProvider'
import { ErrorDialog } from '~/components/ErrorDialog'
import DropdownItem from '~/components/DropdownItem'
// import { toast } from 'react-toastify'

type DataForm = {
  name?: string
  email?: string
  message?: string
}

const Home: React.FC = () => {
  const [dataForm, setDataForm] = useState<DataForm>({})
  const { error: appError, loading, sendContact } = useApp()
  const [error, setError] = useState<string | undefined>(appError)

  const changeDataForm = (key: keyof typeof dataForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setDataForm({ ...dataForm, [key]: e.target.value })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, message } = dataForm

    if (!Object.values(dataForm).find(v => !!v)) {
      return setError('Preencha todos os campos')
    }

    await sendContact({
      name,
      email,
      message
    })

    // toast.success('Mensagem enviada com sucesso!')
  }

  useEffect(() => {
    setError(appError)
  }, [appError])

  return (
    <S.Container id="home">
      <SEO
        title="Uperttech | Soluções inteligentes para modernizar sua empresa"
        shouldExcludeTitleSuffix
        image="logo.png"
      />
      <Navbar />
      <S.Background src="/background.svg" />
      <S.WrapperContainer>
        <S.MainContent>
          <S.WrapperMainContent>
            <h1>Soluções inteligentes para modernizar sua empresa</h1>
            <Link href="/orcamento" passHref>
              <S.NavigateToBudget>Solicitar orçamento</S.NavigateToBudget>
            </Link>
            <S.ArtImageBackground src="/art.svg" alt="background" />
          </S.WrapperMainContent>
        </S.MainContent>

        <S.About id="quemsomos">
          <S.WrapperAbout>
            <S.HeaderAbout>
              <h3>Quem somos</h3>
              <p>
                A UPERTTECH foi criada no ano de 2020, tendo como diretriz a
                entrega de soluções tecnológicas que buscam melhorar e otimizar
                os processos de nossos clientes.
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
              <DropdownItem
                title="Consultoria em Gestão de TI"
                content="Mapear os processos de sua TI com um diagnóstico de maturidade e elaborar um plano estratégico focando em um negócio que gera resultado."
              />
              <DropdownItem
                title="Mentoria em Organização Digital"
                content="Posicionamento na internet com desenvolvimento e hospedagem de site com os melhores provedores do mercado com ótima qualidade e segurança."
              />
              <DropdownItem
                title="Consultoria em desenvolvimento de sistemas"
                content="Consultoria nas melhores práticas de desenvolvimento de sistemas para web, com mentoria em utilização de testes automatizados, integração continua e uso correto de repositórios."
              />
              <DropdownItem
                title="Consultoria em Governança Corporativa"
                content="Consultoria na elaboração de um mapa estratégico utilizando o balanced scorecard criando indicadores de fácil acompanhamento."
              />
              <DropdownItem
                title="Serviço de apoio administrativo"
                content="Escritório virtual, mentoria em levantamento de estoque e levantamento patrimonial, e outros serviços que facilitem o operacional alcançar o objetivo estratégico."
              />
            </S.DropdownServices>
            <S.Description>
              <h2>Nossos serviços</h2>
              <p>
                São serviços focados em diagnósticos e processos com a
                finalidade de suprir necessidades específicas do cliente por
                meio de recomendações de ações e apontamento de soluções.
              </p>
            </S.Description>
          </S.WrapperServices>
        </S.Services>

        <S.Contact id="contato">
          <S.WrapperContact>
            <h2>Entre em contato conosco</h2>

            {/*

            <S.SubtitleContact>
              Seu contato é muito importante para nós. Qualquer crítica, dúvida
              ou elogio fale conosco.
            </S.SubtitleContact>

            {error && <ErrorDialog message={error} />}
            <form onSubmit={handleSubmit}>
              <S.InputGroup>
                <Input
                  required
                  type="text"
                  placeholder="Seu nome"
                  onChange={changeDataForm('name')}
                />
                <Input
                  required
                  type="email"
                  placeholder="Seu email"
                  onChange={changeDataForm('email')}
                />
              </S.InputGroup>
              <TextArea
                required
                rows={5}
                placeholder="Sua mensagem"
                onChange={changeDataForm('message')}
              />

              <S.WrapperButton>
                <ActionButton
                  text="Enviar"
                  primary
                  type="submit"
                  loading={loading}
                />
              </S.WrapperButton>
            </form> */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSddGyufP7tk8O7wcqTpm-qvC-oh-1rByKU9lGYtLbNYh5IWog/viewform?embedded=true"
              width="900"
              height="900"
              frameBorder="0"
            >
              Carregando…
            </iframe>
          </S.WrapperContact>
        </S.Contact>
      </S.WrapperContainer>
    </S.Container>
  )
}

const GridItem: React.FC<{ title: string }> = ({ title, children }) => (
  <S.GridItem>
    <h4>{title}</h4>
    <p>{children}</p>
  </S.GridItem>
)

export default Home
