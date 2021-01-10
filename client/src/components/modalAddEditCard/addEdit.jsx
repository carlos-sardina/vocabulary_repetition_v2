import React, { Component } from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus, setSelectedWord } from '../../redux/actions';
import Button from '../button/button';
import { matchWord, createWord, editWord } from '../../services/words';
import moment from "moment";
import { updateActiveWordListFromAPI } from '../../util';
import { toast } from 'react-toastify';
import { languages } from '../../data/availableLanguages';

class addEditModal extends Component {

  constructor(props) {
    super(props)

    this.initialState = {
      _id: null,
      word: '',
      meaning: '',
      created: null,
      image_url: '',
      location: 'ACTIVE',
      language: languages[0].code,
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

  handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Return' ) {
      if(e.target.name === 'image_url' || e.target.name === 'meaning' || (this.state.wordsMatched.length > 0 && e.target.name === 'word')) {
        this.addEditWord();
        return document.getElementById('word_input').focus();
      } else if(e.target.name === 'word') {
        return document.getElementById('meaning_input').focus();;
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });

    if(name === "word" && value) {
      matchWord(value)
        .then(done => this.setState({ wordsMatched: done.data }))
        .catch(err => toast.error(err))
    }
  }
  // validator and switcher between endpoints
  addEditWord = () => {
    const { _id, word, meaning, wordsMatched } = this.state;

    if(word === '' || (wordsMatched.length === 0 && meaning === '')) {
      return toast.warn('All fields required');
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
    createWord(word)
      .then(res => {
        statusCode = res;
        return updateActiveWordListFromAPI();
      })
      .then(() => {
        let message = statusCode === 201 ? "Created successfully" : statusCode === 200 ? "Moved to active" : '';
        this.setState(this.initialState);
        this.setState({ language: word.language })
        toast.success(message);
      })
      .catch(err => toast.error(err))
  }

  // edit word endpoint
  editWordHandler = () => {
    editWord(this.state)
      .then(() => updateActiveWordListFromAPI())
      .then(() => {
        this.props.setSelectedWord(this.state);
        this.closeAndResetState();
      })
      .catch(err => toast.error(err))
  }
    
  render() {

    const { isModalOpen } = this.props;
    const { _id, word, meaning, wordsMatched, image_url } = this.state;

    return (
      <HyperModal
        isOpen={isModalOpen}
        requestClose={this.closeAndResetState}
        classes={{contentClassName: 'app-modal'}}
      >
        <div className="add-modal">
            <div className="word-container">
              <input id='word_input' autoComplete="off" className="japanese" type="text" placeholder="Word" lang="jp" value={word} name="word" onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
              <input id='meaning_input' disabled={wordsMatched.length > 0} autoComplete="off" type="text" placeholder="Meaning" lang="es" value={wordsMatched.length > 0 ? wordsMatched[0].meaning : meaning} name="meaning" onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              <select name="language" onChange={this.handleChange} value={wordsMatched.length > 0 ? wordsMatched[0].language : this.state.language} disabled={wordsMatched.length > 0}>
                {
                  languages.map(l => <option key={l.code} value={l.code}>{l.name}</option>)
                }
              </select>
              <input id='image_url' autoComplete="off" className="image_url" type="text" placeholder="https://image_url.com/image" value={image_url} name="image_url" onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
            </div>
            <div className="match-area">
              {
                wordsMatched.length > 1 && <span style={{color: 'red'}}><em>{wordsMatched.length} results with same word (POSSIBLE DUPLICATION)</em></span>
              }
            </div>
            <div className="actions">
              <Button tagClass="btn_bc_blue" icon="close" text="CLOSE" onClickEvent={this.closeAndResetState} />
              {
                ((_id && !wordsMatched.length > 0) || (!_id)) && <Button tagClass="btn_bc_green" icon={_id ? 'save': 'backup'} text={_id ? 'SAVE': wordsMatched.length === 0 ? 'ADD' : 'SET ACTIVE'} onClickEvent={this.addEditWord} /> 
              }
            </div>
          </div>
      </HyperModal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modalsReducer.addEditModal,
    word: state.wordsReducer.selectedWord
  }
}

const mapDispatchToProps = {
  setModalStatus,
  setSelectedWord
}

export default connect(mapStateToProps, mapDispatchToProps)(addEditModal);
