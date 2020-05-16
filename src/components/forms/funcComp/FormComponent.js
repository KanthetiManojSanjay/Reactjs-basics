import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextInput from './TextInput'

class FormComponent extends React.Component{

    handleLogin = (e)=>{
        e.preventDefault();
       alert( "Welcome "+ this.nameRef.value)
    }

    render(){
        return (<React.Fragment>
            <form onSubmit={this.handleLogin}>
                <TextInput nameRef={input => this.nameRef=input}/><br/><br/>
                <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
            </form>
        </React.Fragment>)
    }
}

export default FormComponent