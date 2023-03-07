const app = require('./app')
const dbConfig = require('./mongoose/config')
const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

dbConfig.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000')
  })
}).catch(err => {
  console.log(err)
})
