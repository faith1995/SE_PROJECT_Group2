import React from 'react';
import { Router, Route, Link, IndexLink, hashHistory, browserHistory, IndexRoute  } from 'react-router';
import cookie from 'react-cookie';

import routes from './routes.jsx';


class App extends React.Component { 
    render() {
        function requireAuth(){
            browserHistory.push('/register')
        }

        return (
            <Router routes={routes} history={browserHistory}/>
        );
    }
}

export default App;