import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../redux/actions';
import { updateActiveWordListFromAPI, setInitialData } from '.././../util';
import LanguageItem from '../../components/languageItem/language';
import { languages } from '../../data/availableLanguages';
import { getConfig } from '../../services/config';
import './styles.css';
import { toast } from 'react-toastify';

function welcomeScreen(props) {

  function setLanguageHandler(lang) {
    getConfig(lang.code)
      .then(data => {
        setInitialData(data);
        props.setLanguage(lang);
        return updateActiveWordListFromAPI(lang.code);
      })
      .catch(err => toast.error(err))
  }

  return (
    <div className='welcomeScreen'>
      <div className="container">
        <h2>Select a language</h2>
        <div className="language-list">
          {
            languages.map(lang => <LanguageItem key={lang.code} data={lang} onClickEvent={() => setLanguageHandler(lang)} />)
          }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setLanguage
}

export default connect(null, mapDispatchToProps)(welcomeScreen)
