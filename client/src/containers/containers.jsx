import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from './dashboard';
import Welcome from './welcome/welcomeScreen';
import { DOMLoader } from '../util'

class Containers extends Component {

  componentDidMount() {
    DOMLoader.hidde();
  }

  render() {
    return this.props.language ? <Dashboard /> : <Welcome />
  }
}

const mapStateToProps = (state) => ({ language: state.languageReducer.language })

export default connect(mapStateToProps)(Containers);
