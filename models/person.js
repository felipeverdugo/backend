const mongoose = require('mongoose')

const { MONGO_USER, MONGO_PASS } = process.env

const url =
  `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.libovix.mongodb.net/?retryWrites=true&w=majority`

console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: Number
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
}
)

module.exports = mongoose.model('Person', personSchema)
