import React from 'react';

function TextInput(props){
        console.log("Props")
        console.log(props.nameRef)
    return (<React.Fragment>
         <br/><br/><label>Username:</label>
        <input type="text" ref={props.nameRef}/>
    </React.Fragment>);
}

export default TextInput