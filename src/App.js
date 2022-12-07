import './App.css';
import DataLists from './Components/DataLists';

function App() {
  return (
    <>
      <div className="list">
        <ul>
          <li></li>
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
      <DataLists />
    </>

  );
}

export default App;
