const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const auth = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  const data = jwt.verify(token, process.env.JWT_SECRET)
  try {
    req.user = data
    next()
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' })
  }
}

module.exports = auth
