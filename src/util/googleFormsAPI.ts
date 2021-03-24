export const googleFormsAPI = {
  sendContact: async (data: FormData): Promise<void> => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_CONTACTFORM_URL as string,
      {
        method: 'POST',
        body: data
      }
    )
    if (!response.ok) {
      throw new Error('Não foi possível enviar sua mensagem, tente novamente')
    }
  },

  sendBudget: async (data: FormData): Promise<void> => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BUDGETFORM_URL as string,
      {
        method: 'POST',
        body: data
      }
    )
    if (!response.ok) {
      throw new Error('Não foi possível enviar seu orçamento, tente novamente')
    }
  }
}
