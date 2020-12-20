import React from 'react';
import WordItem from '../wordItem/wordItem';
import { connect } from 'react-redux'

function WordList(props) {
  const { words, average } = props;

    return (
      <div className="main_content">
        {
          words.map(word => <WordItem
            key={word._id}
            data={word}
            average={average}
          />)
        }
      </div>
    )
}

const mapStateToProps = (state) => ({
  words: state.wordsReducer.words,
  average: state.wordsReducer.studiedAverage
})


export default connect(mapStateToProps)(WordList);
