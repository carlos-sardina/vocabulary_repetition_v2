import React from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus } from '../../redux/actions/modals';

function menu(props) {

  function closeModal() {
    props.setModalStatus('menuModal', false);
  };

  const { isModalOpen } = props;

  return (
    <HyperModal
      isOpen={isModalOpen}
      requestClose={closeModal}
    >
      Menu Modal
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
