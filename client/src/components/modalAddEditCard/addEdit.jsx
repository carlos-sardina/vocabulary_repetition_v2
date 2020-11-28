import React, { Component } from 'react';
import HyperModal from 'react-hyper-modal';

export default class addEditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    return (
      <HyperModal
        isOpen={isModalOpen}
        requestClose={this.closeModal}
      >
        Add Edit Modal
      </HyperModal>
    );
  }
}
