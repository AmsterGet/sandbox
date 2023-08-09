import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@reportportal/ui-kit/dist/button';
import { ThemeProvider } from '@reportportal/ui-kit/dist/themeProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>Button</Button>
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
      </header>
    </div>
  );
}

export default App;
