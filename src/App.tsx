import React from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import Button from '@reportportal/ui-kit/dist/button.js';
import { ThemeProvider, Checkbox, SystemMessage, FieldText } from '@reportportal/ui-kit';

function App() {
  const [name, setName] = React.useState('');
  const [checked, setChecked] = React.useState(true);

  const onNameChange = (event: any) => {
    setName(event.target.value);
  }

  const onChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <header className="App-header">
        <FieldText placeholder="Type smth here" value={name} onChange={onNameChange} clearable onClear={() => setName('')} defaultWidth />
        <SystemMessage header="Header" caption="Caption" widthByContent>Message</SystemMessage>
        <Button>Button</Button>
        <ThemeProvider theme="light">
          <Button>Light theme button</Button>
        </ThemeProvider>
        <ThemeProvider theme="dark">
          <Button>Dark theme button</Button>
          <Checkbox value={checked} onChange={onChange}>Checkbox dark</Checkbox>
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
      </header>
    </div>
  );
}

export default App;
