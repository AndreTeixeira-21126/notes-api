/* eslint-disable no-undef */
const User = require('./user')
const uuid = require('uuid').v4
describe('User', () => {
  it('should create a user instance', () => {
    const user = new User('John Doe', 'test@test.com', '123456')
    expect(user).toBeInstanceOf(User)
    expect(user.name).toBe('John Doe')
    expect(user.email).toBe('test@test.com')
    expect(user.password).toBe('123456')
  })

  it('should create a user instance with id', () => {
    const id = uuid()
    const user = new User('John Doe', 'test@test.com', '123456', id)
    expect(user).toBeInstanceOf(User)
    expect(user.id).toBe(id)
    expect(user.name).toBe('John Doe')
    expect(user.email).toBe('test@test.com')
    expect(user.password).toBe('123456')
  })
})
