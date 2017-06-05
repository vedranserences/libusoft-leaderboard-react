import React, { Component } from 'react';
import { Unity } from 'react-unity-webgl';
import './Game.css';

class Game extends Component {
    
  render() {

    return (
        <div className="game-container">
            <Unity className="game" src={"../Build/WebBuild.json"} ></Unity>
        </div>
      
    );
  }
}
export default Game;
