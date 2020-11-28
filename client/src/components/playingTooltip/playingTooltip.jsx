import React, { Component } from 'react';
import './styles.css';

export default class Playing extends Component {
  render() {
    return (
      <em className="playing-tooltip">
        <i className="material-icons">play_arrow</i>
        Playing
      </em>
    )
  }
}