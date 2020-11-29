import React, { Component } from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus, setSelectedWord } from '../../redux/actions';
import Button from '../button/button';
import { matchWord, createWord, editWord } from '../../services/words';
import moment from "moment";
import { updateActiveWordListFromAPI } from '../../util'

class addEditModal extends Component {

  constructor(props) {
    super(props)

    this.initialState = {
      _id: null,
      word: '',
      meaning: '',
      created: null,
      location: 'ACTIVE',
      language: null,
      times_played: 0,
      wordsMatched: []
    }

    this.state = this.initialState;
  }

  componentWillReceiveProps(newProps) {
    const { word } = newProps;

    if (!word) {
      return this.setState(this.initialState);
    }

    this.setState(word)
  }

  closeAndResetState = () => {
    this.props.setModalStatus('addEditModal', false);
    this.setState(this.initialState);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });

    if(name === "word" && value) {
      matchWord(value)
        .then(done => this.setState({ wordsMatched: done.data }))
        .catch(err => console.log(err))
    }
  }
  // validator and switcher between endpoints
  addEditWord = () => {
    const { _id, word, meaning, wordsMatched } = this.state;

    if(word === '' || (wordsMatched.length === 0 && meaning === '')) {
      return console.log('all fields required')
    }

    if (_id) {
      return this.editWordHandler();
    }

    this.addWordHandler();
  }

  // add word endpoint
  addWordHandler = () => {
    let statusCode;
    const word = this.state;
    word.created = moment().utc().format();
    word.language = this.props.language.code;
    createWord(word)
      .then(res => {
        statusCode = res;
        return updateActiveWordListFromAPI(this.props.language.code);
      })
      .then(() => {
        let message = statusCode === 201 ? "Created successfully" : statusCode === 200 ? "Moved to active" : '';
        document.getElementById('word_input').focus();
        this.setState(this.initialState);
        console.log(message);
      })
      .catch(err => console.log(err))
  }

  // edit word endpoint
  editWordHandler = () => {
    editWord(this.state)
      .then(() => updateActiveWordListFromAPI(this.props.language.code))
      .then(() => {
        this.props.setSelectedWord(this.state);
        this.closeAndResetState();
      })
      .catch(err => console.log(err))
  }
    
  render() {

    const { isModalOpen } = this.props;
    const { _id, word, meaning, wordsMatched } = this.state;

    return (
      <HyperModal
        isOpen={isModalOpen}
        requestClose={this.closeAndResetState}
        classes={{contentClassName: 'app-modal'}}
      >
        <div className="add-modal">
            <div className="word-container">
              <input id='word_input' autoComplete="off" className="japanese" type="text" placeholder="Word" lang="jp" value={word} name="word" onChange={this.handleChange} />
              <input disabled={wordsMatched.length > 0} autoComplete="off" type="text" placeholder="Meaning" lang="es" value={meaning} name="meaning" onChange={this.handleChange} />
            </div>
            <div className="match-area">
              {
                wordsMatched.map(w => <span key={w._id}>{w.word}: <em>{w.meaning}</em></span>)
              }
            </div>
            <div className="actions">
              <Button tagClass="btn_bc_blue" icon="close" text="CLOSE" onClickEvent={this.closeAndResetState} />
              <Button tagClass="btn_bc_green" icon={_id ? 'save': 'backup'} text={_id ? 'SAVE': wordsMatched.length === 0 ? 'ADD' : 'SET ACTIVE'} onClickEvent={this.addEditWord} />
            </div>
          </div>
      </HyperModal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modalsReducer.addEditModal,
    word: state.wordsReducer.selectedWord,
    language: state.languageReducer.language
  }
}

const mapDispatchToProps = {
  setModalStatus,
  setSelectedWord
}

export default connect(mapStateToProps, mapDispatchToProps)(addEditModal);
