import React from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus, setLanguage } from '../../redux/actions';
import MenuItem from '../menuItem/menuItem';

function menu(props) {

  function closeModal() {
    props.setModalStatus('menuModal', false);
  };

  function switchLanguage() {
    closeModal();
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
        <MenuItem icon="play_arrow" text="Study" />
        <MenuItem icon="update" text="Change times" customClass="smallest" onClickEvent={repeatTimesHanlder} />
        <MenuItem icon="public" text="Switch Language" customClass="smallest" onClickEvent={switchLanguage} />
      </div>  
    </HyperModal>
  );
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modalsReducer.menuModal,
    language: state.languageReducer.language
  }
}

const mapDispatchToProps = {
  setModalStatus,
  setLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(menu);
