import logo from './logo.svg';
import './App.css';
import {ThemeContext} from './theme-context'
import React from 'react'

function App() {

const {theme, toggle, dark } = React.useContext(ThemeContext)


  return (
    <div className="App">
      <header className="App-header" style = {{backgroundColor: theme.backgroundColor, color: theme.color}} >
        <button
        type = "button"
        onClick = {toggle}
        style = {{backgroundColor: theme.backgroundColor, color: theme.color}}
        >
          Click here to toggle to {!dark ? 'dark': 'light'} theme
          </button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
