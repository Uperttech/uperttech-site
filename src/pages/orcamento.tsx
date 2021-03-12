import { useState, useEffect, FormEvent } from 'react'
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

type DataForm = {
  name?: string
  email?: string
  phone?: string
  company?: string
  description?: string
  references?: string
  deadlineValue?: SelectData
  budgetValue?: SelectData
  leadFromValue?: SelectData[]
}

const Budget: React.FC = () => {
  const { error: authError, sendBudget, loading } = useApp()
  const [error, setError] = useState<string | undefined>(authError)
  const [dataForm, setDataForm] = useState<DataForm>({})

  const changeDataForm = (key: keyof typeof dataForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setDataForm({ ...dataForm, [key]: e.target.value })

  const changeSelectDataForm = (
    key: keyof Pick<DataForm, 'deadlineValue' | 'budgetValue' | 'leadFromValue'>
  ) => (value: DataForm[typeof key]) =>
    setDataForm({ ...dataForm, [key]: value })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const {
      name,
      email,
      company,
      phone,
      description,
      deadlineValue,
      budgetValue,
      leadFromValue,
      references
    } = dataForm

    const formData = new FormData()
    formData.append('entry.128360191', name)
    formData.append('entry.6011279', email)
    formData.append('entry.1501489900', phone)
    formData.append('entry.1858906124', company)
    formData.append('entry.1415092291', description)
    formData.append('entry.914415981', references)
    formData.append('entry.264284994', deadlineValue.value)
    formData.append('entry.1651142815', budgetValue.value)
    sendBudget('Seu orçamento foi enviado com sucesso !', '/', formData)
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
      <S.SectionForm
        id="form-budget"
        target="hidden_iframe"
        onSubmit={handleSubmit}
      >
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
                onChange={changeDataForm('name')}
              />
              <Input
                required
                type="email"
                placeholder="Seu email"
                onChange={changeDataForm('email')}
              />
            </S.InputGroup>

            <S.InputGroup>
              <InputPhone
                onChange={changeDataForm('phone')}
                required
                placeholder="Telefone"
                format="(##) # ####-####"
                mask="_"
                type="tel"
              />
              <Input
                onChange={changeDataForm('company')}
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
                onChange={changeDataForm('description')}
              />
              <TextArea
                rows={5}
                placeholder="Quais são suas referências? (opcional)"
                onChange={changeDataForm('references')}
              />
            </S.TextAreaGroup>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Mais detalhes:</h2>
            </legend>
            <S.SelectGroup>
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
