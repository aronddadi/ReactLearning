import React from 'react';
import './UserInput.css'


const userInput = (props) => {
    return(
        <div>
            <input type="text" value={props.userName}
            // onClick={()=>{props.changeUser()}}
            onChange={props.changeName} />
        </div>
    )
}

export default userInput