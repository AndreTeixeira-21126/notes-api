const CreateUserService = require('../../services/user/CreateUserService')
const User = require('../../entities/user/user')
const MongooseUserRepository = require('../../repositories/user/MongooseUserRepository')
class CreateUserController {
  async handle (req, res) {
    const { name, email, password, confirm } = req.body

    if (password !== confirm) {
      return res.status(400).json({ error: 'Password does not match' })
    }
    const userRepository = new MongooseUserRepository()
    const createUserService = new CreateUserService(userRepository)

    const user = await createUserService.execute(new User(name, email, password))
    if (!user) {
      return res.status(400).json({ error: 'User already exists' })
    }

    return res.status(201).json(user)
  }
}

module.exports = new CreateUserController()
