import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  constructor(){
    super();
    this.state = {
      persons: [
        {id: 0, name: "Diogo", age:21},
        {id: 1, name: "João", age: 23},
        {id: 2, name: "Maria", age:28}
      ],
      showPersons: false
    }
  }


  // IMPORTANT
  // WHEN THE PROPS CHANGE, REACT RE-RENDERS

  nameChangedHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index
    });

    //Get the person position in the array
    const person = {
      ...this.state.persons[personIndex]
    };

    //assign the new name
    person.name = event.target.value;

    //create a new array (not a reference) so it can be assign in setState
    const persons = [...this.state.persons];
    persons[index] = person;

    //This function is executed every time a user types in the input element
    this.setState({
      ...this.state,
      persons: persons
    });
  }



  togglePersonsHandler = () => {
    this.setState({
      ...this.state,
      showPersons: !this.state.showPersons
    })
  }




  deletePersonHandler = (index) => {
    //Dangerous because if the state is changed, so the persons array
    //const persons = this.state.persons;

    //Better alternative because it does not create references
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      ...this.state,
      persons: persons
    });
  }

  //Will call this method to render something to the screen
  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            <Person 
            key={person.id} 
            click={this.deletePersonHandler.bind(this, index)} 
            nameChanged={(event) => this.nameChangedHandler(event, person.id)} 
            name={person.name} 
            age={person.age}/>
          )}
        </div>
      );

      //CHANGING STYLES DYNAMIC
      style.backgroundColor = "red";
    } 


    //Dynamic assign classes
    let classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    } 
    
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }
    
    //returns JSX to the screen, but before it´s tranlasted by babel
    //Must have only one root element
    return (
        <div className="App">
          <h1>First React App</h1>
          <p className={classes.join(' ')}>This is the second element of the root element.</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Users</button>
          {/*this is the class*/}
          {/*USE OF BIND TO PASS PARAMETERS TO THE FUNCTION*/}
          
          {persons}

          {/*Alternative*/}
          {/*{this.state.showPersons  ? 
            <div>
              {this.state.persons.map((person, i) => 
                <Person key={i} nameChanged={this.nameChangedHandler} name={person.name} age={person.age}/>
              )}
            </div>
            :
            null
          }*/}

        </div>
    );
  }
}

//component wrapping App component, adding extra features
export default App;
