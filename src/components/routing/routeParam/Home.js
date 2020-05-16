import React from 'react'; 
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Display from './Display';
//import UI from '../image/UI.png'


class Home extends React.Component {
    render() {
        return <Router>
                    <React.Fragment>
                        <h4>Welcome&nbsp;{this.props.match.params.name} to UI courses</h4>
                        <h4> Just Launched...</h4>
                        <Link to="/display/Angular">             
                            <li>Angular</li> 
                        </Link> 
                        <Link to="/display/React">                      
                            <li>React</li>
                        </Link> 
                        <Link to="/display/Express">                    
                            <li>Express</li> 
                        </Link> 
                        <Link to="/display/Vue">  
                            <li>Vue</li> 
                        </Link>    
                        <Route path="/display/:topic" 
                        component={Display}/>
                    </React.Fragment>
                </Router>
                 }
}
export default Home;
