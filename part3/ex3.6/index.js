const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/info', (req, res) => {
    const currentDate = new Date().toLocaleString();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    res.send(`
      <p>Phonebook has info for ${persons.length} people </p>
      <p>${currentDate} ${timeZone}</p>
    `)
})

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const person = req.body
    const id = Math.floor(Math.random() * 999999)
    person.id = id
    console.log(person)

    if (!person.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    } else if (!person.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }

    const alreadyAdded = persons.some(p => JSON.stringify(p.name) === JSON.stringify(person.name))

    if (alreadyAdded) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    persons = persons.concat(person)
    res.json(person)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
