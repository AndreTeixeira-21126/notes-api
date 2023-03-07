const uuid = require('uuid').v4

class InMemoryUserRepository {
  constructor () {
    this.users = []
  }

  async save (user) {
    const current = await this.findByEmail(user.email)
    if (current) { return null }
    user.id = uuid()
    this.users.push(user)

    return user
  }

  async findByEmail (email) {
    const user = this.users.find(user => user.email === email)
    return user
  }
}

module.exports = InMemoryUserRepository
