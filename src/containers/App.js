import React, { PureComponent } from 'react';
import styles from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClasss from "../hoc/withClasss";


class App extends PureComponent {
  state = {
    persons: [
      { id: "sndjs", name: "Max", age: 28 },
      { id: "sndfj", name: "Manu", age: 29 },
      { id: "sdjdq", name: "Jennie", age: 27 }
    ],
    showPerson: false,
    toggleClicked: 0,
  }

  togglePersonHandler = () => {
    const doseShow = this.state.showPerson;
    // this will working correctly and still dose the incorrect
    // way of doing that. Because setState actually is a method
    // executed asynchronously by react which means we can't rely
    // on this.state being called inside setState to reflect 
    // the latest version of the state. if we call setState 
    // somewhere else in the application, basically around the 
    // sametime, the other setState call might finish before this
    // one. so this.state in here might not be correct.
    // So there's a better syntax for calling this.setState if 
    // we plan on using this.state inside of it and this is the 
    // function syntax of it

    // ========================wrong way =============    
    // this.setState({ 
    //   showPerson: !doseShow,
    //   toggleClicked: this.state.toggleClicked + 1,
    //  });

    // ========================better way to do so ===
    this.setState((prevState, props) => {
      // prevState which we can safely access that because this 
      // definitely is the last state it had at this point of time
      return {
        showPerson: !doseShow,
        toggleClicked:prevState.toggleClicked + 1,
      }
    });
  }
 
  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandle = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandle}/>;
    }

    return (
      <>
        <button onClick={() => {this.setState({showPerson: true})}}>Show  Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
         />
        {persons}
      </>
    );
  }
}

export default withClasss(App, styles.App);
