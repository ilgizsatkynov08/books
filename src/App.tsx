import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header block={true} toggleModal={() => {}} />
    </div>
  );
}

export default App;
