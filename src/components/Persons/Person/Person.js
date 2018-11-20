import React, {Component} from "react";
import styles from "./Person.module.css";
import WithClass from "../../../hoc/WithClass";

class Person extends Component{
    render(){ 
        return (
            <WithClass classes={styles.Person}>
                <p onClick={this.props.click}>
                    I'm {this.props.name}, I'm {this.props.age}
                </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
        );
    }
}

export default Person;