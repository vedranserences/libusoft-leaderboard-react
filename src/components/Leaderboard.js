import React, { Component } from 'react';
import './Leaderboard.css';
import PlayerItem from './PlayerItem';
import 'whatwg-fetch';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }
  render() {

    return (
    <div className="outer">
                <h1>Hall of Heroes</h1>
              <div className="leaderboard">
                  <img className="biceps-lijevo" src={"../images/biceps_lijevo.png"} alt=""/>

        <img className="biceps-desno" src={"../images/biceps_desno.png"} alt=""/>
          <ul className="leaderboard-header">
              <li className="place">Place</li>
              <li className="user">User</li>
              <li className="points">Points</li>
          </ul>
          <img className="superherokid" src={"../images/superherokid.png"} alt="Boy superhero"/>
          <ul className="leaderboard-list">
              {this.state.players.map((player, index) => 
              <PlayerItem key={index} data={player} place={index}/>
            )}
        </ul>
        <img className="superherogirl" src={"../images/superherogirl.png"} alt="Girl superhero"/>
      </div>
    </div>

    );
  }

  componentWillMount() {
      fetch('http://bornaivankovic.com:5003/leaderboard')
        .then(res=>res.json())
        .then(json => {
            json.sort(function(a,b) {
                return b.points -  a.points;
            })
            console.log(json);
            this.setState({players: json});
        });
  }
}

export default Leaderboard;
