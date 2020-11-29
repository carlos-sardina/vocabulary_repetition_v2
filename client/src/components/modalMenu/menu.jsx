import React from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus } from '../../redux/actions';
import MenuItem from '../menuItem/menuItem';

function menu(props) {

  function closeModal() {
    props.setModalStatus('menuModal', false);
  };

  const { isModalOpen } = props;

  return (
    <HyperModal
      isOpen={isModalOpen}
      requestClose={closeModal}
      position={{alignItems: 'flex-start', justifyContent: 'flex-end'}}
      classes={{contentClassName: 'menu-modal-container'}}
    >
      <div className="menu-modal">
        <MenuItem icon="add" text="Create" />
        <MenuItem icon="play_arrow" text="Study" />
        <MenuItem icon="update" text="Change times" customClass="smallest" />
        <MenuItem icon="public" text="Switch Language" customClass="smallest" />
      </div>  
    </HyperModal>
  );
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modalsReducer.menuModal
  }
}

const mapDispatchToProps = {
  setModalStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(menu);
