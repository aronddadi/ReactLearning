import React from 'react'
// Allows jsx, use
import './Person.css';

const person = (props) =>{
    return (
        <div className='Person'>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old ! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;
//exports the person function by default so that if 
// Person gets imported it'll automatically only import the function