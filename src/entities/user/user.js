class User {
  constructor (name, email, password, id = null) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
}

module.exports = User
