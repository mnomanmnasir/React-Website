import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Contact from '../components/Contact'
import Service from '../components/Service'
import Home from '../components/Home'
import About from '../components/About'


class AppRouter extends React.Component {
    render() {
        return (
            <Router>

                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/service' component={Service} />
                <Route exact path='/contact' component={Contact} />
                {/* <Redirect to='/about' /> */}
                {/* <Route path='/service' component={Service} /> */}
            </Router>
        )
    }
}

export default AppRouter;

