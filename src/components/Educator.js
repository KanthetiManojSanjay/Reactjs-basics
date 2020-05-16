import React from 'react'
var course = [{
    "Name": "Angular",
    "educator": "Khalid"
   },
   {
    "Name": "ReactJS",
    "educator": "Roopashri"
   },
   {
    "Name": "Ajax",
    "educator": "Krishna"
   }
 ]
class Educator extends React.Component {
      constructor(props){
                  super(props);
                  this.state = {crsData:course};
                    }
      render(){
               var users = this.state.crsData;
               return(<div>
                          <h4>UI Courses list</h4>
                      <div> 
                        {
                        users.map(userDetails=>{
                          return (<div>
                                       <b>Course: </b>{userDetails.Name}, 
                                       <b><br/>Educator: </b>{userDetails.educator} <br/><br/>
                                  </div>); })
                        }
                       </div>
               </div>);
            }
}
export default Educator;
