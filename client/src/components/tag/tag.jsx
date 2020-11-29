  
import React from 'react';
import './styles.css';

export default function times(props) {
  const { text, icon, bg_color } = props;

  return (
    <div className={"modal-tag-item " + bg_color}>
      <i className="material-icons">{icon}</i>
      <span>{text}</span>
    </div>
  )
}