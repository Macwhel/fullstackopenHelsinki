import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/Persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const Notification = ({message}) => {
    if (message === null) {
      return null
    }
    return (
      <div className='notification'>
        {message}
      </div>
    )
  }

  const Error = ({message}) => {
    if (message === null) {
      return null
    }
    return (
      <div className='errorMessage'>
        {message}
      </div>
    )
  }

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .removeObj(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          setErrorMessage(`Information of ${name} has already been removed from the server`)
        })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const Person = {
      name : newName,
      number: newNumber
    }

    console.log(Person.name)
    const alreadyAdded = persons.some((p) => JSON.stringify(p.name) === JSON.stringify(Person.name))

    if (alreadyAdded){
      if (window.confirm(`${newName} is already added to the phonebook, replace the new number with a new one?`)) {
        const oldPerson = persons.find(p => JSON.stringify(p.name) === JSON.stringify(Person.name))
        const name = oldPerson.name
        personService
          .update(oldPerson.id, Person)
          .then(() => {
            setNotification(
              `Updated ${name}`
            )
            setTimeout(() => {
              setNotification(null)
            }, 5000)
            personService
            .getAll()
            .then(response => {
              setPersons(response.data)
            })
          }) 

      }
    }
    else {
      personService
        .create(Person)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNotification(
            `Added ${Person.name}`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
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
      <Notification message = {notification}/>
      <Error message = {errorMessage} />
      <Filter filterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addPerson = {addPerson} name = {handleNameChange} number = {handleNumberChange} />
      <h2>Numbers</h2>
      <Persons personsToShow = {personsToShow} removePerson = {removePerson}/>
    </div>
  )
}

export default App
