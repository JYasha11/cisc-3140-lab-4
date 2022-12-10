//import logo from './logo.svg';
import './index.css';
import Header from './Components/Header';
import AddSquirrel from './Components/AddSquirrel';
import Squirrels from './Components/Squirrels'
import React, {useCallback, useState, useEffect} from 'react';
function App() {
  const [squirrelRes, setSquirrels] = useState([]);
  const getSquirrel = useCallback(() => {
    fetch("http://localhost:8080/squirrels")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.rows)
        setSquirrels(res.rows)
      })
  });

  const addSquirrelHandler = useCallback((squirrel) => {
    fetch("http://localhost:8000/addSquirrel/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  }, [])




  useEffect(() => {
    getSquirrel();
  },[]);
  return (
    <>
   
    <Header/>
    <div className="grid-container">
  <div className="grid-item"><AddSquirrel/></div>
  <div className="grid-item">
    <div className="list">
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
    
 
              
  <Squirrels squirrels={squirrelRes} />
  <AddSquirrel addSquirrel={addSquirrelHandler} />

          
    </>
  );
}

export default App;
