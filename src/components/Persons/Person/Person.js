import React, {Component} from "react";
import personStyle from "./Person.module.css";

class Person extends Component{
    render(){ 
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