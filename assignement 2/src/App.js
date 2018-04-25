import React, { Component } from 'react';
import './App.css';
import './ValidationComponent/ValidationComponent.js';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent  from './CharComponent/CharComponent';

class App extends Component {
  state={
    inputVal:'Enter something',
  }
  updateVal = (e) => {
    this.setState({ inputVal:e.target.value})
  };

  deleteChar = (event, key) => {

    // console.log(this.state.inputVal );
    // console.dir(event.target.innerText );
    // console.dir(key );

    let string = this.state.inputVal;

    // console.log(string.slice(key, 1) )


    
    const charToBeRemoved=[...this.state.inputVal.split("")];
    charToBeRemoved.splice(key,1);
    const backToArray=charToBeRemoved.join('');
    this.setState({inputVal:backToArray})
    

  }

  render() {

    let charz=this.state.inputVal.split("")
    let counter=0;
    let charzShown=(
      charz.map(char=>{
        let key = counter++;
        //console.log(counter)
        return (<CharComponent
          deleteChar={(event)=>this.deleteChar(event, key)}
          text={char}
          //key={counter++}
          
          
        />)
        //counter++;
      })
    )
    return (
      <div className="App">
        <div className="Content">
          <h1> Second assignement </h1>
          <input type="text" value={this.state.inputVal} onChange={(event)=>this.updateVal(event)}/>
          <ValidationComponent
            textLength={this.state.inputVal.length}
           />
           {charzShown}
        </div>
      </div>
    );
  }
}

export default App;


      // <div className="App">
      //   <ol>
      //     <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
      //     <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
      //     <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
      //     <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
      //     <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
      //     <li>When you click a CharComponent, it should be removed from the entered text.</li>
      //   </ol>
      //   <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      // </div>