import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[
      {name: "Nishant",age:"22"},
      {name:"Shivangi",age:"21"},
      {name:"Charu",age:"20"}
    ],
    something:"something else"
  }




  render() {
    return (
      <div className="App">
        <h1>This is a react App</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
            My Hobby: Singing!
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>


      </div>
    );
  }
}

export default App;
