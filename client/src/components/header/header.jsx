import React from 'react';
import './styles.css';
import { setModalStatus } from '../../redux/actions';
import { connect } from 'react-redux';

function header(props) {

  function openDetailsModal() {
    props.setModalStatus('menuModal', true);
  }
  
  const { language } = props;

  return (
    <header>
      <span> <img src={language.img} alt={language.code}/> { language.name }</span>
      <i className="material-icons" onClick={openDetailsModal}>menu</i>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    language: state.languageReducer.language
  }
}

const mapDispatchToProps = {
  setModalStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(header);