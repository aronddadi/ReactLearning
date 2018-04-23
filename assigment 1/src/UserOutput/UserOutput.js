import React from 'react';
import UserInput from '../UserInput/UserInput.js'

const userOutput = (props) => {
    return(
        <div>
            <p>Hello {props.userName} and welcome to this !</p>
            <p> Wassup , what's good? </p>
            {/* <UserInput changeUser={props.changeUser} userName={props.userName} nameChanger={props.changeName}/> */}
        </div>
    );
}


export default userOutput;