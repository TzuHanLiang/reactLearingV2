import React, { PureComponent } from 'react';
import styles from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import WithClass from "../hoc/WithClass";
import withClasss from "../hoc/withClasss";


class App extends PureComponent {
  state = {
    persons: [
      { id: "sndjs", name: "Max", age: 28 },
      { id: "sndfj", name: "Manu", age: 29 },
      { id: "sdjdq", name: "Jennie", age: 27 }
    ],
    showPerson: false,
  }

  togglePersonHandler = () => {
    const doseShow = this.state.showPerson;
    this.setState({ showPerson: !doseShow });
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
      // <WithClass classes={styles.App}>

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
        
      // </WithClass>
    );
  }
}

// export default App;
export default withClasss(App, styles.App);
