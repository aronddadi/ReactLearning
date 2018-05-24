import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'zz' ,name: 'Aron', age: 24 },
      { id: 'zer' ,name: 'Daniel', age: 32 },
      { id: 'aze' ,name: 'Ronald', age: 69 }
    ],
    otherState: 'some other value',
    showPersons:  false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // in order not to mutate the object we copy it, alternative below
    // const person = Object.assign({},this.state.persons[personIndex]);

    person.name=event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex]= person;

    this.setState( { persons: persons} )
  }

  deletePersonsHandler =(personIndex)=>{
    // const persons = this.state.persons.slice(); // Slice with no arguments copies the array
    const persons = [...this.state.persons];  //spread operator, adds the objects of old array 
    // You make a copy , update it/manipulate it & then you replace the newer array with the older one
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  togglePersonsHandler=  ()  =>{
    // this.state.showPersons ?
    // this.setState({
    //   showPersons:0
    // })
    // :
    // this.setState({
    //   showPersons:1
    // })

    // Code above does the same as code underneath
  
    const doesShow= this.state.showPersons;
    this.setState({showPersons:!doesShow})

  }
  


  render () {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color:'white',
    };

    let persons = null;
    // Conditionally shown content should be done in  javascript
    // Use maps to output lists
    if(this.state.showPersons){
      persons=(
         <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
            click={()=>{this.deletePersonsHandler(index)}} // if not arrow function you gotta bind 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
             />
          })}
          </div>
          
      );
      style.backgroundColor = 'red';

    }

    const classes=[]
    if(this.state.persons.length<=2){
      classes.push('red'); // Class => red
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style}
          onClick={ this.togglePersonsHandler}>Show Names</button>
          
        {persons}
         
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
