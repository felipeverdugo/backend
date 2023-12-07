require('dotenv').config()

const mongoose = require('mongoose')

const { MONGO_USER, MONGO_PASS } = process.env

const url =
  `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.libovix.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url)
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
