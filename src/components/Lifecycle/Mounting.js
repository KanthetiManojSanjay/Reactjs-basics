import React from 'react'

class Mounting extends React.Component{
    constructor(){
        super();
        this.state={
            secondsElapsed:0
        };
    }

    start =()=>{
        this.setState({
            secondsElapsed: this.state.secondsElapsed+1
        });
    }
    componentDidMount(){
        setInterval(this.start ,1000);
    }
    render(){
        return (<React.Fragment><br/><br/>
        <h2>Seconds elased: {this.state.secondsElapsed}</h2>
        </React.Fragment>)
    }
}

export default Mounting