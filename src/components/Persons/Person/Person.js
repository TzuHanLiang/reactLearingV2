import React, {Component} from "react";
import styles from "./Person.module.css";
import withClasss from "../../../hoc/withClasss";

class Person extends Component{
    render(){ 
        return (
            <>
                <p onClick={this.props.click}>
                    I'm {this.props.name}, I'm {this.props.age}
                </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </>
        );
    }
}

export default withClasss(Person, styles.Person);