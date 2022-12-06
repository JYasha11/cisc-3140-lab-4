import logo from './logo.svg';
import './index.css';
import Header from './Components/Header';
import AddSquirrel from './Components/AddSquirrel';

function App() {
  return (
    <>
   
    <Header/>
    <div class="grid-container">
  <div class="grid-item"><AddSquirrel/></div>
  <div class="grid-item"><div className="list">
      <ul>
        <li>Squirrel sighting ID</li>
        <li>Color Key</li>
        <li>Activity</li>
        <li>Age</li>
        <li>Date</li>
        <li>Time</li>
        <li>Location ID</li>
      </ul>
    </div></div>
  </div>
    
    
    </>
  );
}

export default App;
