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
    const doesShow=this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandler =(personIndex)=>{
      //const persons=this.state.persons.slice();
      const persons= [...this.state.persons];
      //both of the above methods are correct we use slic to copy data to const persons otherwise address would be copied
      persons.splice(personIndex,1);
      this.setState({persons:persons})
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
            {this.state.persons.map((person, index)=>{
              return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}/>
            })}

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
