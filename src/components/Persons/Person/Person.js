import React, {Component} from "react";
import styles from "./Person.module.css";
import withClasss from "../../../hoc/withClasss";

import PropTypes from "prop-types";
// this provided by the react team, can be used to check
// the types of the incoming props


class Person extends Component{
    constructor(props){
        super(props);
        this.newProp = React.createRef();
    }
    componentDidMount(){
        // focus method is a method available on input elements
        if(this.props.position === 0){
            // this.newProp.focus();
            this.newProp.current.focus();
        }
        // this.focusInput();
    }

    // focusInput(){
    //     if(this.props.position === 0){
    //         this.newProp.current.focus();
    //     }
    // }
    focus(){
        this.newProp.current.focus();
    }
    
    render(){ 
        return (
            <>
                <p onClick={this.props.click}>
                    I'm {this.props.name}, I'm {this.props.age}
                </p>
                <input 
                    // ref={(input) => { this.newProp = input }}
                    ref={this.newProp}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </>
        );
    }
}

// ref is a speical property known by react only available
// in stateful component.
// ref takes a dynamic input which should be a function
// and in this function, you set up a reference to this
// element. and then we can define a property of this class
// this will create a new property for your entire class

// propTypes is a javascript object
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};
export default withClasss(Person, styles.Person);