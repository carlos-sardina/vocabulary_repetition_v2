import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { Player, DOMLoader } from '../../util'

function playingBar(props) {

  const { totalWords, current, estimatedTime } = props.playerReducer;
  
  function handleStop() {
    DOMLoader.show();
    Player.stop();
  }

  return (
    <div className="playing-bar" id="player">
      <div className="playing-bar-content">
        <span>Listening {current}/{totalWords}</span>
        <div className="right-container">
          <span>ET: {estimatedTime != null ? estimatedTime + "min." : "calculing..." }</span>
          <i className="material-icons" onClick={handleStop}>stop</i>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playerReducer: state.playerReducer
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(playingBar)
