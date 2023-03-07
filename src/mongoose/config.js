const mongoose = require('mongoose')

const connect = async (uri) => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('Connected to MongoDB')
}

const disconnect = async () => {
  await mongoose.disconnect()
  console.log('Disconnected from MongoDB')
}

exports.connect = connect
exports.disconnect = disconnect
