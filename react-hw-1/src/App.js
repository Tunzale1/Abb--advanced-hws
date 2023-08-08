import React, { Component } from 'react'
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import './index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      data: {}
    }
  }

  modalData = [
    {
      id: 'modal1',
      header: 'First Modal',
      closeButton: true,
      text: "Is this the first modal window?",
      actions: (
        <>
          <Button
            backgroundColor='green'
            text='Yes'
          />
          <Button
            backgroundColor='red'
            text='No'
          />
        </>
      )
    },
    {
      id: 'modal2',
      header: 'Second Modal',
      closeButton: true,
      text: "Is this the second modal window?",
      actions: (
        <>
          <Button
            backgroundColor='green'
            text='Yes'
          />
          <Button
            backgroundColor='red'
            text='No'
          />
        </>
      )
    }
  ]

  handleOpenModal = (modalId) => {
    const currentModal = this.modalData.find((modal) => modal.id === modalId);
    if (currentModal) {
      this.setState({ isOpen: true, data: currentModal });
    }

  }

  handleCloseModal = () => {
    this.setState({ isOpen: false, data: {} })
  }


  render() {

    return (

      <div className="App">

        <Button
          backgroundColor='blue'
          text='Open first modal'
          dataModal='modal1'
          onClick={(e) => this.handleOpenModal(e.target.dataset.modal)}
        />
        <Button
          backgroundColor='pink'
          text='Open second modal'
          dataModal='modal2'
          onClick={(e) => this.handleOpenModal(e.target.dataset.modal)}
        />

        {this.state.isOpen &&
          <Modal
            data={this.state.data}
            onClose={this.handleCloseModal}
          />
        }

      </div>

    );
  }
}


export default App;