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

  nameSwitchHandler =()=>{
    console.log("was clicked");
    //dont do this it wont work_____this.state.persons[0].name="sanu";
    this.setState({
      persons:[
        {name: "Sanu",age:"22"},
        {name:"Shivangi",age:"21"},
        {name:"Charu",age:"18"}
      ]
    })
  }




  render() {
    return (
      <div className="App">
        <h1>This is a react App</h1>
        <button onClick={this.nameSwitchHandler}>Switch Name</button>
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
