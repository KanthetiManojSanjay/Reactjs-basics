import React from 'react';
class DefaultProp extends React.Component {
    render() {
      return(<React.Fragment>
                  <h1> {this.props.element1} </h1>
                  <h1> {this.props.element2} </h1>
              </React.Fragment>);
    }
}
DefaultProp.defaultProps = {
    element1 : "Hello",
	  element2 : "World",
} 
export default DefaultProp;
