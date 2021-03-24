module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/contact_form',
        destination: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGQNmUGUbGXgPQAAqIAbxj6JYeLo0ca8ScL5TO0-XiJBgSPw/formResponse',
        basePath: false
      },
      {
        source: '/api/budget_form',
        destination: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-Up_irXDJKFfL1b8k3_G9NalEu1TZAonIyjYDEqRrYU-Cow/formResponse',
        basePath: false
      },
    ]
  },
};
