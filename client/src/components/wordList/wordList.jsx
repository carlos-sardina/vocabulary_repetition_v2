import React from 'react';
import WordItem from '../wordItem/wordItem';
import { connect } from 'react-redux'

function WordList(props) {
  const { words } = props;

    return (
      <div className="main_content">
        {
          words.map(word => <WordItem key={word._id} data={word} />)
        }
      </div>
    )
}

const mapStateToProps = (state) => ({
  words: state.wordsReducer.words
})


export default connect(mapStateToProps)(WordList);
