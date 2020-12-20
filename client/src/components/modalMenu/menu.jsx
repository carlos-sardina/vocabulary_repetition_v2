import React from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus, setLanguage, setWordsList } from '../../redux/actions';
import MenuItem from '../menuItem/menuItem';
import { Player, DOMLoader, updateActiveWordListFromAPI } from '../../util'
import { setWordsAsLearned } from '../../services/words';
import { toast } from 'react-toastify';

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
    DOMLoader.show();
    closeModal();
    Player.play(props.words.words, props.words.repeat_times.repeat_times);
  }

  function moveAllToLearned() {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation !== true) {
      return;
    }

    DOMLoader.show();
    setWordsAsLearned((props.words?.words?.map(w => w._id) || []))
      .then(() => updateActiveWordListFromAPI(props.language.code))
      .then(() => {
        closeModal();
        DOMLoader.hidde();
        toast.info('Moved to learned')
      })
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
        <MenuItem icon="bookmark" text="All to learned" customClass="smallest" onClickEvent={moveAllToLearned} />
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
    words: state.wordsReducer
  }
}

const mapDispatchToProps = {
  setModalStatus,
  setLanguage,
  setWordsList
}

export default connect(mapStateToProps, mapDispatchToProps)(menu);
