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
