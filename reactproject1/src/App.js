import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
// State only works in components (extends component)
  state = {
    persons:[
      {name:'Aron', age: 24},
      {name:'Nora',age:42},
      {name:'Roan',age:22},
    ]
  }
  // Handler= convention to indicate that it's a method you're not actively calling, but as an eventhandler
  switchNameHandler = (newName) =>{
    // console.log('clickeroonie');
    // this.state.persons[0].name="PABLO ESCOBIATCH";
    // this.state.persons[0].age=69;
    // DONT DO THESE
    this.setState({
      persons: [{
          name: newName,
          age: 69
        },
        {
          name: 'NUCK CHORRIS',
          age: 89
        },
        {
          name: 'SOMEBODY',
          age: 21
        },
      ]
    })
  }
  nameChangedHandler=(e)=>{
    this.setState({
      persons: [{
        name: 'roberto',
        age: 69
      },
      {
        name: e.target.value,
        age: 89
      },
      {
        name: 'SOMEBODY',
        age: 21
      },
      ]
    })
  }

  render() {

    const stou={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      borderRadius:'5px'
    }
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hi I'm an app</h1>
        <p> It's working </p>
        {/* <button onClick={this.switchNameHandler.bind(this,'Nerdinator')}> Switcheroo </button> */}
        <button
        style={stou}
         onClick={() => this.switchNameHandler('niordinatior ')}> Switcheroo </button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this,'not nerdinator')}
         changed={this.nameChangedHandler} >
          {/* <ul>
            <li> Orange</li>
            <li>potato </li>
            <li> orangato </li>
          </ul> */}
          I'm a racing car
        </Person> 
        <Person
         name={this.state.persons[2].name} 
         age={this.state.persons[2].age}/>
      </div>
    );

    // Both do the same, above is the reason why we use jsx
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'working?'))
  }
}

export default App;
