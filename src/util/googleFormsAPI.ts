export const googleFormsAPI = {
  sendContact: async (data: FormData): Promise<void> => {
    const response = await fetch(
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGQNmUGUbGXgPQAAqIAbxj6JYeLo0ca8ScL5TO0-XiJBgSPw/formResponse',
      {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      }
    )

    if (!response.ok && response.type !== 'opaque') {
      throw new Error('Não foi possível enviar sua mensagem, tente novamente')
    }
  },

  sendBudget: async (data: FormData): Promise<void> => {
    const response = await fetch(
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-Up_irXDJKFfL1b8k3_G9NalEu1TZAonIyjYDEqRrYU-Cow/formResponse',
      {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      }
    )

    if (!response.ok && response.type !== 'opaque') {
      throw new Error('Não foi possível enviar seu orçamento, tente novamente')
    }
  }
}
