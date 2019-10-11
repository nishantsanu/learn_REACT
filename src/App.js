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
    something:"something else",
    showPerson:false
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

  togglePersonHandler =()=>{
    console.log('clicked')
    const doesShow=this.state.showPerson;
    console.log(doesShow);
    this.setState({showPerson: !doesShow});
  }



  render() {

    const style={
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons=null;
    if(this.state.showPerson){
      persons=(
        <div>
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
      )
    }

    return (
      <div className="App">
        <h1>This is a react App</h1>
        <button 
          onClick={this.togglePersonHandler}
          style={style}>Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
