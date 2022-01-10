import React from 'react'

const Countries = ({countries, filter}) => {
    const countriesToShow = (filter === '') ? countries : countries.filter(c => 
        c.name.common.toUpperCase().includes(filter.toUpperCase()) === true
    )

    if (countriesToShow.length > 10) {
        return ('Too many matches, specify another filter')
    }

    return (
        <ul>
            {countriesToShow.map(country => <li key = {country.name.common}>{country.name.common}</li>)}
        </ul>
    )
    
}

export default Countries
