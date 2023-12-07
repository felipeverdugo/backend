const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.static('build'))
app.use(express.json())

const morgan = require('morgan')

app.use(morgan('tiny'))

app.use(cors())

let persons = [
  {
    id: 1,
    name: 'felipe',
    number: '2022-01-10'
  },
  {
    id: 2,
    name: 'blas',
    number: '2022-01-10'
  },
  {
    id: 3,
    name: 'clau',
    number: '2022-01-10'
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0
  return maxId + 1
}

morgan.token('content', function (req, res) { return JSON.stringify(req.body) })
// morgan(':method :url :status :res[content-length] - :response-time ms :content')

app.post('/api/persons', morgan(':content'), (request, response) => {
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  if (persons.some(person => person.name === body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  response.json(person)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
