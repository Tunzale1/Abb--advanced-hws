import React from 'react';
import Button from './components/Button/Button.jsx';
import Modal from './components/Modal/Modal.jsx';


class App extends React.Component {
  state = {
    firstmodal: false,
    seconmodal: false,
  };

  Modal1opened = () => {
    this.setState({ firstmodal: true });
  };

  Modal2opened = () => {
    this.setState({ seconmodal: true });
  };

  closeModal1 = () => {
    this.setState({ firstmodal: false });
  };

  closeModal2 = () => {
    this.setState({ seconmodal: false });
  };

  render() {
    const firstaction = (
      <>
        <Button
          backgroundColor="green"
          text="Close"
          onClick={this.closeModal1}
        />
      </>
    );

    const secondaction = (
      <>
        <Button
          backgroundColor="green"
          text="Close"
          onClick={this.closeModal2}
        />
      </>
    );

    return (
      <div className="window">
        <Button
          backgroundColor="blue"
          text="Open first modal"
          onClick={this.Modal1opened}
        />
        <Button
          backgroundColor="yellow"
          text="Open second modal"
          onClick={this.Modal2opened}
        />

        {this.state.firstmodal && (
          <Modal
            header="First Modal"
            closeButton={true}
            text="This is the first modal window."
            actions={firstaction}
            onClose={this.closeModal1}
          />
        )}

        {this.state.seconmodal && (
          <Modal
            header="Second Modal"
            closeButton={true}
            text="This is the second modal window."
            actions={secondaction}
            onClose={this.closeModal2}
          />
        )}
      </div>
    );
  }
}

export default App;
