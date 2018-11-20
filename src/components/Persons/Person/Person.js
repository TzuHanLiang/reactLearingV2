import React from "react";
import personStyle from "./Person.module.css";

const Person = (props) => {
    return (
        <div className={personStyle.Person}>
            <p onClick={props.click}>
                I'm {props.name}, I'm {props.age}
            </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default Person;