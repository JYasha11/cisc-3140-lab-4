import './App.css';
import DataLists from './Components/DataLists';

function App() {
  return (
    <>
      <div className="list">
        <ul>
          <li><input type="checkbox" /></li>
          <li>Squirrel sighting ID</li>
          <li>Color Key</li>
          <li>Activity</li>
          <li>Age</li>
          <li>Date</li>
          <li>Time</li>
          <li>Location ID</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <hr style={{background: 'lightgrey', border: 'none', height: '3px'}}/>
      <DataLists />
    </>

  );
}

export default App;
