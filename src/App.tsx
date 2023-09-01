import React from 'react';
import './App.css';
import { DropdownValue } from "@reportportal/ui-kit/dist/components/dropdown/types";
import {
  ThemeProvider,
  Checkbox,
  SystemMessage,
  FieldText,
  Modal,
  Button,
  Dropdown,
  FieldNumber,
  Toggle,
  Icon,
  BubblesLoader,
} from '@reportportal/ui-kit';

const ModalContent = () => {
  const [name, setName] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState<string | number>('0');
  const handleChange = (val: string | number) => {
    setValue(val);
  };

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
        <div>
          <Checkbox value={checked} onChange={onChangeCheckmark}>Check me</Checkbox>
        </div>
        <div>
          <Toggle value={checked} onChange={onChangeCheckmark}>Check me</Toggle>
        </div>
        <FieldNumber value={value} onChange={handleChange} />
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
        <div>
          <Icon icon="delete" />
        </div>
      </div>
  );
}

const DropdownField = () => {
  const [activeOption, setActiveOption] = React.useState<DropdownValue>(1);

  const dropdownOptions = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
  ];

  const onChangeOption = (value: DropdownValue) => {
    setActiveOption(value);
  }

  return (
      <Dropdown
          value={activeOption}
          options={dropdownOptions}
          onChange={onChangeOption}
      />
  )
}

function App() {
  const [showModal, setShowModal] = React.useState(false);

  const showModalAction = () => {
    setShowModal(true);
  }

  const closeModalAction = () => {
    setShowModal(false);
  }

  const login = () => {
    console.log('Logged in successfully');
  }

  return (
    <div className="App">
      <header className="App-header">
        <SystemMessage header="Header" caption="Caption" widthByContent>
          Message
          <BubblesLoader />
        </SystemMessage>
        <Button type="submit" onClick={showModalAction}>Show modal</Button>
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
            <Modal
              title={'Login form'}
              okButton={{
                  type: 'submit',
                  children: 'Login',
                  onClick: login,
              }}
              cancelButton={{
                children: 'Cancel'
              }}
              overlay="light-cyan" onClose={closeModalAction}
            >
              <ModalContent />
              <DropdownField />
            </Modal>
        )}
      </header>
    </div>
  );
}

export default App;
