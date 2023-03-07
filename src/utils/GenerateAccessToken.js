const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()
module.exports = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
}
