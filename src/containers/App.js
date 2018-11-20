import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: "sndjs", name: "Max", age: 28 },
        { id: "sndfj", name: "Manu", age: 29 },
        { id: "sdjdq", name: "Jennie", age: 27 }
      ],
      showPerson: false,
    }
  }
  componentWillMount(){
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount(){
    console.log("[App.js] inside componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("[Update App.js] inside shouldComponentUpdate", nextProps, nextState); 
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log("[Update App.js] inside componentWillUpdate", nextProps, nextState); 
  }
  componentDidUpdate(){
    console.log("[Update App.js] inside componentDidUpdate");  
  }


  // =====================================================
  // this way is the w=new way of initializing properties 
  // in ES6 classes (preffered way, because it's easier, but
  // not much different with the way initialized through the
  // constructor)
  // =====================================================

  // state = {
  //   persons: [
  //     { id: "sndjs", name: "Max", age: 28 },
  //     { id: "sndfj", name: "Manu", age: 29 },
  //     { id: "sdjdq", name: "Jennie", age: 27 }
  //   ],
  //   showPerson: false,
  // }

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
    console.log("[App.js] inside render");
    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandle}/>;
    }

    return (
      <div className={styles.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
         />
        {persons}
      </div>
    );
  }
}

export default App;
