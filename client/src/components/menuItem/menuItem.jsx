  import React from 'react';
import './styles.css';

export default function menuItem(props) {
  const { icon, text, onClickEvent, customClass } = props;

  return (
    <span className="menuItem" onClick={onClickEvent}>
      <i className={"material-icons " + customClass }>{ icon }</i>
      <span>{ text }</span>
    </span>
  )
}