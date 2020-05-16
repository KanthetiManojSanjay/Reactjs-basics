import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

class Header extends React.Component{
    render(){
        return (<Router>
            <React.Fragment>
                <Link to="/home">Home</Link>|
                <Link to="/about">About Us</Link>|
                <Link to="/contact">Contact Us</Link>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
            </React.Fragment>
        </Router>)
    }
}

export default Header