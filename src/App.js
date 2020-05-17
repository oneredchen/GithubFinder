import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

//For State Management
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

//For Routing to different pages & can be used to group different components together to display on each page. Client side routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert/>
              <Switch>
                <Route exact path='/' component ={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User}/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
