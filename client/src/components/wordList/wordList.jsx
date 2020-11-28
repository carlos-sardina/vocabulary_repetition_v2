import React, { Component } from 'react';
import WordItem from '../wordItem/wordItem';

class word_list extends Component {
  render() {

    const { words } = this.props;

    return (
      <div className="main_content">
        {
          words.map(word => {
            return <WordItem key={word._id} data={word} />
          })
        }
      </div>
    )
  }
}

export default word_list;