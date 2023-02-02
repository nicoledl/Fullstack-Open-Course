const express = require("express")
const morgan = require("morgan")
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
morgan.token('body', (req) => JSON.stringify(req.body))


const persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendinck",
        number: "39-23-6423122"
    },
    {
        id: 5,
        name: "Bernt Egilmar",
        number: "040-987654"
    }
]

function getRandoms() {
    return Math.floor(Math.random() * 1000);
}
//////////
app.get("/api/persons", morgan('tiny'), (req, res) => {
    res.json(persons)
})

app.get("/info", morgan('tiny'), (req, res) => {
    const date = new Date();
    res.send(`<h2>Phonebook has info for ${persons.length} ${persons.length > 1 ? "people" : "person"}</h2><p>${date}</p>`)
})

app.get("/api/persons/:id", morgan(':method :url :status :res[content-length] - :response-time ms'), (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find((item) => item.id === id)
    console.log(person)
    res.json(person)
})

app.post("/api/persons", morgan(':method :url :status :res[content-length] - :response-time ms :body'), (req, res) => {
    const name = req.body.name
    const number = req.body.number

    if (persons.find((item) => name === item.name)) {
        return res.status(204).send({ error: 'name must be unique' })
    } else if (name && number) {
        return res.send(persons.concat({ id: getRandoms(), name: name, number: number }))
    } else {
        return res.status(204).send({ error: 'requiere name and number' })
    }
})

app.delete("/api/persons/:id", morgan(':method :url :status :res[content-length] - :response-time ms'), (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find((item) => item.id === id)
    console.log(person)
    res.json(person)
})
//////////
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})