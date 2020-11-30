import React from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus, setLanguage, setWordsList } from '../../redux/actions';
import MenuItem from '../menuItem/menuItem';
import { Player, Speech } from '../../util'

function menu(props) {

  function closeModal() {
    props.setModalStatus('menuModal', false);
  };

  function switchLanguage() {
    closeModal();
    props.setWordsList([]);
    props.setLanguage(null);
  }

  function createHandler() {
    closeModal();
    props.setModalStatus('addEditModal', true);
  }

  function repeatTimesHanlder() {
    closeModal();
    props.setModalStatus('repeatTimesModal', true);
  }

  function playWordsHandler() {
    closeModal();
    Speech.open();
    setTimeout(() => {
      Player.play(props.words, 3);
    }, 1000);
  }

  const { isModalOpen, language } = props;

  return (
    <HyperModal
      isOpen={isModalOpen}
      requestClose={closeModal}
      position={{alignItems: 'flex-start', justifyContent: 'flex-end'}}
      classes={{contentClassName: 'menu-modal-container'}}
    >
      <div className="menu-modal">
        {
          language.code === 'all' ? null : <MenuItem icon="add" text="Create" onClickEvent={createHandler} />
        }
        <MenuItem icon="play_arrow" text="Study" onClickEvent={playWordsHandler} />
        <MenuItem icon="update" text="Change times" customClass="smallest" onClickEvent={repeatTimesHanlder} />
        <MenuItem icon="public" text="Switch Language" customClass="smallest" onClickEvent={switchLanguage} />
      </div>  
    </HyperModal>
  );
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modalsReducer.menuModal,
    language: state.languageReducer.language,
    words: state.wordsReducer.words
  }
}

const mapDispatchToProps = {
  setModalStatus,
  setLanguage,
  setWordsList
}

export default connect(mapStateToProps, mapDispatchToProps)(menu);
