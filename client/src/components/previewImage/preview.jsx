import React from 'react';
import './styles.css';
import { connect } from 'react-redux';

function preview(props) {
  const currentWordId = props.playerReducer.playing_id;
  const image_url = currentWordId ? props.words.find(w => w._id === currentWordId).image_url : null;

  return (
    image_url && !props.domLoader.isModalVisible ? 
    <div className="preview_image">
      <div className="img-container">
        <img src={image_url} alt="xd"/>
      </div>
    </div>
    : null
  )
}

const mapStateToProps = (state) => {
  return {
    words: state.wordsReducer.words,
    playerReducer: state.playerReducer,
    domLoader: state.domLoader,
  }
}

export default connect(mapStateToProps)(preview);