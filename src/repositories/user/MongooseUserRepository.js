const UserMongooseModel = require('../../mongoose/entities/User')
const User = require('../../entities/user/user')
class MongooseUserRepository {
  async save (user) {
    if (await this.findByEmail(user.email)) { return null }
    const returnUser = new UserMongooseModel({ name: user.name, email: user.email, password: user.password })
    returnUser.save()

    user.id = returnUser._id.toString()

    return user
  }

  async findByEmail (email) {
    const mongoUser = await UserMongooseModel.findOne({ email })
    if (mongoUser) {
      return new User(mongoUser.name, mongoUser.email, mongoUser.password, mongoUser._id.toString())
    }
    return null
  }
}

module.exports = MongooseUserRepository
