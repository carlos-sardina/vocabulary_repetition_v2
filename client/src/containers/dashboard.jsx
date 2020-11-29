import React, { Component } from 'react';
import Header from '../components/header/header';
import PlayingBar from '../components/playingBar/playingBar';
import WordList from '../components/wordList/wordList';
import AppModals from '../components/appModals/modals';

export default class Home extends Component {
  render() {

    return (
      <>
        <Header />
        <WordList />
        <AppModals />
        <footer>
          <PlayingBar />
        </footer>
      </>
    )
  }
}
