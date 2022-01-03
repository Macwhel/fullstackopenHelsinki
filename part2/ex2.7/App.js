import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const Person = {
      name : newName
    }

    const alreadyAdded = persons.some((p) => JSON.stringify(p.name) === JSON.stringify(newName))

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <p key={person.name}> {person.name} </p>)}
      </div>
    </div>
  )
}

export default App
