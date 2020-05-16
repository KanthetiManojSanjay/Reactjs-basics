import React from 'react';
import PropTypes from 'prop-types';
class PropertyTypes extends React.Component {
   render() {
      return (
         <React.Fragment>
            <h3>Array: </h3> <p>{this.props.array}</p>
            <h3>Boolean: </h3><p>{this.props.boolean ? "True" : "False"}</p>
            <h3>Function: </h3><p>{this.props.function(10)}</p>
            <h3>Number: </h3><p>{this.props.number}</p>
            <h3>String: </h3><p>{this.props.string}</p>
            <h3>Object: </h3><p>{this.props.emp.empName} <br/>
                        {this.props.emp.empId}< br/>
                        {this.props.emp.unit}</p>
         </React.Fragment>
      );
   }
}
PropertyTypes.propTypes = {
   array: PropTypes.array,
   boolean: PropTypes.bool,
   function: PropTypes.func,
   number: PropTypes.number,
   string: PropTypes.string,
   emp: PropTypes.object
}
PropertyTypes.defaultProps = {
   array: "John",
   boolean: false,
   function: function(e){return e},
   number: 23,
   string: "React",
	
   emp: {
         empName:"John",
         empId: 123456,
         unit: "Systems Engineer"
        }
}
export default PropertyTypes;
