import React from 'react'

const Persons = ({personsToShow, removePerson}) => {
    return (
      <div>
        {personsToShow.map(person => 
        <div>
          <p key={person.name}> 
            {person.name} {person.number} 
            <button onClick={() => removePerson(person.id)}>delete</button>
          </p>
        </div>
          )}
      </div>
    )
}

export default Persons
