import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .removeObj(id)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const Person = {
      name : newName,
      number: newNumber
    }

    const alreadyAdded = persons.some((p) => JSON.stringify(p.name) === JSON.stringify(Person.name))

    if (alreadyAdded){
      if (window.confirm(`${newName} is already added to the phonebook, replace the new number with a new one?`)) {
        const oldPerson = persons.find(p => JSON.stringify(p.name) === JSON.stringify(Person.name))
        personService
          .update(oldPerson.id, Person)
          .then(() => {
            personService
            .getAll()
            .then(response => {
              console.log('before', persons)
              setPersons(response.data)
              console.log('after', persons)
              setNewName('')
              setNewNumber('')
          })
          }) 

      }
    }
    else {
      personService
        .create(Person)
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
      <Persons personsToShow = {personsToShow} removePerson = {removePerson}/>
    </div>
  )
}

export default App
