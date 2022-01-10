import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'notes')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }


  return (
    <div>
      <form>
        <div>
          find countries <input onChange = {handleFilterChange} />
        </div>
      </form>
      <Countries countries = {countries} filter = {filter} setCountries = {setCountries}/>
    </div>
  )
}

export default App
