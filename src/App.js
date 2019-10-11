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


  nameSwitchHandler =(newName)=>{
    //console.log("was clicked");
    //dont do this it wont work_____this.state.persons[0].name="sanu";
    this.setState({
      persons:[
        {name: newName,age:"22"},
        {name:"Shivangi",age:"21"},
        {name:"Charu",age:"18"}
      ]
    })
  }

  inputHandler =(event)=>{
    this.setState({
      persons:[
        {name:"Nishant",age:"22"},
        {name:event.target.value,age:"21"},
        {name:"Charu",age:"18"}
      ]
    })
  }



  render() {

    const style={
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>This is a react App</h1>
        <button 
          onClick={this.nameSwitchHandler.bind(this,"Preksha")}
          style={style}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.nameSwitchHandler.bind(this,"Shubhi")}
          changed={this.inputHandler}>
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
