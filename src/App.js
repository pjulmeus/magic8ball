import React from 'react';
import Eightball from './eightball';
import eightballArr from './eightballArr';
import './App.css';

function App() {
  return (
    <>
       <h1> Magic 8 Ball </h1>
   <Eightball answers={eightballArr}/>
    </>
 
  );
}

export default App;
