import React from 'react';
import './styles.css';

export default function modalBtn(props) {
  const { tagClass, icon, text, onClickEvent } = props;

  return (
    <span className={"modal-btn " + tagClass} onClick={onClickEvent}>
      <i className="material-icons">{ icon }</i>
      { text }
    </span>
  )
}