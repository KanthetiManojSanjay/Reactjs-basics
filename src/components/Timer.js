import React from 'react';

class Timer extends React.Component{
    
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
    handleClick =()=>{
        setInterval(this.start ,1000);
    }
    render(){
        return (<React.Fragment><br/><br/>
        <button onClick={this.handleClick}>Start Timer</button><br/><br/>
        <Resultant new={this.state.secondsElapsed}/>
        </React.Fragment>)
    }
}

function Resultant(data){
    return (<h2>Seconds Elapsed: {data.new}</h2>);
}

export default Timer