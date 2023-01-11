import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Form from './Form'
import Persons from './Persons'
import Notifications from './Notifications'
import services from './services/persons'
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState([])
  const [status, setStatus] = useState(null)
  const [style, setStyle] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        const data = response.data
        setPersons(data)
      })
  }, [status])

  const handleChangeName = (event) => { setNewName(event.target.value) }

  const handleChangeNumber = (event) => { setNewNumber(event.target.value) }

  const handleChangeFilter = (event) => {
    const patron = new RegExp(`${event.target.value}`, "i");
    const results = persons.filter(person => patron.test(person.name));
    return setFilter(results)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = { name: newName, number: newNumber }
    const repeatName = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (repeatName) {
      if (window.confirm(`${newName.toUpperCase()} is already added to phonebook, replace the old number with a new one?`)) {
        const dataPerson = persons.find(({ name }) => name.toLowerCase() === newName.toLowerCase())
        const newData = { name: dataPerson.name, number: newNumber }
        services.update(dataPerson.id, newData)
          .then(() => {
            setStatus(`${person.name.toUpperCase()} was updated.`)
            setStyle("update-person")
          })
      }
      return event.target.reset();
    }

    services.create(person)
      .then(returnPerson => {
        setPersons(persons.concat(returnPerson))
        event.target.reset();
        setStatus(`Added ${person.name}`)
        setStyle("create-person")
      })
  }

  const erasePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      services.erase(id)
        .then(() => {
          setStatus(`${name} was remove from the list.`)
          setStyle("delete-person")
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notifications message={status} setMessage={setStatus} style={style} />
      <Filter handleChange={handleChangeFilter} />
      <h3>Add a new</h3>
      <Form fnName={handleChangeName} fnNumber={handleChangeNumber} fnAddPerson={addPerson} newValue={newName} />
      <h3>Numbers</h3>
      <Persons filterArr={filter} personsArr={persons} onClickErase={erasePerson} />
    </div>
  )
}

export default App