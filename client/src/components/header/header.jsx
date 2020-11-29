import React from 'react';
import './styles.css';
import { constants } from '../../config/const';
import { setModalStatus } from '../../redux/actions';
import { connect } from 'react-redux';

function header(props) {

  function openDetailsModal() {
    props.setModalStatus('menuModal', true);
  }

  return (
    <header>
      <span>{ constants.app_name }</span>
      <i className="material-icons" onClick={openDetailsModal}>menu</i>
    </header>
  )
}

const mapDispatchToProps = {
  setModalStatus
}

export default connect(null, mapDispatchToProps)(header);