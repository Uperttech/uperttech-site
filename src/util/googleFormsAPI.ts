export const googleFormsAPI = {
  sendContact: async (data: FormData): Promise<void> => {
    const response = await fetch('/api/contact_form', {
      method: 'POST',
      body: data
    })
    if (!response.ok) {
      throw new Error('Não foi possível enviar sua mensagem, tente novamente')
    }
  },

  sendBudget: async (data: FormData): Promise<void> => {
    const response = await fetch('/api/budget_form', {
      method: 'POST',
      body: data
    })
    if (!response.ok) {
      throw new Error('Não foi possível enviar seu orçamento, tente novamente')
    }
  }
}
