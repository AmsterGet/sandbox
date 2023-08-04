import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@reportportal/ui-kit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Button</Button>
        <Button variant="danger">Button</Button>
        <ThemeProvider theme="light">
          <Button>Light theme button</Button>
        </ThemeProvider>
        <ThemeProvider customThemes={{ 'my-theme': 'my-custom-theme' }} theme="my-theme">
          <Button>Custom theme button</Button>
          <ThemeProvider theme="dark">
            <Button>Dark theme button override</Button>
          </ThemeProvider>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
