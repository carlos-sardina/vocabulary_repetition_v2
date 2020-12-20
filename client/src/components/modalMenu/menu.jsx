import React from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus, setWordsList } from '../../redux/actions';
import MenuItem from '../menuItem/menuItem';
import { Player, DOMLoader, updateActiveWordListFromAPI } from '../../util'
import { setWordsAsLearned } from '../../services/words';
import { toast } from 'react-toastify';

function menu(props) {

  function closeModal() {
    props.setModalStatus('menuModal', false);
  };

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
      .then(() => updateActiveWordListFromAPI())
      .then(() => {
        closeModal();
        DOMLoader.hidde();
        toast.info('Moved to learned')
      })
  }

  const { isModalOpen } = props;

  return (
    <HyperModal
      isOpen={isModalOpen}
      requestClose={closeModal}
      position={{alignItems: 'flex-start', justifyContent: 'flex-end'}}
      classes={{contentClassName: 'menu-modal-container'}}
    >
      <div className="menu-modal">
        <MenuItem icon="add" text="Create" onClickEvent={createHandler} />
        <MenuItem icon="bookmark" text="All to learned" customClass="smallest" onClickEvent={moveAllToLearned} />
        <MenuItem icon="play_arrow" text="Study" onClickEvent={playWordsHandler} />
        <MenuItem icon="update" text="Change times" customClass="smallest" onClickEvent={repeatTimesHanlder} />
      </div>  
    </HyperModal>
  );
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modalsReducer.menuModal,
    words: state.wordsReducer
  }
}

const mapDispatchToProps = {
  setModalStatus,
  setWordsList
}

export default connect(mapStateToProps, mapDispatchToProps)(menu);
