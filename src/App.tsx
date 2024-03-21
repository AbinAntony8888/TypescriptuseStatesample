import React, { useState } from 'react';
import './App.css';
import Sample from './compontent/Sample';
import Result from './compontent/Result';

function App() {
  const [number,setNumber]=useState(0)
  const add=()=>{
    setNumber(number+1)  
 }
    const sub=()=>{
     setNumber(number-1)
    }  
  return (
    <div className="App">
      <Result num={number}  />
      <Sample add={add}
       sub={sub}/>
    </div>
  );
}

export default App;
