import React, { Component } from 'react';
import './styles.css';
import { constants } from '../../config/const';

export default class header extends Component {
  render() {
    return (
      <header>
        <span>{ constants.app_name }</span>
        <i className="material-icons">menu</i>
      </header>
    )
  }
}