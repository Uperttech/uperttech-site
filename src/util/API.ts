export interface Budget {
  name: string
  email: string
  phone: string
  company: string
  description: string
  references: string
  deadline: string
  budgetValue: string
  leadFrom: string
  grecaptchaResponse: string
}

const isDevelopment = process.env.NODE_ENV !== 'production'

const API_URL = isDevelopment
  ? process.env.NEXT_PUBLIC_API_URL
  : process.env.NEXT_PUBLIC_API_URL_PRODUCTION

export const API = {
  URL: `http://${API_URL}/v1`,

  createBudget: async (budgetData: {
    name: string
    email: string
    phone: string
    company: string
    description: string
    references?: string
    deadline: string
    budgetValue: string
    leadFrom: string
    grecaptchaResponse: string
  }): Promise<Budget> => {
    const response = await fetch(`${API.URL}/budget`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(budgetData)
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.message || response.statusText)
    return data as Budget
  }
}
