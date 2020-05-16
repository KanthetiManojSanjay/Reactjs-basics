import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component{

    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }

    setEmpState = (e) =>{
        const value=e.target.value
        const field=e.target.name
        this.setState({[field]:value})
    }
    handleLogin = (e)=>{
        e.preventDefault();
        alert("Logged in Successfully");
    }
    render(){
        return (<React.Fragment>
            <form>
                <div className="form-group">
                    <label for="name">Username:</label>
                    <input type="text" className="form-control" id="name" name="name" 
                        value={this.state.name} onChange={this.setEmpState}
                        placeholder="Enter name" style={{width:'40%'}}/>
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" name="password" 
                        value={this.state.password} onChange={this.setEmpState}
                        placeholder="Enter password" style={{width:'40%'}}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
            </form>
        </React.Fragment>)
    }
}

export default Login