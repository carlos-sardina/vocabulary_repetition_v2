import React, { Component } from 'react';
import Header from '../components/header/header';
import PlayingBar from '../components/playingBar/playingBar';
import WordList from '../components/wordList/wordList';
import AppModals from '../components/appModals/modals';
import { updateActiveWordListFromAPI, DOMLoader, setInitialData } from '../util';
import { getConfig } from '../services/config';

export default class Home extends Component {

  componentDidMount() {
    getConfig()
      .then(data => {
        setInitialData(data)
        return updateActiveWordListFromAPI()
      })
      .then(() => DOMLoader.hidde())
  }

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
