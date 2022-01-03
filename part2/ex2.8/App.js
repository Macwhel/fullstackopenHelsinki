import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person => 
          <p key={person.name}> {person.name} {person.number} </p>)}
      </div>
    </div>
  )
}

export default App
