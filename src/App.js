import React, { Component } from 'react';
import Leaderboard from './components/Leaderboard';
import Home from './components/Home';
import Game from './components/Game';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route  path="/leaderboard" component={Leaderboard}/>
            <Route  path="/game" component={Game}/>
          </div>
          </Router>
      </div>
    );
  }
}

export default App;
