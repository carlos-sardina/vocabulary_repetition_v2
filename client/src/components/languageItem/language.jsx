import React from 'react';
import './styles.css';

export default function language(props) {

  const { data, onClickEvent } = props;

  return (
    <div className='language-item' onClick={onClickEvent}>
      <img src={data.img} alt={data.code} />
      <h1>{data.name}</h1>
    </div>
  )
}
