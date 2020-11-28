import React, { Component } from 'react';
import './styles.css';

export default class playingBar extends Component {
  render() {

    const totalWords = 190;
    const current = 25;
    const estimatedTime = 150;

    return (
      <div className="playing-bar" id="player">
        <div className="playing-bar-content">
          <span>Listening {current}/{totalWords}</span>
          <div className="right-container">
            <span>ET: {estimatedTime != null ? estimatedTime + "min." : "calculing..." }</span>
            <i className="material-icons">stop</i>
          </div>
        </div>
      </div>
    )
  }
}
