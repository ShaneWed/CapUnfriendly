import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
            #{person.id}, {person.name} plays {person.position} and had {person.goals} goals
        </h2>
    </div>
  )
}

export default Person