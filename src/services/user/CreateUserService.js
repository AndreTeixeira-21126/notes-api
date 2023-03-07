const ValidateEmail = require('../../middlewares/validators/ValidateEmail')
const bcrypt = require('bcrypt')
class CreateUserService {
  constructor (userRepository) {
    this.userRepository = userRepository
  }

  async execute (user) {
    user.password = await bcrypt.hash(user.password, 10)
    if (ValidateEmail.execute(user.email)) {
      return await this.userRepository.save(user)
    }

    return null
  }
}

module.exports = CreateUserService
