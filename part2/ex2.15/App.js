import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const Person = {
      name : newName,
      number: newNumber
    }

    const alreadyAdded = persons.some((p) => JSON.stringify(p.name) === JSON.stringify(Person.name))

    if (alreadyAdded){
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      axios
        .post('http://localhost:3001/persons', Person)
        .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = (filter === '') ? persons : persons.filter(p => 
    p.name.toUpperCase().includes(filter.toUpperCase()) === true
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addPerson = {addPerson} name = {handleNameChange} number = {handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow = {personsToShow} />
    </div>
  )
}

export default App
