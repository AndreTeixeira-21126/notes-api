const ValidateEmail = require('./validators/ValidateEmail')
exports.validateEmail = (req, res, next) => {
  if (ValidateEmail.execute(req.body.email)) {
    next()
  } else {
    res.status(400).json({ error: 'Email is invalid', field: 'email' })
  }
}
