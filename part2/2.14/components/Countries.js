import React from 'react'
import Weather from './Weather'

const Countries = ({countries, setFilter}) => {

    if (countries.length > 10) {
        return ('Too many matches, specify another filter')
    }
    
    else if (countries.length === 1) {
        const e = Object.entries(countries[0].languages)
        const c = countries[0]
        return (
            <div>
                <h1>{c.name.common}</h1>
                <p>capital {c.capital}</p>
                <p>population {c.population}</p>
                <h2>Spoken Languages</h2>
                <ul>
                    {e.map((k, v) => <li key = {v}>{k[1]}</li>)}
                </ul>
                <img src={c.flag} alt="Country flag"></img>
                <Weather capital = {c.capital} />
            </div>
        )
    }

    return (
        <ul>
            {countries.map(country => 
                <li key = {country.name.common}> {country.name.common} <button onClick = {() => setFilter(country.name.common)}>show</button></li>
            )}
        </ul>
    )
    
}

export default Countries
