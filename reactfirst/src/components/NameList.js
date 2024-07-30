import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Panarin', 'Shesterkin', 'Fox']
    const persons = [
        {
            id: 10,
            name: 'Panarin',
            goals: 49,
            position: 'Wing'
        },
        {
            id: 31,
            name: 'Shesterkin',
            goals: 0,
            position: 'Goalie'
        },
        {
            id: 23,
            name: 'Fox',
            goals: 19,
            position: 'Defense'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    //const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{nameList}</div>
}

export default NameList