import React from 'react';
import './CharComponent.css';



const charComponent = (props) =>{
    let mdr
    if( props.text ==' '){
        mdr=(
        <div onClick={props.deleteChar} className="CharComponentEmpty">
            <p >{props.text}</p>
        </div>)
    }

    else{
        mdr=(
        <div onClick={props.deleteChar} className="CharComponent">
            <p >{props.text}</p>
        </div>)
    }
    return(
        mdr
    )
}

export default charComponent