import React, { Component } from 'react';
import Header from '../components/header/header';
import PlayingBar from '../components/playingBar/playingBar';
import WordList from '../components/wordList/wordList';

export default class Home extends Component {

  render() {

    const words = [
      {
        _id: 0,
        word: 'こんにちは',
        meaning: 'hola',
        times_played: 10
      },
      {
        _id: 0,
        word: 'こんにちは',
        meaning: 'hola',
        times_played: 150
      },
      {
        _id: 0,
        word: 'こんにちは',
        meaning: 'hola',
        times_played: 300
      },
      {
        _id: 0,
        word: 'こんにちは',
        meaning: 'hola',
        times_played: 450
      },
      {
        _id: 0,
        word: 'こんにちは',
        meaning: 'hola',
        times_played: 525
      },
      {
        _id: 0,
        word: 'こんにちは',
        meaning: 'hola',
        times_played: 575
      },
      {
        _id: 0,
        word: 'こんにちは',
        meaning: 'hola',
        times_played: 600
      },
    ]

    return (
      <>
        <Header />
        <WordList words={words} />
        <footer>
          <PlayingBar />
        </footer>
      </>
    )
  }
}
