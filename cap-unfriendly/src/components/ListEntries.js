import React from 'react'

function ListEntries() {
  const persons = [
    {
        id: 10,
        name: 'Panarin',
        goals: 49,
        position: 'Wing'
    }
    /*,
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
    }*/
  ]
  
  const personList = persons.map(person => <Person key={person.id} person={person} />)

  //const names = ['Panarin', 'Shesterkin', 'Fox']
  //const nameList = names.map((name, index) => <p key={index}><font size="3">{index} {name}</font></p>)

  function Person({person}) {
    return (
      <React.Fragment>
        <tr className="rowEntry">
          <td>{person.name}</td>
          <td>{person.position}</td>
          <td>{person.goals}</td>
          {/*console.log(Blackhawks())}
          {/*<td><TankTest /></td>*/}
        </tr>
      </React.Fragment>
    )
  }

  return (
    <div className="row">
      <table>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Goals</th>
        </tr>
        {personList}
      </table>
    </div>
  )
}

export default ListEntries