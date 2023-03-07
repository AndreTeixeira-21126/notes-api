const express = require('express')
const validateEmail = require('../../middlewares/validate_email').validateEmail
const router = express.Router()

const userController = require('../../controllers/user/CreateUserController')

router.post('/register', validateEmail, userController.handle)

module.exports = router
