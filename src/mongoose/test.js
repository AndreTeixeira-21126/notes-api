const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

const mongod = MongoMemoryServer.create()

const connect = async () => {
  const uri = await (await mongod).getUri()
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  await mongoose.connect(uri, mongooseOpts)
}

const closeDatabase = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await (await mongod).stop()
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
