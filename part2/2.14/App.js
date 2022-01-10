import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('app promise')
        setCountries(response.data)

      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = (filter === '') ? countries : countries.filter(c => 
    c.name.common.toUpperCase().includes(filter.toUpperCase()) === true
  )

  console.log(filter)

  return (
    <div>
      <form>
        <div>
          find countries <input onChange = {handleFilterChange} />
        </div>
      </form>
      <Countries countries = {countriesToShow} setFilter = {setFilter}/>
    </div>
  )
}

export default App
