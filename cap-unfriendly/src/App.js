import './App.css';
import Box from './components/Box.js';
import ListEntries from './components/ListEntries.js';
import StatTable from './components/StatTable.js';

function App() {

  return (
    <div className="App">
      {/*<header className="App-header">
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
      */}
      <Box />
      {/*<StatTable/>*/}
      <ListEntries />
    </div>
  );
}

export default App;
