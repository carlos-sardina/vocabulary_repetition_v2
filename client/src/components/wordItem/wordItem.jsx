import React from 'react';
import PlayingTooltip from '../playingTooltip/playingTooltip';
import { setTimesColor } from '../../util/setItemTimesColor';
import { setSelectedWord } from '../../redux/actions';
import { connect } from 'react-redux';
import './styles.css';
import { languages } from '../../data/availableLanguages';

function item(props) {

  function wordClickHandler() {
    props.setSelectedWord(props.data);
  }

  const { _id, word, meaning, times_played, language } = props.data;
  const averageDiff = times_played - props.average;
  const currentWordId = props.playerReducer.playing_id;
  const imgURL = languages.find(l => l.code === language).img;

  return (
    <div className="card-container" onClick={wordClickHandler}>
      <div className="word-item-container">
        <div className="word-container">
          <div className="inline-container">
            <h3>{ word }</h3>
            { currentWordId === _id ? <PlayingTooltip /> : <h5>{times_played}t.</h5> }
          </div>
          <div className="inline-container mt2">
            <h4>{ meaning }</h4>
            <div className="flag-avg-container">
              <img src={ imgURL } alt="lang flag"/>
              <span className={setTimesColor(times_played)}>{ Math.sign(averageDiff) === 1 ? '+' : null}{averageDiff}</span>
            </div>
          </div>
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
  setSelectedWord
}

export default connect(mapStateToProps, mapDispatchToProps)(item);