import React, { Component } from 'react'
import Person from "./Person/Person";

// if we want to omit return keyword, we need to replace 
// it with parentheses. but if we're not having a jsx
// expression here, we also can omit parentheses. 
class Persons extends Component{
  render(){
    return this.props.persons.map((person, index) => {
      return <Person
      click={this.props.clicked.bind(this, index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={(event) => { this.props.changed(event, person.id) }}/>
    });
  }
} 

export default Persons;