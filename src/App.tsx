import React from 'react';
import './App.css';
import { Header } from './components/elements/header/header';
import { Main } from './components/elements/main/main';
import { Futter } from './components/elements/futter/futter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Futter/>
    </div>
  );
}

export default App;
