import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPeople(response.data)
      })
  }, [])
  console.log('render', people.length, 'notes')
  console.log(people)

  return (
    <h1>

    </h1>
  )
}

export default App
