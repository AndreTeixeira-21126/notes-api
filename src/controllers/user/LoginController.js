const LoginService = require('../../services/user/LoginService')
const MongooseUserRepository = require('../../repositories/user/MongooseUserRepository')
const generateAccessToken = require('../../utils/GenerateAccessToken')
class LoginController {
  async handle (req, res) {
    const { email, password } = req.body
    const userRepository = new MongooseUserRepository()
    const loginService = new LoginService(userRepository)
    const user = await loginService.execute(email, password)
    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    delete user.password

    const token = generateAccessToken(user)

    return res.status(200).json({ token })
  }
}

module.exports = new LoginController()
