import React, { Component } from 'react'
import Person from "./Person/Person";

// if we want to omit return keyword, we need to replace 
// it with parentheses. but if we're not having a jsx
// expression here, we also can omit parentheses. 
class Persons extends Component{
  constructor(props){
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }
  componentWillMount(){
    console.log("[Persons.js] Inside componentWillMount");
  }

  componentDidMount(){
    console.log("[Persons.js] inside componentDidMount");
  }
  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log('insideI [Persons.js] \'m about to be removed!');
  }
  componentWillReceiveProps(nextProps){
    console.log("[Update Persons.js] inside componentWillReceiveProps", nextProps); 
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("[Update Persons.js] inside shouldComponentUpdate", nextProps, nextState); 
    // only do the shallow comparison
    return nextProps.persons !== this.props.persons || 
    nextProps.changed !== this.props.changed ||
    nextProps.clicked !== this.props.clicked;
    // return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("[Update Persons.js] inside componentWillUpdate", nextProps, nextState); 
  }
  componentDidUpdate(){
    console.log("[Update Persons.js] inside componentDidUpdate");  
  }
  render(){
    console.log("[Persons.js] inside render");
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