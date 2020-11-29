import React, { Component } from 'react';
import HyperModal from 'react-hyper-modal';
import { connect } from 'react-redux';
import { setModalStatus, setRepeatTimes } from '../../redux/actions';
import ModalBtn from '../button/button';
import { updateTimesToRepeat } from '../../services/config'

class repeatTimes extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      id: null,
      times: null
    }
  }

  closeModal = () => {
    this.props.setModalStatus('repeatTimesModal', false);
  };

  componentWillReceiveProps(newProps) {
    const { timesToRepeat } = newProps;
    this.setState({
      id: timesToRepeat._id,
      times: String(timesToRepeat.repeat_times)
    })
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
 }

  updateTimes = () => {
    let { times, id } = this.state;
    times = parseInt(times);

    if(!times) {
      return console.log('not a number')
    }

    updateTimesToRepeat(id, times)
      .then(config => {
        this.props.setRepeatTimes(config);
        console.log('Times updated');
      })
      .catch(err => console.log(err))
  }

  render() {
    const { isModalOpen } = this.props;

    return (
      <HyperModal
        isOpen={isModalOpen}
        requestClose={this.closeModal}
        classes={{contentClassName: 'app-modal'}}
      >
        <div className="config-modal">
          <h2>Enter how many times do you want to play each word</h2>
          <input name="times" type="text" value={this.state.times || ''} onChange={this.onChange} />
          <div className="actions">
            <ModalBtn tagClass="btn_bc_blue" icon="close" text="CLOSE" onClickEvent={this.closeModal} />
            <ModalBtn tagClass="btn_bc_green" icon='save' text='SAVE' onClickEvent={this.updateTimes} />
          </div>
        </div>
      </HyperModal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.modalsReducer.repeatTimesModal,
    timesToRepeat: state.wordsReducer.repeat_times
  }
}

const mapDispatchToProps = {
  setModalStatus,
  setRepeatTimes
}

export default connect(mapStateToProps, mapDispatchToProps)(repeatTimes);
