import React from 'react';

class Unmounting extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        };
    }

    start =()=>{
        this.setState({
            count: this.state.count+1
        });
    }
    componentDidMount(){
        this.interval=setInterval(this.start ,1000);
    }

    componentWillUnmount(){
        console.log('Component WILL UNMOUNT!')
        clearInterval(this.interval);
    }
    render(){
        return (<React.Fragment><br/><br/>
        <Update new={this.state.count}/>
        </React.Fragment>)
    }
}

class Update extends React.Component{
    shouldComponentUpdate(newProps, newState){
        if(this.props.new<=3){
            console.log('shouldComponentUpdate:', newProps);
                return false;
        }else{
            return true;
        }
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('Previous value destroyed:', prevProps);
        console.log('Updated');
    }

    render(){
        return (<React.Fragment>
             <h2>Seconds elased: {this.props.new}</h2>
        </React.Fragment>)
    }
}

export default Unmounting