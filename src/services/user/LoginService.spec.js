/* eslint-disable no-undef */
const InMemoryUserRepository = require('../../repositories/user/InMemoryUserRepository')
const CreateUserService = require('./CreateUserService')
const LoginService = require('./LoginService')
const User = require('../../entities/user/user')

describe('Login service', () => {
  const userRepository = new InMemoryUserRepository()
  let user
  beforeEach(async () => {
    const createUserService = new CreateUserService(userRepository)
    user = new User('John Doe', 'test@test.com', '123456')
    user = await createUserService.execute(user)
  })

  it('should login a user', async () => {
    const loginService = new LoginService(userRepository)
    const user = await loginService.execute('test@test.com', '123456')
    expect(user.email).toBe('test@test.com')
    expect(user.name).toBe('John Doe')
  })
})
