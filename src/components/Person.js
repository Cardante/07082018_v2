//This is a dumb component or functional components

import React from "react";

//IMPORT A CUSTOM STYLE TO THIS FUNCTIONAL COMPONENT
import './Person.css';

// IMPORTANT
// YOU DO NOT NEED THIS IN FUNCTIONAL COMPONENTS
// YOU HAVE TO USE THIS IN CLASS BASE COMPONENTS

// IMPORTANT
// USE FUNCTIONAL COMPONENTS AS OFTEN AS POSSIBLE 
// BECAUSE MANY COMPONENTS IN A APPLICATION SHOULD NOT CHANGE STATE

//props received from the app component
const person = props => 
    <div className="Person" onClick={props.click}>
        <h1>Hello I am {props.name} and I am {props.age} years old</h1>
        <h2>{props.children}</h2>
        {/*onChange is a special parameter that executes everytime a user types in the input field*/}
        <input type="text" onChange={props.nameChanged}  value={props.name}/>
    </div>

export default person;