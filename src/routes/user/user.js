const express = require('express')
const validateEmail = require('../../middlewares/validate_email').validateEmail
const auth = require('../../middlewares/auth')
const router = express.Router()

const userController = require('../../controllers/user/CreateUserController')
const loginController = require('../../controllers/user/LoginController')
router.post('/register', validateEmail, userController.handle)
router.post('/login', loginController.handle)
module.exports = router
