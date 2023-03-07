/* eslint-disable no-undef */
const ValidateEmail = require('./ValidateEmail')
describe('Validate email', () => {
  it('should validate a valid email', () => {
    const email = 'test@test.com'
    expect(ValidateEmail.execute(email)).toBe(true)
  })
  it('should not validate an invalid email', () => {
    const email = 'test'
    expect(ValidateEmail.execute(email)).toBe(false)
  })
})
