require('dotenv').config()

const mongoose = require('mongoose')

const { MONGO_USER, MONGO_PASS } = process.env

const url =
  `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.libovix.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: Number
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length !== 2 && process.argv.length !== 4) {
  console.log('error arg')
  process.exit(1)
}

if (process.argv.length === 2) {
  console.log('PhoneBook : ')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name}  ${person.number}`)
    })
    mongoose.connection.close()
  })
} else {
  const newPerson = process.argv[2]
  const newNumber = process.argv[3]

  // Add note
  const person = new Person({
    name: newPerson,
    number: newNumber
  })

  person.save().then(result => {
    console.log(`added ${newPerson} number ${newNumber} to phonebook`)
    mongoose.connection.close()
  })
}
