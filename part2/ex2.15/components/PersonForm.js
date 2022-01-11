import React from 'react'

const PersonForm = ({addPerson, name, number}) => {

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input onChange = {name}/>
            </div>
            <div>
                number: <input onChange = {number}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
