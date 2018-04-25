import React from 'react';
import './CharComponent.css';

const charComponent = (props) =>{
    return(
        <div className="CharComponent">
        <p onClick={props.deleteChar}>{props.text}</p>
        </div>
    )
}

export default charComponent