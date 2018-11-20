import React, {Component} from "react";
import personStyle from "./Person.module.css";

class Person extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] Inside Constructor", props);
      }
      componentWillMount(){
        console.log("[Person.js] Inside componentWillMount");
      }
    
      componentDidMount(){
        console.log("[Person.js] inside componentDidMount");
      }
      componentWillUnmount() {
        // Component is about to get removed => Perform any cleanup work here!
        console.log('insideI [Person.js] \'m about to be removed!');
    }
    render(){ 
        console.log("[Person.js] inside render");
        return (
            <div className={personStyle.Person}>
                <p onClick={this.props.click}>
                    I'm {this.props.name}, I'm {this.props.age}
                </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;