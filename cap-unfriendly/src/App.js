import './App.css';
import Box from './components/Box.js';
import ListEntries from './components/ListEntries.js';
import StatTable from './components/StatTable.js';
import Blackhawks from './utils/Blackhawks.js'

function App() {

  return (
    <div className="App">
      <Box />
      {/*<StatTable/>*/}
      <ListEntries />
      <h1>{Blackhawks()}</h1>
    </div>
  );
}

export default App;
