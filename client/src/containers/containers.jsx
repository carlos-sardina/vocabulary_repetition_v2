import React from 'react'
import { connect } from 'react-redux'
import Dashboard from './dashboard';
import Welcome from './welcome/welcomeScreen';

function Containers(props) {
  return props.language ? <Dashboard /> : <Welcome />
}

const mapStateToProps = (state) => ({ language: state.languageReducer.language })

export default connect(mapStateToProps)(Containers);
