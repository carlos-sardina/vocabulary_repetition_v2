import React from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setSelectedWord, setModalStatus } from '../../redux/actions';
import Tag from '../tag/tag';
import Button from '../button/button';
import { setTimesColor, updateActiveWordListFromAPI, Player, DOMLoader } from '../../util'
import moment from "moment";
import { deleteWord, setWordsAsLearned } from '../../services/words';
import { toast } from 'react-toastify';
import { languages } from '../../data/availableLanguages';

function cardDetails(props) {

  function closeModal() {
    props.setSelectedWord(null);
  };

  function editWordHandler() {
    props.setModalStatus('addEditModal', true);
  }

  function deleteWordHandler(id) {
    const confirmation = window.confirm("Are you sure? Delete a word is irreversible");
    if (confirmation !== true) {
      return;
    }

    deleteWord(id)
      .then(res => updateActiveWordListFromAPI())
      .then(() => props.setSelectedWord(null))
      .catch(err => toast.error(err))
  }

  function moveToLearnedHandler(id) {
    setWordsAsLearned([id])
      .then(() => updateActiveWordListFromAPI())
      .then(() => props.setSelectedWord(null))
      .catch(err => toast.error(err))
  }

  function readWord(word) {
    DOMLoader.show();
    Player.play([word])
  }

  const { word } = props;
  const creationDate = moment(word?.created);
  const today = moment.utc().format();
  const daysDifference = creationDate.diff(today, 'days');

  return (
    <HyperModal
      isOpen={word}
      requestClose={closeModal}
      classes={{contentClassName: (word ? 'app-modal' : 'app-modal app-modal-p0')}}
    >
      {
        word ?
        <div className="info-modal">
        <div className="word-container">
          <h3>{ word?.word }</h3>
          <h4>{ word?.meaning }</h4>
        </div>
        <div className="tag-container">
          <Tag text={"Listened " + word?.times_played + (word?.times_played === 1 ? ' time' : ' times')} icon="access_time" bg_color={setTimesColor(word?.times_played)} />
          <Tag text={daysDifference === 0 ? 'Created today' : "Created " + daysDifference.toString().replace(/\-/g, '') + " days ago" } icon="history" bg_color="bg_gray" />
          <Tag text={languages.find(l => l.code === word.language).name} icon="public" bg_color="bg_purple" />
        </div>
        <div className="actions">
          <Button tagClass="btn_bc_red" icon="delete" text="DELETE" onClickEvent={() => deleteWordHandler(word._id)} />
          <Button tagClass="btn_bc_yellow" icon="edit" text="EDIT" onClickEvent={() => editWordHandler(word._id)}/>
          <Button tagClass="btn_bc_blue" icon="record_voice_over" text="PLAY" onClickEvent={() => readWord(word)} />
          <Button tagClass="btn_bc_green" icon="save" text="STORE" onClickEvent={() => moveToLearnedHandler(word._id) } />
        </div>
      </div>
      : <></>
      }
    </HyperModal>
  );
}

const mapStateToProps = (state) => {
  return {
    word: state.wordsReducer.selectedWord
  }
}

const mapDispatchToProps = {
  setSelectedWord,
  setModalStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(cardDetails);
