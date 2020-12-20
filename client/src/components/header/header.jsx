import React from 'react';
import './styles.css';
import { setModalStatus } from '../../redux/actions';
import { connect } from 'react-redux';

function header(props) {

  function openDetailsModal() {
    props.setModalStatus('menuModal', true);
  }

  return (
    <header>
      <span> <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg" alt="all"/>Words list</span>
      <i className="material-icons" onClick={openDetailsModal}>menu</i>
    </header>
  )
}

const mapDispatchToProps = {
  setModalStatus
}

export default connect(null, mapDispatchToProps)(header);