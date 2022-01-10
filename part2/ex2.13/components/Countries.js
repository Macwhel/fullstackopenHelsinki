import React from 'react'

const Countries = ({countries, filter, setCountries}) => {
    const countriesToShow = (filter === '') ? countries : countries.filter(c => 
        c.name.common.toUpperCase().includes(filter.toUpperCase()) === true
    )

    if (countriesToShow.length > 10) {
        return ('Too many matches, specify another filter')
    }

    else if (countriesToShow.length === 1) {
        console.log(countriesToShow)
        const country = countriesToShow[0]
        console.log(country)
        const e = Object.entries(country.languages)
        console.log(e[0])
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h2>Spoken Languages</h2>
                <ul>
                    {Object.entries(country.languages).map((k, v) => <li key = {v}>{k[1]}</li>)}
                </ul>
                <img src={country.flag} alt="Country flag"></img>
            </div>
        )
    }

    return (
        <ul>
            {countriesToShow.map(country => 
                <li key = {country.name.common}> {country.name.common} <button onClick = {() => setCountries([country])}>show</button></li>
            )}
        </ul>
    )
    
}

export default Countries
