import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class RefLogin extends React.Component{

    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
        this.nameRef=React.createRef()
        this.pwdRef=React.createRef()
    }

    handleLogin = (e)=>{
        e.preventDefault();
       if(this.nameRef.current.value==="" && this.pwdRef.current.value===""){
           alert("Please enter Username and Password")
       }
       alert( "Welcome "+ this.nameRef.current.value)
    }

    render(){
        return (<React.Fragment>
            <form>
                <div className="form-group">
                    <label for="name">Username:</label>
                    <input type="text" className="form-control" id="name" name="name" 
                        ref={this.nameRef} placeholder="Enter name" style={{width:'40%'}}/>
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" name="password" 
                       ref={this.pwdRef} placeholder="Enter password" style={{width:'40%'}}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
            </form>
        </React.Fragment>)
    }
}

export default RefLogin