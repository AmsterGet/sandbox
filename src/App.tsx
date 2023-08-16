import React from 'react';
import './App.css';
import { ThemeProvider, Checkbox, SystemMessage, FieldText, Modal, Button } from '@reportportal/ui-kit';

const ModalContent = () => {
  const [name, setName] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const onChangeCheckmark = (event: any) => {
    setChecked(event.target.checked);
  };

  const onChangeName = (event: any) => {
    setName(event.target.value);
  }

  const onClearName = () => {
    setName('');
  };

  return (
      <div>
        {!checked && (
            <FieldText
                label="What is your name?"
                placeholder="Type name here"
                helpText={'This field is intended for ...'}
                value={name}
                onChange={onChangeName}
                clearable
                onClear={onClearName}
            />
        )}
        <Checkbox value={checked} onChange={onChangeCheckmark}>Check me</Checkbox>
      </div>
  );
}

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const showModalAction = () => {
    setShowModal(true);
  }

  const closeModalAction = () => {
    setShowModal(false);
  }

  const modalProps = {
    title: 'Login form',
    okButton: {
      // type: 'submit',
      children: 'Login',
      onClick: () => {
        console.log('Logged in successfully');
      },
    },
    cancelButton: {
      children: 'Cancel',
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <SystemMessage header="Header" caption="Caption" widthByContent>Message</SystemMessage>
        <Button onClick={showModalAction}>Button</Button>
        <ThemeProvider theme="light">
          <Button>Light theme button</Button>
        </ThemeProvider>
        <ThemeProvider theme="dark">
          <Button>Dark theme button</Button>
        </ThemeProvider>
        <div className="Custom-theme">
          Custom theme
          <br />
          <ThemeProvider customThemes={{ 'my-theme': 'my-custom-theme' }} theme="my-theme">
            <Button>Custom theme button</Button>
            <ThemeProvider theme="dark">
              <Button>Dark theme button override</Button>
            </ThemeProvider>
          </ThemeProvider>
        </div>
        {showModal && (
            <Modal overlay="light-cyan" onClose={closeModalAction} {...modalProps}>
              <ModalContent />
              <ModalContent />
              <ModalContent />
              <ModalContent />
              <ModalContent />
            </Modal>
        )}
      </header>
    </div>
  );
}

export default App;
