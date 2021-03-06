import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/router'
import InputPhone from 'react-number-format'
import RSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'
import Options from '~/resources/options-select'
import Navbar from '~/components/Navbar'
import { ActionButton } from '~/components/ActionButton'
import { ErrorDialog } from '~/components/ErrorDialog'
import { useApp } from '~/providers/AppProvider'
import { Input, TextArea, CheckBox, OtherCheckBox } from '~/components/Form'
import * as S from '~/styles/pages/Budget'
import SEO from '~/components/SEO'

type SelectData = {
  value: string
  label: string
}

type SelectFormData = {
  deadlineValue?: SelectData
  budgetValue?: SelectData
  leadFromValue?: SelectData[]
}

const Budget: React.FC = () => {
  const router = useRouter()
  const { error: authError, sendBudget, loading } = useApp()
  const [error, setError] = useState<string | undefined>(authError)
  const [dataForm, setDataForm] = useState<SelectFormData>({})

  const changeSelectDataForm = (key: keyof SelectFormData) => (
    value: SelectFormData[typeof key]
  ) => setDataForm({ ...dataForm, [key]: value })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    await sendBudget('Seu orçamento foi enviado com sucesso', formData)

    if (!loading && !error) {
      router.push('/').then(() => window.scrollTo(0, 0))
      form.reset()
    }
  }

  useEffect(() => {
    setError(authError)
  }, [authError])

  return (
    <S.Container>
      <SEO title="Orçamento" />
      <Navbar />
      <S.Background src="/background.svg" />
      <S.MainContent>
        <S.WrapperMainContent>
          <h1>Faça seu orçamento </h1>
          <h4>
            Não sabe por onde começar? Encaminhe sua ideia que ajudamos a tornar
            realidade.
          </h4>
        </S.WrapperMainContent>
      </S.MainContent>
      <S.SectionForm id="form-budget" onSubmit={handleSubmit}>
        <S.WrapperSectionForm>
          {error && <ErrorDialog message={error} />}
          <fieldset>
            <legend>
              <h2>Sobre você: </h2>
            </legend>
            <S.InputGroup>
              <Input
                required
                type="text"
                placeholder="Seu nome"
                name="entry.128360191"
              />
              <Input
                required
                type="email"
                placeholder="Seu email"
                name="entry.6011279"
              />
            </S.InputGroup>

            <S.InputGroup>
              <InputPhone
                required
                placeholder="Telefone"
                format="(##) # ####-####"
                mask="_"
                type="tel"
                name="entry.1501489900"
              />
              <Input
                name="entry.1858906124"
                required
                type="text"
                placeholder="Nome da empresa ou projeto"
              />
            </S.InputGroup>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Sobre sua ideia:</h2>
            </legend>

            <S.TextAreaGroup>
              <TextArea
                required
                rows={5}
                placeholder="Faça uma descrição da sua ideia"
                name="entry.1415092291"
              />
              <TextArea
                rows={5}
                placeholder="Quais são suas referências? (opcional)"
                name="entry.914415981"
              />
            </S.TextAreaGroup>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Mais detalhes:</h2>
            </legend>
            <S.SelectGroup>
              <input
                type="text"
                className="none-display-input"
                name="entry.264284994"
                value={dataForm.deadlineValue?.value || ''}
                readOnly
              />
              <input
                className="none-display-input"
                type="text"
                name="entry.1651142815"
                value={dataForm.budgetValue?.value || ''}
                readOnly
              />
              <Select
                instanceId="deadline"
                options={Options.Deadline}
                placeholder="Estimativa de prazo"
                onChange={changeSelectDataForm('deadlineValue')}
              />
              <Select
                instanceId="budget"
                options={Options.BudgetValue}
                placeholder="Estimativa de orçamento"
                onChange={changeSelectDataForm('budgetValue')}
              />
            </S.SelectGroup>
            <h2>Como conheceu a Uperttech?</h2>
            <CheckBox
              name="entry.215608498"
              label="Indicação de amigo"
              value="Indicação de amigo"
            />
            <CheckBox
              name="entry.215608498"
              label="Pesquisa no Google"
              value="Pesquisa no Google"
            />
            <CheckBox name="entry.215608498" label="Evento" value="Evento" />
            <CheckBox
              name="entry.215608498"
              label="Redes sociais (Facebook, Twitter, Linkedin)"
              value="Redes sociais (Facebook, Twitter, Linkedin)"
            />
            <OtherCheckBox name="entry.215608498" />
          </fieldset>
          <S.WrapperRecaptchaAndButton>
            <ActionButton
              text="Enviar"
              primary
              type="submit"
              loading={loading}
            />
          </S.WrapperRecaptchaAndButton>
        </S.WrapperSectionForm>
      </S.SectionForm>
    </S.Container>
  )
}

export default Budget

const Select = (props: SelectProps<OptionTypeBase>) => (
  <RSelect styles={S.StylesSelect} isSearchable={false} {...props} />
)
