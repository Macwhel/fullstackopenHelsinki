import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
      setPersons(persons.concat(Person))
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
      <form>
        <div>
          filter shown with <input onChange = {handleFilterChange} />
        </div>
      </form>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange = {handleNameChange}/>
        </div>
        <div>
          number: <input onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => 
          <p key={person.name}> {person.name} {person.number} </p>)}
      </div>
    </div>
  )
}

export default App
