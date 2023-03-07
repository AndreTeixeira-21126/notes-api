const bcrypt = require('bcrypt')

class LoginService {
  constructor (userRepository) {
    this.userRepository = userRepository
  }

  async execute (email, password) {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      return null
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return null
    }

    return user
  }
}

module.exports = LoginService
