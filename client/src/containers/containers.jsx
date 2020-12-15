import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from './dashboard';
import Welcome from './welcome/welcomeScreen';
import { DOMLoader } from '../util'

class Containers extends Component {

  componentDidMount() {

    let voiceData = window.speechSynthesis.getVoices();
    console.log(voiceData)

    DOMLoader.hidde();

    let timer = setInterval(() => {
      if(!voiceData.length) {
          voiceData = window.speechSynthesis.getVoices();
          console.log(voiceData)
      } else {
        console.log(voiceData)
          clearInterval(timer);
      }
    }, 500);

  }

  render() {
    return this.props.language ? <Dashboard /> : <Welcome />
  }
}

const mapStateToProps = (state) => ({ language: state.languageReducer.language })

export default connect(mapStateToProps)(Containers);
