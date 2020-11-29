import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLanguage, setWordsList } from '../../redux/actions';
import { updateActiveWordListFromAPI } from '.././../util';
import LanguageItem from '../../components/languageItem/language';
import { languages } from '../../data/availableLanguages';

export class welcomeScreen extends Component {

  componentDidMount() {
    // this.props.setLanguage('ENG');

    updateActiveWordListFromAPI()
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        {
          languages.map(lang => <LanguageItem data={lang} />)
        }
      </>
    )
  }
}

const mapDispatchToProps = {
  setLanguage,
  setWordsList
}

export default connect(null, mapDispatchToProps)(welcomeScreen)
