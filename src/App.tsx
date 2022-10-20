import React, {useState} from 'react';
import './App.css';
import Lottery from "./Lottery/Lottery";

function App() {
  const randomNumber1 = Math.floor(Math.random() * (12 - 5)) + 5;
  const randomNumber2 = Math.floor(Math.random() * (18 - 12)) + 12;
  const randomNumber3 = Math.floor(Math.random() * (24 - 18)) + 18;
  const randomNumber4 = Math.floor(Math.random() * (30 - 24)) + 24;
  const randomNumber5 = Math.floor(Math.random() * (36 - 30)) + 30;

  function refreshPage(){
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="Number">
        <div className="lottery">Lottery!!! Try your luck!!!</div>
        <Lottery number={randomNumber1}/>
        <Lottery number={randomNumber2}/>
        <Lottery number={randomNumber3}/>
        <Lottery number={randomNumber4}/>
        <Lottery number={randomNumber5}/>
        <div>
          <button type="button" className="btn" onClick={refreshPage}>Change number!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
