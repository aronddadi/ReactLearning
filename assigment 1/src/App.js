import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';


class App extends Component {

  state={
    user:[
      {name:'Aronzio'},
      {name:'Weaslio'}
    ]
  }

  userNameHandler=(e)=>{
    this.setState({
      user: [
        { name: 'robert' },
        { name: 'wasseige' }
      ]
    })
  }
  writeNameHandler=(e)=>{
    this.setState({
      user: [
        { name: e.target.value },
        { name: 'wasseigio' }
      ]
    })
  }

  render() {

    const swag={
      backgroundColo:'rgba(0,0,0,0.2)',
      font:'sans-serif',
      border:'1px solid rgba(0,0,0,0.7)',
      boxShadow: '0 2px 3px #ccc',
      borderRadius:'5px',
      width:'70%',
      margin:'10px auto',
      textAlign:'center'
    }

    return (
      <div className="App" style={swag}>

          <UserOutput 
          userName={this.state.user[0].name}
          changeUser={this.userNameHandler}
          changeName={this.writeNameHandler}
          >
            
          </UserOutput>
          {/* <UserInput changeUser={this.userNameHandler} /> */}
          <UserInput 
            changeName={this.writeNameHandler}
            userName={this.state.user[0].name}
          />

          <br />
          <UserOutput userName={this.state.user[1].name}/>


      </div>
    );
  }
}

export default App;
