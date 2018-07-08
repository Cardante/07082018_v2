import React, { Component } from 'react';
import './App.css';

import Person from './components/Person';

class App extends Component {
  constructor(){
    super();
    this.state = {
      persons: [
        {name: "Diogo", age:21},
        {name: "João", age: 23},
        {name: "Maria", age:28}
      ],
      showPersons: false
    }
  }


  // IMPORTANT
  // WHEN THE PROPS CHANGE, REACT RE-RENDERS

  nameChangedHandler = (event) => {
    //This function is executed every time a user types in the input element
    this.setState({
      ...this.state,
      persons: [
        {name: "Diogo", age:21},
        {name: event.target.value, age: 23},
        {name: "Maria", age:28}
      ]
    });
  }

  togglePersonsHandler = () => {

    this.setState({
      ...this.state,
      showPersons: !this.state.showPersons
    })
  }

  //Will call this method to render something to the screen
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => 
            <Person key={i} nameChanged={this.nameChangedHandler} name={person.name} age={person.age}/>
          )}
        </div>
      );
    }

    //returns JSX to the screen, but before it´s tranlasted by babel
    //Must have only one root element
    return (
      <div className="App">
        <h1>First React App</h1>
        <p>This is the second element of the root element.</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Users</button>
        {/*this is the class*/}
        {/*USE OF BIND TO PASS PARAMETERS TO THE FUNCTION*/}
        {this.state.showPersons  ? 
          <div>
            {this.state.persons.map((person, i) => 
              <Person key={i} nameChanged={this.nameChangedHandler} name={person.name} age={person.age}/>
            )}
          </div>
          :
          null
        }

      </div>
    );
  }
}

export default App;
