import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DefaultLayout from '../components/default.layout';
import Home from './home';
import Quiz from './quiz';
import Result from './result';

const Screens = () => {
    return <DefaultLayout>
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/result" component={Result} />
        </Router>
    </DefaultLayout> 
}

export default Screens;