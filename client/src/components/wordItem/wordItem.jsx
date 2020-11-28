import React from 'react';
import PlayingTooltip from '../playingTooltip/playingTooltip';
import { setTimesColor } from '../../util/setItemTimesColor';
import { setModalStatus } from '../../redux/actions/modals';
import { connect } from 'react-redux';
import './styles.css';

function item(props) {

  function openDetailsModal() {
    props.setModalStatus('cardDetailsModal', true);
  }

  // const { currentWordId } = this.props.state;
  const { _id, word, meaning, times_played } = props.data;
  // const averageDiff = times_played - this.props.average;

  return (
    <div className="card-container" onClick={openDetailsModal}>
      <div className="word-item-container">
        <div className="word-container">
          <div className="inline-container">
            <h3>{ word }</h3>
            <PlayingTooltip />
            {/* currentWordId === _id ? <PlayingTooltip /> : null*/ }
          </div>
          <div className="inline-container mt2">
            <h4>{ meaning }</h4>
            <span className={setTimesColor(times_played)}>+ 60</span>

            {/* <span className={setTimesColor(times_played)}>{ Math.sign(averageDiff) === 1 ? '+' : null}{averageDiff}</span>*/ }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setModalStatus
}

export default connect(null, mapDispatchToProps)(item);