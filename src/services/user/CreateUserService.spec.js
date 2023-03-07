/* eslint-disable no-undef */
const InMemoryUserRepository = require('../../repositories/user/InMemoryUserRepository')
const CreateUserService = require('./CreateUserService')
const User = require('../../entities/user/user')
describe('Create user service', () => {
  it('should create a user', async () => {
    const userRepository = new InMemoryUserRepository()
    const createUserService = new CreateUserService(userRepository)
    let user = new User('John Doe', 'test@test.com', '123456')
    user = await createUserService.execute(user)
    expect(user).toBeInstanceOf(User)
    expect(user.id).toBeTruthy()
  })

  it('should not create a user with an existing email', async () => {
    const userRepository = new InMemoryUserRepository()
    const createUserService = new CreateUserService(userRepository)
    const user = new User('John Doe', 'test@test.com', '123456')
    await createUserService.execute(user)
    const user1 = await createUserService.execute(user)
    expect(user1).toBeNull()
  })
})
