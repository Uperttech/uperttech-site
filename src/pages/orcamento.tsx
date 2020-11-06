import { useState, FormEvent, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import InputPhone from 'react-number-format'
import Select from 'react-select'
import Options from '~/resources/options-select'
import Navbar from '~/components/Navbar'
import { MdError } from 'react-icons/md'
import { toast } from 'react-toastify'
import { ActionButton } from '~/components/ActionButton'
import { useApp } from '~/providers/AppProvider'
import { Input, TextArea } from '~/components/Form'
import * as S from '~/styles/pages/Budget'

const API_RECAPTCHA_KEY = process.env.NEXT_PUBLIC_API_KEY_RECAPTCHA

type SelectData = {
  value: string
  label: string
}

const Budget: React.FC = () => {
  const { error: authError, loading, createBudget } = useApp()
  const [error, setError] = useState<string | undefined>(authError)

  const [recaptchaResponse, setRecaptchaResponse] = useState<
    string | undefined
  >('')

  const [deadlineValue, setDeadlineValue] = useState<SelectData>(null)
  const [budgetValue, setBudgetValue] = useState<SelectData>(null)
  const [leadFromValue, setLeadFromValue] = useState<SelectData>(null)

  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: '',
    references: ''
  })

  const changeDataForm = (key: keyof typeof dataForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setDataForm({ ...dataForm, [key]: e.target.value })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, company, phone, description } = dataForm

    if (
      !name ||
      !email ||
      !company ||
      !description ||
      !phone ||
      !deadlineValue ||
      !budgetValue ||
      !leadFromValue
    ) {
      return setError('Preencha todos os campos')
    }

    await createBudget({
      ...dataForm,
      deadline: deadlineValue?.value,
      budgetValue: budgetValue?.value,
      leadFrom: leadFromValue?.value,
      grecaptchaResponse: recaptchaResponse
    })

    setRecaptchaResponse(undefined)
    toast.success('Orçamento enviado com sucesso!')
  }

  useEffect(() => {
    setError(authError)
  }, [authError])

  return (
    <S.Container>
      <Navbar />
      <S.Background src="/images/background.svg" />

      <S.MainContent>
        <S.WrapperMainContent>
          <h1>Faça seu orçamento </h1>
        </S.WrapperMainContent>
      </S.MainContent>

      <S.SectionForm onSubmit={handleSubmit}>
        <S.WrapperSectionForm>
          {error && <ErrorDialog message={error} />}
          <fieldset>
            <legend>
              <h2>Sobre você: </h2>
            </legend>
            <S.InputGroup>
              <Input
                type="text"
                placeholder="Seu nome"
                onChange={changeDataForm('name')}
              />
              <Input
                type="email"
                placeholder="Seu email"
                onChange={changeDataForm('email')}
              />
            </S.InputGroup>

            <S.InputGroup>
              <InputPhone
                placeholder="Telefone"
                format="(##) # ####-####"
                mask="_"
                type="tel"
                onChange={changeDataForm('phone')}
              />
              <Input
                type="text"
                placeholder="Nome da empresa ou projeto"
                onChange={changeDataForm('company')}
              />
            </S.InputGroup>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Sobre sua ideia:</h2>
            </legend>

            <S.TextAreaGroup>
              <TextArea
                rows={5}
                placeholder="Faça uma descrição da sua ideia"
                onChange={changeDataForm('description')}
              />
              <TextArea
                rows={5}
                placeholder="Quais são suas referências (Opcional)"
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
                isSearchable={false}
                options={Options.Deadline}
                placeholder="Estimativa de prazo?"
                onChange={setDeadlineValue}
                defaultValue={deadlineValue}
                styles={S.StylesSelect}
              />
              <Select
                isSearchable={false}
                options={Options.BudgetValue}
                placeholder="Estimativa de orçamento?"
                onChange={setBudgetValue}
                defaultValue={budgetValue}
                styles={S.StylesSelect}
              />
            </S.SelectGroup>
            <Select
              isSearchable={false}
              options={Options.LeadFrom}
              placeholder="Como conheceu a Uperttech?"
              onChange={setLeadFromValue}
              defaultValue={leadFromValue}
              styles={S.StylesSelect}
            />
          </fieldset>
          <S.WrapperRecaptchaAndButton>
            <ReCAPTCHA
              sitekey={API_RECAPTCHA_KEY as string}
              onChange={(value: string | null) =>
                value && setRecaptchaResponse(value)
              }
            />
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

const ErrorDialog: React.FC<{ message: string }> = ({ message }) => {
  return (
    <S.StyledErrorDialog>
      <MdError size={20} />
      {message}
    </S.StyledErrorDialog>
  )
}
