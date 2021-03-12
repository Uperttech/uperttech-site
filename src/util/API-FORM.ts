// export interface Budget {
//   name: string
//   email: string
//   phone: string
//   company: string
//   description: string
//   references: string
//   deadline: string
//   budgetValue: string
//   leadFrom: string
//   grecaptchaResponse: string
// }

// export interface ContactData {
//   name: string
//   email: string
//   message: string
// }

// const API_URL = process.env.NEXT_PUBLIC_API_URL

export const API = {
  sendContact: async (data: FormData): Promise<void> => {
    await fetch(
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGQNmUGUbGXgPQAAqIAbxj6JYeLo0ca8ScL5TO0-XiJBgSPw/formResponse',
      {
        method: 'POST',
        mode: 'no-cors',
        body: data
      }
    )
  },

  sendBudget: async (data: FormData): Promise<void> => {
    // Rota para comunicação com API
    await fetch(
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-Up_irXDJKFfL1b8k3_G9NalEu1TZAonIyjYDEqRrYU-Cow/formResponse',
      {
        method: 'POST',
        mode: 'no-cors',
        body: data
      }
    )
  }
}
