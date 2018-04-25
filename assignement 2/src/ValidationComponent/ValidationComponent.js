import React from  'react';




const validationComponent= (props) =>{
    let shownText="";
    if(props.textLength===0){
        shownText=(
            <p> Enter some text pls </p>
        )
    }
    else if(props.textLength<5){
        shownText=(
            <p>This is too short, it's only {props.textLength} letters long, you need at least 5 </p>
        )
    }
    else if(props.textLength>200){
        shownText=(
            <p> Text is too long, it needs to be 200 letters or less </p>
        )
    }
    else{
        shownText=(
            <p> Text is : {props.textLength} letters long </p>
        )
    }

    return (
        shownText
    );
}

export default validationComponent;