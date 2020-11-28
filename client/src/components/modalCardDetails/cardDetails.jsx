import React from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus } from '../../redux/actions/modals';

function cardDetails(props) {

  function closeModal() {
    props.setModalStatus('cardDetailsModal', false);
  };

  const { isModalOpen } = props;

  return (
    <HyperModal
      isOpen={isModalOpen}
      requestClose={closeModal}
    >
      Card Details Modal
    </HyperModal>
  );
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modalsReducer.cardDetailsModal
  }
}

const mapDispatchToProps = {
  setModalStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(cardDetails);
