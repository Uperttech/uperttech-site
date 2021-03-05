import { useState, FormEvent, useEffect } from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'
import InputPhone from 'react-number-format'
import RSelect, { OptionTypeBase, Props as SelectProps } from 'react-select'
import Options from '~/resources/options-select'
import Navbar from '~/components/Navbar'
// import { toast } from 'react-toastify'
import { ActionButton } from '~/components/ActionButton'
import { ErrorDialog } from '~/components/ErrorDialog'
import { useApp } from '~/providers/AppProvider'
import { Input, TextArea, CheckBox } from '~/components/Form'
import * as S from '~/styles/pages/Budget'
import SEO from '~/components/SEO'

// const API_RECAPTCHA_KEY = process.env.NEXT_PUBLIC_API_KEY_RECAPTCHA

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
  leadFromValue?: SelectData
}

const Budget: React.FC = () => {
  const { error: authError, loading, createBudget } = useApp()
  const [error, setError] = useState<string | undefined>(authError)

  // const [recaptchaResponse, setRecaptchaResponse] = useState<
  //   string | undefined
  // >()

  const [dataForm, setDataForm] = useState<DataForm>({})

  // const changeDataForm = (key: keyof typeof dataForm) => (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => setDataForm({ ...dataForm, [key]: e.target.value })

  const changeSelectDataForm = (
    key: keyof Pick<DataForm, 'deadlineValue' | 'budgetValue' | 'leadFromValue'>
  ) => (value: DataForm[typeof key]) =>
    setDataForm({ ...dataForm, [key]: value })

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   const {
  //     name,
  //     email,
  //     company,
  //     phone,
  //     description,
  //     deadlineValue,
  //     budgetValue,
  //     leadFromValue,
  //     references
  //   } = dataForm

  //   if (Object.values(dataForm).find(v => !!v)) {
  //     window.scrollTo(0, 0)
  //     return setError('Preencha todos os campos')
  //   }

  //   await createBudget({
  //     name,
  //     email,
  //     company,
  //     phone,
  //     description,
  //     references,
  //     deadline: deadlineValue?.value,
  //     budgetValue: budgetValue?.value,
  //     leadFrom: leadFromValue?.value,
  //     grecaptchaResponse: recaptchaResponse
  //   })

  //   setRecaptchaResponse(undefined)
  //   toast.success('Orçamento enviado com sucesso!')
  // }

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
        // onSubmit={handleSubmit}
        method="post"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-Up_irXDJKFfL1b8k3_G9NalEu1TZAonIyjYDEqRrYU-Cow/formResponse"
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
                name="entry.128360191"
                // onChange={changeDataForm('name')}
              />
              <Input
                required
                type="email"
                placeholder="Seu email"
                name="entry.6011279"
                // onChange={changeDataForm('email')}
              />
            </S.InputGroup>

            <S.InputGroup>
              <InputPhone
                name="entry.1501489900"
                required
                placeholder="Telefone"
                format="(##) # ####-####"
                mask="_"
                type="tel"
                // onChange={changeDataForm('phone')}
              />
              <Input
                name="entry.1858906124"
                required
                type="text"
                placeholder="Nome da empresa ou projeto"
                // onChange={changeDataForm('company')}
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
                // onChange={changeDataForm('description')}
                name="entry.1415092291"
              />
              <TextArea
                rows={5}
                placeholder="Quais são suas referências (Opcional)"
                // onChange={changeDataForm('references')}
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
                value={dataForm.deadlineValue?.label}
              />
              <input
                className="none-display-input"
                type="text"
                name="entry.1651142815"
                value={dataForm.budgetValue?.label}
              />
              <Select
                options={Options.Deadline}
                placeholder="Estimativa de prazo?"
                onChange={changeSelectDataForm('deadlineValue')}
                defaultValue={dataForm.deadlineValue}
              />
              <Select
                options={Options.BudgetValue}
                placeholder="Estimativa de orçamento?"
                onChange={changeSelectDataForm('budgetValue')}
                defaultValue={dataForm.budgetValue}
              />
            </S.SelectGroup>
            <h2>Como conheceu a Uperttech?</h2>
            <CheckBox
              name="entry.215608498"
              label="Indicação de amigo"
              value="Indicação de amigo"
              defaultValue="Não foi informado"
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
            {/* <Select
              options={Options.LeadFrom}
              placeholder="Como conheceu a Uperttech?"
              onChange={changeSelectDataForm('leadFromValue')}
              defaultValue={dataForm.leadFromValue}
            /> */}
          </fieldset>
          <S.WrapperRecaptchaAndButton>
            {/* {API_RECAPTCHA_KEY && (
              <ReCAPTCHA
                sitekey={API_RECAPTCHA_KEY}
                onChange={(value: string | null) =>
                  value && setRecaptchaResponse(value)
                }
              />
            )} */}
            <ActionButton
              text="Enviar"
              primary
              type="submit"
              // loading={loading}
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
