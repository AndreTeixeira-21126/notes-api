class ValidateEmail {
  static execute (email) {
    const re = /[^\s@]+@[^\s@]+\.[^\s@]+/
    if (re.test(email)) {
      return true
    } else {
      return false
    }
  }
}

module.exports = ValidateEmail
