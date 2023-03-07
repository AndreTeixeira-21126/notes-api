const mongoose = require('mongoose')
const dotenv = require('dotenv')
const uuid = require('uuid').v4
dotenv.config()

const connect = async () => {
  const uri = `${process.env.MONGO_URI}${uuid()}`
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  await mongoose.connect(uri, mongooseOpts)
}

const closeDatabase = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongoose.disconnect()
}

const clearDatabase = async () => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
}

exports.connect = connect
exports.closeDatabase = closeDatabase
exports.clearDatabase = clearDatabase
