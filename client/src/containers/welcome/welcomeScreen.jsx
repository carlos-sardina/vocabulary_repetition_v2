import React from 'react';
import { connect } from 'react-redux';
import { setLanguage, setWordsList } from '../../redux/actions';
import { updateActiveWordListFromAPI } from '.././../util';
import LanguageItem from '../../components/languageItem/language';
import { languages } from '../../data/availableLanguages';
import './styles.css'

function welcomeScreen(props) {

  function setLanguageHandler(code) {
    props.setLanguage(code);
    updateActiveWordListFromAPI(code)
      .catch(err => console.log(err))
  }

  return (
    <div className='welcomeScreen'>
      {
        languages.map(lang => <LanguageItem key={lang.code} data={lang} onClickEvent={() => setLanguageHandler(lang.code)} />)
      }
    </div>
  )
}

const mapDispatchToProps = {
  setLanguage,
  setWordsList
}

export default connect(null, mapDispatchToProps)(welcomeScreen)
