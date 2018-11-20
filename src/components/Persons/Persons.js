import React from 'react'
import Person from "./Person/Person";

// if we want to omit return keyword, we need to replace 
// it with parentheses. but if we're not having a jsx
// expression here, we also can omit parentheses. 
const persons = (props) => props.persons.map((person, index) => {
        return <Person
        click={props.clicked.bind(this, index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => { props.changed(event, person.id) }}/>
      });

export default persons;