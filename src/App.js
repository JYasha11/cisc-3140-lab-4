import logo from './logo.svg';
import './index.css';
import Header from './Components/Header';
import AddSquirrel from './Components/AddSquirrel';
import './App.css';
import DataLists from './Components/DataLists';

function App() {
  return (
    <>
   
    <Header/>
    <div class="grid-container">
  <div class="grid-item"><AddSquirrel/></div>
  <div class="grid-item"><div className="list">
          <ul>
          <li><input type="checkbox" /></li>
          <li>Squirrel sighting ID</li>
          <li>Color Key</li>
          <li>Activity</li>
          <li>Age</li>
          <li>Date</li>
          <li>Time</li>
          <li>Location ID</li>
        </ul>
      </div></div>
      <hr style={{background: 'lightgrey', border: 'none', height: '3px'}}/>
      <DataLists />
      </div>
    </>

  );
}

export default App;
