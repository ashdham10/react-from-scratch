import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Chirps from './Chirps';
import Header from './Header';

class Navigation extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Link to="/">
                    <button className="btn btn-primary btn-sm" style={{margin:'10px'}}>HOME PAGE</button>
                    </Link>
                    <Link to="/chirps">
                    <button className="btn btn-primary btn-sm" style={{margin:'10px'}}>CHIRPS PAGE</button>
                    </Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/chirps" component={Chirps} />
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default Navigation;